import Button
    from "./partials/Button";

import {
    MacbookScroll
} from "../ui/macbook-scroll";
import ReactPlayer from 'react-player';

interface DownloadCardProps {
    imageUrl: string;
    altText: string;
    platform: string;
    installLink: string;
    isDisabled?: boolean;
    legacy?: { version: string };
    format?: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
    imageUrl,
    altText,
    platform,
    installLink,
    isDisabled,
    legacy,
    format
}) => {
    const isDownloadLink = installLink.match(/\.(exe|dmg|AppImage|snap|deb|flatpak|zip|tar|gz)$/i);

    return (
        <a
            href={installLink}
            download={isDownloadLink ? true : undefined}
            className={`
                group relative
                flex flex-col items-center justify-center
                p-6 md:p-8
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl
                shadow-sm hover:shadow-lg
                transition-all duration-300 ease-out
                hover:border-cyan-500 dark:hover:border-cyan-400
                hover:-translate-y-1
                ${isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
                focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
                min-h-[180px] w-full
            `}
        >
            <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <img
                        src={imageUrl}
                        alt={altText}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white text-center">
                        {platform}
                    </span>
                    {format && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {format}
                        </span>
                    )}
                </div>

                {legacy && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                        Legacy {legacy.version}
                    </span>
                )}

                <div className="mt-2 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 transition-all duration-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                    <span className="text-sm font-medium">Download</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </div>
            </div>
        </a>
    );
};


const Home: React.FC = () => {
    const downloads = [
        {
            imageUrl: "./img/windows.svg",
            altText: "Windows icon",
            platform: "Windows",
            format: ".exe",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/animathio-v1.7.1/AniMathIO.Setup.1.7.1.exe",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Linux icon",
            platform: "Linux",
            format: "AppImage",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/animathio-v1.7.1/AniMathIO-1.7.1.AppImage",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Linux icon",
            platform: "Linux",
            format: "Flatpak",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/animathio-v1.7.1/AniMathIO-1.7.1.flatpak",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Linux icon",
            platform: "Linux",
            format: "Snap",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/animathio-v1.7.1/animathio_1.7.1_amd64.snap",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Linux icon",
            platform: "Linux",
            format: "deb",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/animathio-v1.7.1/animathio_1.7.1_amd64.deb",
            isDisabled: false,
        },
        {
            imageUrl: "./img/macos.svg",
            altText: "macOS icon",
            platform: "macOS",
            format: ".dmg",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.3.0/AniMathIO-1.3.0-universal.dmg",
            isDisabled: false,
            legacy: { version: "1.3.0" }
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center dark:bg-gray-800 min-h-screen">
            <section className="py-4 md:mt-4 max-w-5xl w-full px-5 max-md:px-2">
                <div className="flex gap-2 items-center justify-center flex-col md:flex-row">
                    <div className="overflow-hidden dark:bg-gray-800 bg-white w-full">
                        <MacbookScroll
                            title={
                                <div>
                                    <span className="text-4xl font-bold tracking-tighter leading-[60px] max-md:max-w-full"> Create mathematical <br /> videos and animations with AniMathIO! </span>
                                    <p className="text-lg py-2 px-2">AniMathIO revolutionizes the creation of mathematical videos, tailored for educators, students, and professionals seeking to bring complex concepts to life. With an intuitive, clean and modern interface, it simplifies animations and visualizations, making sophisticated video production accessible to all skill levels. Dive into AniMathIO, where your mathematical narratives unfold with precision, <br /> clarity, and ease, transforming abstract ideas into captivating visual stories.
                                    </p>
                                </div>
                            }

                            src={`./img/welcome.jpg`}
                            badge={<img src="./img/AniMathIO.png" className="w-12 rotate-6" alt="AniMathIO badge" />}
                            showGradient={false}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-2 m-2">
                    <h1 className="text-3xl dark:text-white font-bold mb-2 pb-2">Example Demo:</h1>
                    <ReactPlayer
                        url="./videos/newtons-law.webm"
                        loop={true}
                        width={"100%"}
                        height={"100%"}
                        controls={true}
                        muted={true}
                        playing={true}
                    />
                </div>
                <div className="flex justify-center items-center px-4 md:px-16 py-11 text-base font-bold tracking-wide leading-6 text-center text-white whitespace-nowrap max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl">
                        <Button to="https://github.com/AniMathIO" text="Follow us on Github" imageUrl="./img/github.svg" isExternal={true} />
                        <Button to="https://github.com/AniMathIO/AniMathIO#AniMathIO" text="Getting started" imageUrl="./img/cli.svg" isExternal={true} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4 md:px-16 mt-12 pt-5 max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl dark:text-white font-bold mb-3">
                            Download AniMathIO
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Choose your platform to get started
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {downloads.map((download, index) => (
                            <DownloadCard
                                key={index}
                                imageUrl={download.imageUrl}
                                altText={download.altText}
                                platform={download.platform}
                                format={download.format}
                                installLink={download.installLink}
                                isDisabled={download.isDisabled}
                                legacy={download.legacy}
                            />
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;