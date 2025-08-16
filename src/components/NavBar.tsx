import { useState } from 'react';
// Import the Link component for client-side routing
import { Link } from 'react-router-dom';

// --- Icon Components ---
const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);


export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md relative">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Brand/Logo now uses Link */}
                    <Link to="/" className="text-2xl font-bold text-gray-800">
                        BB Nutrition
                    </Link>

                    {/* Desktop Menu Links now use Link */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/about" className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            About
                        </Link>
                        <Link to="/pricing" className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Pricing
                        </Link>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Apply
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) now uses Link */}
            <div
                className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                <div className="flex flex-col items-center space-y-4 py-4">
                    <Link to="/about" className="text-lg text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link to="/pricing" className="text-lg text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                        Pricing
                    </Link>
                    <a href="/#apply" className="w-11/12 text-center bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700" onClick={toggleMenu}>
                        Apply
                    </a>
                </div>
            </div>
        </nav>
    );
};
