import React, { useState, useEffect, useRef, ComponentType } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalSafeForReact = Modal as ComponentType<ReactModal['props']>;

interface Video {
    title: string;
    url: string;
    thumbnailTime: number; // Time in seconds for the thumbnail from the start of the video
}
const videos: Video[] = [
    {
        title: "Newton's Law",
        url: './demo.webm',
        thumbnailTime: 15,
    },
    // Add more videos here
];

const Examples: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<{ title: string, url: string } | null>(null);
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

    const openModal = (video: { title: string, url: string }) => {
        setSelectedVideo(video);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="flex flex-col items-center justify-start dark:bg-gray-800 min-h-screen">
            <h1 className="text-4xl font-bold text-black dark:text-white my-2">Examples</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-5xl">
                {videos.map((video, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => openModal(video)}>
                        {thumbnails[video.url] ? (
                            <img src={thumbnails[video.url]} alt={video.title} className="w-full h-48 object-cover rounded-lg" />
                        ) : (
                            <div className="w-full h-48 flex items-center justify-center bg-gray-500 rounded-lg">
                                <span className="text-white">Loading...</span>
                            </div>
                        )}
                        <h2 className="text-xl font-semibold text-black dark:text-white mt-2">{video.title}</h2>
                    </div>
                ))}
            </div>

            <ModalSafeForReact
                isOpen={!!selectedVideo}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="bg-white dark:bg-gray-800 p-4 max-w-3xl mx-auto my-8 rounded-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
            >
                {selectedVideo && (
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl text-black dark:text-white font-bold mb-4">{selectedVideo.title}</h2>
                        <ReactPlayer
                            url={selectedVideo.url}
                            controls
                            width="100%"
                        />
                        <button
                            onClick={closeModal}
                            className="mt-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                )}
            </ModalSafeForReact>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default Examples;
