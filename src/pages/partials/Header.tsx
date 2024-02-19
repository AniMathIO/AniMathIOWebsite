import { Link } from 'react-router-dom';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}
const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <header className="w-full dark:bg-gray-900 dark:text-white text-black px-10 py-3.5 border-b border-gray-200 flex flex-col items-center">
            <div className="flex gap-0 justify-between self-stretch px-10 py-3.5 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <Link to="/" className="flex gap-5 items-center">
                    <div className="flex gap-2 my-auto text-lg font-bold tracking-tight text-white whitespace-nowrap">
                        {/* <img loading="lazy" srcSet="./img/ManimStudioLogoDark.png" alt="ManimStudio logo" className="w-8 aspect-square" /> */}
                        <img loading="lazy" srcSet={darkMode ? "./img/ManimStudioLogoDark.png" : "./img/ManimStudioLogoLight.png"} alt="ManimStudio logo" className="w-10 aspect-square" />
                    </div>
                </Link>
                <div className="flex gap-5 justify-between pl-20 max-md:flex-wrap max-md:pl-5 max-md:py-2.5">
                    <div className="flex gap-5 justify-between px-7 py-2.5 text-sm font-medium leading-5 dark:text-white max-md:px-5">
                        <Link to="https://github.com/MemerGamer/ManimStudio">Github</Link>
                        <Link to="https://discord.gg/cZMTYSAHRX">Discord</Link>
                        {/* <Link to='/made-with-manim'>Made with ManimStudio</Link> */}
                    </div>
                    <button onClick={toggleDarkMode} className="md:w-20 w-14">
                        <div className="flex flex-1 justify-center items-center px-8 py-2 rounded-xl bg-green-600 max-md:px-5">
                            <img src={darkMode ? "./img/sun.png" : "./img/moon.png"} alt="theme icon" />

                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;
