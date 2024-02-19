import Button
    from "./partials/Button";
interface InstallButtonProps {
    imageUrl: string;
    altText: string;
    platform: string;
}

const InstallButton: React.FC<InstallButtonProps> = ({ imageUrl, altText, platform }) => (
    // Temporary link to the ManimStudio releases page until we have binaries to host
    <Button to="https://github.com/MemerGamer/ManimStudio/releases" text={`Install on ${platform}`} imageUrl={imageUrl} altText={altText} />
);

const Home: React.FC = () => {
    const installButtons = [
        {
            imageUrl: "./img/windows.svg",
            altText: "Install on Windows icon",
            platform: "Windows",
            installLink: "/install/windows",
        },
        {
            imageUrl: "./img/macos.svg",
            altText: "Install on Mac icon",
            platform: "Mac",
            installLink: "/install/macos",
        },
        {
            imageUrl: "./img/tux.svg",
            altText: "Install on Linux icon",
            platform: "Linux",
            installLink: "/install/linux",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center dark:bg-gray-800 min-h-screen">
            <section className="py-4 md:mt-16 max-w-5xl w-full px-5 max-md:px-2">
                <div className="flex gap-2 items-center justify-center flex-col md:flex-row">
                    <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <img loading="lazy" srcSet="./img/welcome.png" alt="Manim video example" className="self-stretch my-auto w-full aspect-[1.41] max-md:mt-9" />
                    </div>
                    <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 pb-3.5 dark:text-white max-md:mt-6 max-md:max-w-full">
                            <div className="text-4xl font-bold tracking-tighter leading-[60px] max-md:max-w-full"> Create Manim mathematical <br /> videos with ManimStudio! </div>
                            <div className="text-base leading-6 text-center max-md:max-w-full">
                                Manim Studio revolutionizes the creation of mathematical videos by harnessing the power of the Manim framework, tailored for educators, students, and professionals seeking to bring complex concepts to life. With an intuitive Python QT interface, it simplifies animations and visualizations, making sophisticated video production accessible to all skill levels. Dive into Manim Studio, where your mathematical narratives unfold with precision, <br /> clarity, and ease, transforming abstract ideas into captivating visual stories.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center px-16 py-11 text-base font-bold tracking-wide leading-6 text-center text-white whitespace-nowrap max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                        <Button to="https://memergamer.github.io/ManimStudio/index.html" text="Getting started" imageUrl="./img/github.svg" />
                        <Button to="https://github.com/MemerGamer/ManimStudio" text="Star on GitHub" imageUrl="./img/cli.svg" />
                    </div>
                </div>
                <div className="flex flex-col px-4 pt-2 pb-5 font-bold text-white max-md:max-w-full">
                    <div className="self-center text-4xl tracking-tighter max-md:max-w-full">Try out ManimStudio for FREE!</div>
                    <div className="flex flex-col md:flex-row justify-center items-center px-16 mt-9 pt-5 text-base tracking-wide leading-6 whitespace-nowrap max-md:px-5 max-md:max-w-full">
                        {installButtons.map((button, index) => (
                            <InstallButton key={index} imageUrl={button.imageUrl} altText={button.altText} platform={button.platform} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;