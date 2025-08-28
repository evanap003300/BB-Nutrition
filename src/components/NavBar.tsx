
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
            className="bg-white shadow-md relative"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Empty spacer to keep menu items right-aligned */}
                    <div />

                    {/* Desktop Menu Links (now includes BB Nutrition on the right) */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/about"
                            className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                            Pricing
                        </Link>
                        <CTAButton to={intakeFormLink}>
                            Apply
                        </CTAButton>
                        {/* Brand/Logo is now on the right */}
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            BB Nutrition
                        </Link>
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

            {/* Mobile Menu (Dropdown) — now also includes BB Nutrition */}
            <div
                className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="flex flex-col items-center space-y-4 py-4">
                    <Link
                        to="/about"
                        className="text-lg text-gray-600 hover:text-blue-600"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="/pricing"
                        className="text-lg text-gray-600 hover:text-blue-600"
                        onClick={toggleMenu}
                    >
                        Pricing
                    </Link>
                    <a
                        href="/#apply"
                        className="w-11/12 text-center bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700"
                        onClick={toggleMenu}
                    >
                        Apply
                    </a>
                    <Link
                        to="/"
                        className="text-lg font-bold text-gray-800"
                        onClick={toggleMenu}
                    >
                        BB Nutrition
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};
