import { Link } from 'react-router-dom';

interface ButtonProps {
    to: string; // URL to navigate to
    text: string; // Button text
    imageUrl?: string; // Optional image URL
    altText?: string; // Optional alt text for the image
    disabled?: boolean;
    legacy?: { version: string }
}

const Button: React.FC<ButtonProps> = ({ to, text, imageUrl, altText, disabled, legacy }) => (
    <Link to={to} className={`flex items-center justify-center gap-2 mx-2 px-7 py-2 my-2 rounded-xl bg-cyan-600 text-white ${disabled ? 'opacity-50' : ''}`} >
        {imageUrl && <img src={imageUrl} alt={altText || ''} className="w-[33px]" />}
        <span className="flex-grow text-center">{text}</span>

        {/* Legacy Badge (Only shown for legacy versions) */}
        {legacy && (
            <span className="bg-red-500 text-white text-xs px-2 py-2 rounded-full ml-2">
                Legacy {legacy.version}
            </span>
        )}
    </Link>
);

export default Button;
