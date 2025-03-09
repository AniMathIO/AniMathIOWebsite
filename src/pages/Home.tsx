import Button
    from "./partials/Button";

import {
    MacbookScroll
} from "../ui/macbook-scroll";
interface InstallButtonProps {
    imageUrl: string;
    altText: string;
    platform: string;
    isDisabled?: boolean;
    installLink: string;
    legacy?: { version: string };
}
import ReactPlayer from 'react-player';

const InstallButton: React.FC<InstallButtonProps> = ({ imageUrl, altText, platform, installLink, isDisabled, legacy }) => (
    <Button
        to={installLink}
        text={`Install on ${platform}`}
        imageUrl={imageUrl}
        altText={altText}
        disabled={isDisabled}
        legacy={legacy}
    />
);


const Home: React.FC = () => {
    const installButtons = [
        {
            imageUrl: "./img/windows.svg",
            altText: "Install on Windows icon",
            platform: "Windows",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.4.1/AniMathIO.Setup.1.4.1.exe",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Install on Linux icon",
            platform: "Linux (AppImage)",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.4.1/AniMathIO-1.4.1.AppImage",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Install on Linux icon",
            platform: "Linux (Snap)",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.4.1/animathio_1.4.1_amd64.snap",
            isDisabled: false,
        },
        {
            imageUrl: "./img/macos.svg",
            altText: "Install on Mac icon",
            platform: "Mac Os (Universal)",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.3.0/AniMathIO-1.3.0-universal.dmg",
            // installLink: "/install/macos",
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
                <div className="flex justify-center items-center px-16 py-11 text-base font-bold tracking-wide leading-6 text-center text-white whitespace-nowrap max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                        <Button to="https://github.com/AniMathIO" text="Follow us on Github" imageUrl="./img/github.svg" />
                        <Button to="https://github.com/AniMathIO/AniMathIO#AniMathIO" text="Getting started" imageUrl="./img/cli.svg" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center px-16 mt-9 pt-5 text-base tracking-wide leading-6 whitespace-nowrap max-md:px-5 max-md:max-w-full">
                    {installButtons.map((button, index) => (
                        <div key={index} className="relative flex items-center space-x-2">
                            <InstallButton
                                imageUrl={button.imageUrl}
                                altText={button.altText}
                                platform={button.platform}
                                installLink={button.installLink}
                                isDisabled={button.isDisabled}
                                legacy={button.legacy}
                            />
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Home;