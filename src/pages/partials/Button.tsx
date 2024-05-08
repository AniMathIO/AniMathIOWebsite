import { Link } from 'react-router-dom';

interface ButtonProps {
    to: string; // URL to navigate to
    text: string; // Button text
    imageUrl?: string; // Optional image URL
    altText?: string; // Optional alt text for the image
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ to, text, imageUrl, altText, disabled }) => (
    <Link to={to} className={`flex items-center justify-center gap-2 mx-2 px-7 py-1 my-2 rounded-xl bg-cyan-600 ${disabled ? 'opacity-50' : ''}`} >
        {imageUrl && <img src={imageUrl} alt={altText || ''} className="aspect-[0.83] w-[33px]" />}
        <span className="grow justify-center pr-3.5 my-auto">{text}</span>
    </Link>
);

export default Button;
