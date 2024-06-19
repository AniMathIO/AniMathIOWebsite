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
}

const InstallButton: React.FC<InstallButtonProps> = ({ imageUrl, altText, platform, installLink, isDisabled }) => (
    <Button to={installLink} text={`Install on ${platform}`} imageUrl={imageUrl} altText={altText} disabled={isDisabled} />
);

const Home: React.FC = () => {
    const installButtons = [
        {
            imageUrl: "./img/windows.svg",
            altText: "Install on Windows icon",
            platform: "Windows",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.2.0/AniMathIO.Setup.1.2.0.exe",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Install on Linux icon",
            platform: "Linux (AppImage)",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.2.0/AniMathIO-1.2.0.AppImage",
            isDisabled: false,
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Install on Linux icon",
            platform: "Linux (Snap)",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.2.0/animathio_1.2.0_amd64.snap",
            isDisabled: false,
        },
        {
            imageUrl: "./img/macos.svg",
            altText: "Install on Mac icon",
            platform: "Mac Os (Intel & Apple Silicon)",
            installLink: "https://github.com/AniMathIO/AniMathIO/releases/download/v1.2.0/AniMathIO-1.2.0-universal.dmg",
            // installLink: "/install/macos",
            isDisabled: false,
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
                <div className="flex justify-center items-center px-16 py-11 text-base font-bold tracking-wide leading-6 text-center text-white whitespace-nowrap max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                        <Button to="https://github.com/AniMathIO/AniMathIO#AniMathIO" text="Getting started" imageUrl="./img/github.svg" />
                        <Button to="https://github.com/AniMathIO/AniMathIO" text="Star on GitHub" imageUrl="./img/cli.svg" />
                    </div>
                </div>
                <div className="flex flex-col px-4 pt-2 pb-5 font-bold text-white max-md:max-w-full">
                    <div className="self-center text-black dark:text-white text-4xl tracking-tighter max-md:max-w-full">Download for FREE!</div>
                    <div className="flex flex-col md:flex-row justify-center items-center px-16 mt-9 pt-5 text-base tracking-wide leading-6 whitespace-nowrap max-md:px-5 max-md:max-w-full">
                        {installButtons.map((button, index) => (
                            <InstallButton key={index} imageUrl={button.imageUrl} altText={button.altText} platform={button.platform} installLink={button.installLink} isDisabled={button.isDisabled} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;