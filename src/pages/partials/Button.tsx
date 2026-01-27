import { Link } from 'react-router-dom';

interface ButtonProps {
    to: string; // URL to navigate to
    text: string; // Button text
    imageUrl?: string; // Optional image URL
    altText?: string; // Optional alt text for the image
    disabled?: boolean;
    legacy?: { version: string }
    isExternal?: boolean; // Whether this is an external link
}

const Button: React.FC<ButtonProps> = ({ to, text, imageUrl, altText, disabled, legacy, isExternal = false }) => {
    const buttonClasses = `
        flex items-center justify-center gap-3 
        px-6 py-4 my-2 
        rounded-xl 
        bg-gradient-to-r from-cyan-600 to-cyan-700 
        text-white font-semibold
        shadow-lg hover:shadow-xl
        transition-all duration-200 ease-in-out
        hover:scale-105 hover:from-cyan-500 hover:to-cyan-600
        active:scale-95
        min-h-[56px] w-full
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
    `;

    const isDownloadLink = to.match(/\.(exe|dmg|AppImage|snap|deb|flatpak|zip|tar|gz)$/i);
    const shouldOpenInNewTab = isExternal && !isDownloadLink;

    const content = (
        <>
            {imageUrl && <img src={imageUrl} alt={altText || ''} className="w-6 h-6 flex-shrink-0" />}
            <span className="flex-grow text-center text-sm md:text-base break-words">{text}</span>

            {/* Legacy Badge (Only shown for legacy versions) */}
            {legacy && (
                <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full ml-2 flex-shrink-0">
                    Legacy {legacy.version}
                </span>
            )}
        </>
    );

    if (isExternal || to.startsWith('http')) {
        return (
            <a 
                href={to} 
                download={isDownloadLink ? true : undefined}
                target={shouldOpenInNewTab ? "_blank" : undefined}
                rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                className={buttonClasses}
            >
                {content}
            </a>
        );
    }

    return (
        <Link to={to} className={buttonClasses}>
            {content}
        </Link>
    );
};

export default Button;
