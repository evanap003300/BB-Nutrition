
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

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
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";


    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
            style={{ backgroundColor: '#f0eee6' }}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between gap-8">
                    {/* Left: Brand/Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-900 flex-shrink-0" style={{ fontFamily: 'Georgia, serif' }}>
                        BB Nutrition
                    </Link>

                    {/* Middle: Desktop Menu Links (centered) */}
                    <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                        <Link
                            to="/about"
                            className="text-base text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-base text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Right: Apply Button (smaller) */}
                    <div className="hidden md:flex flex-shrink-0">
                        <motion.a
                            href={intakeFormLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gray-900 text-white font-semibold text-sm rounded-lg transition-all duration-200 ease-out hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-900/20 active:scale-[0.98]"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                            Apply
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-900 hover:text-gray-700 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            <div
                className={`md:hidden absolute w-full shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                style={{ backgroundColor: '#f0eee6' }}
            >
                <div className="flex flex-col items-center space-y-4 py-4">
                    <Link
                        to="/about"
                        className="text-base text-gray-700 hover:text-gray-900"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="/pricing"
                        className="text-base text-gray-700 hover:text-gray-900"
                        onClick={toggleMenu}
                    >
                        Pricing
                    </Link>
                    <a
                        href={intakeFormLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gray-900 text-white font-semibold text-sm rounded-lg hover:bg-gray-800"
                        onClick={toggleMenu}
                    >
                        Apply
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};
