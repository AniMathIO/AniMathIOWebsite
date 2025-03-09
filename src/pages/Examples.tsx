import React, { useState, useEffect, useRef, ComponentType } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalSafeForReact = Modal as ComponentType<ReactModal['props']>;

interface Video {
    title: string;
    url: string;
    author?: string;
    createdAt?: string;
    social?: string;
    thumbnailTime: number; // Time in seconds for the thumbnail from the start of the video
    projectLink?: string; // Link to download the .animathio project
}

const unsortedVideos: Video[] = [
    {
        title: "Newton's Law",
        author: "Kovács Bálint-Hunor",
        createdAt: new Date('2024-06-20').toISOString(),
        social: "https://kovacsbalinthunor.com",
        url: './videos/newtons-law.webm',
        thumbnailTime: 15,
    },
    {
        title: "Euler’s Method: Approximating Solutions to Differential Equations",
        author: "Kovács Bálint-Hunor",
        createdAt: new Date('2025-03-09').toISOString(),
        social: "https://kovacsbalinthunor.com",
        url: './videos/eulers-method.webm',
        projectLink: "./projects/eulers-method.animathio",
        thumbnailTime: 5,
    }
];

// Sort videos by creation date in descending order (newest first)
const videos = [...unsortedVideos].sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dateB - dateA; // Descending order
});

// Reusable components
const VideoTitle: React.FC<{ title: string; className?: string }> = ({ title, className }) => (
    <h2 className={`font-semibold text-black dark:text-white line-clamp-2 ${className}`}>{title}</h2>
);

const VideoAuthor: React.FC<{ author?: string; social?: string; onClick?: (e: React.MouseEvent) => void }> = ({
    author,
    social,
    onClick
}) => {
    if (!author) return null;

    return (
        <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-300">
            {social ? (
                <a
                    title='Open profile'
                    href={social}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClick}
                    className="text-blue-500 hover:underline"
                >
                    <span>{author}</span>
                </a>
            ) : (
                <span>{author}</span>
            )}
        </div>
    );
};

const VideoDate: React.FC<{ dateString?: string }> = ({ dateString }) => {
    if (!dateString) return null;

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(dateString)}
        </div>
    );
};

const DownloadButton: React.FC<{ projectLink?: string; onClick: (e: React.MouseEvent) => void; className?: string }> = ({
    projectLink,
    onClick,
    className = "bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
}) => {
    if (!projectLink) return null;

    return (
        <button
            onClick={onClick}
            className={className}
        >
            Download Project
        </button>
    );
};

const Examples: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({});

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        videos.forEach((video) => {
            extractThumbnail(video.url, video.thumbnailTime);
        });
    }, []);

    const extractThumbnail = (url: string, time: number) => {
        const video = document.createElement('video');
        video.src = url;
        video.crossOrigin = 'anonymous';

        video.addEventListener('loadeddata', () => {
            video.currentTime = time;
        });

        video.addEventListener('seeked', () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const thumbnail = canvas.toDataURL();
                    setThumbnails(prevThumbnails => ({
                        ...prevThumbnails,
                        [url]: thumbnail,
                    }));
                }
            }
        });
    };

    const openModal = (video: Video) => {
        setSelectedVideo(video);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    const downloadProject = (e: React.MouseEvent, projectLink?: string) => {
        e.stopPropagation(); // Prevent opening the video modal
        if (projectLink) {
            // Create and trigger a download link
            const link = document.createElement('a');
            link.href = projectLink;
            link.download = projectLink.split('/').pop() || 'project.animathio';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start dark:bg-gray-800 min-h-screen">
            <h1 className="text-4xl font-bold text-black dark:text-white my-2">Examples</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-5xl">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-700"
                        onClick={() => openModal(video)}
                    >
                        <div className="relative">
                            {thumbnails[video.url] ? (
                                <img src={thumbnails[video.url]} alt={video.title} className="w-full h-48 object-cover" />
                            ) : (
                                <div className="w-full h-48 flex items-center justify-center bg-gray-500">
                                    <span className="text-white">Loading...</span>
                                </div>
                            )}
                        </div>
                        <div className="p-3">
                            <VideoTitle title={video.title} className="text-lg" />
                            <VideoAuthor
                                author={video.author}
                                social={video.social}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <VideoDate dateString={video.createdAt} />
                        </div>
                    </div>
                ))}
            </div>

            <ModalSafeForReact
                isOpen={!!selectedVideo}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="bg-white dark:bg-gray-800 p-4 max-w-3xl mx-auto my-8 rounded-lg outline-none relative"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
            >
                {selectedVideo && (
                    <div className="flex flex-col items-center">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-red-500 text-gray-800 dark:text-gray-200 p-2 rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className="w-full mb-4">
                            <div className="break-words pr-8">
                                <VideoTitle title={selectedVideo.title} className="text-2xl break-words" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <VideoAuthor author={selectedVideo.author} social={selectedVideo.social} />
                                    <VideoDate dateString={selectedVideo.createdAt} />
                                </div>
                                <DownloadButton
                                    projectLink={selectedVideo.projectLink}
                                    onClick={(e) => downloadProject(e, selectedVideo.projectLink)}
                                />
                            </div>
                        </div>
                        <ReactPlayer
                            url={selectedVideo.url}
                            controls
                            width="100%"
                        />
                    </div>
                )}
            </ModalSafeForReact>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default Examples;