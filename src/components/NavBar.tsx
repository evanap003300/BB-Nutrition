import { useState } from 'react';

// A simple hamburger icon component
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

// A simple close (X) icon component
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
    // State to manage whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // Using <nav> for semantic correctness.
        // shadow-md adds a subtle shadow for depth.
        <nav className="bg-white shadow-md relative">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Brand/Logo */}
                    <a href="/" className="text-2xl font-bold text-gray-800">
                        BB Nutrition
                    </a>

                    {/* Desktop Menu Links */}
                    {/* 'hidden' by default, 'md:flex' makes it visible on medium screens and up */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="/about" className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            About
                        </a>
                        <a href="/pricing" className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Pricing
                        </a>
                        <a href="/#apply" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Apply
                        </a>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    {/* 'md:hidden' makes it visible ONLY on small screens */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {/* Show close icon if menu is open, else show hamburger icon */}
                            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {/* This section is conditionally rendered based on 'isMenuOpen'.
              It's positioned absolutely to appear over the content below it.
              A transition is added for a smooth slide-down effect.
            */}
            <div
                className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                <div className="flex flex-col items-center space-y-4 py-4">
                    <a href="/about" className="text-lg text-gray-600 hover:text-blue-600">
                        About
                    </a>
                    <a href="/pricing" className="text-lg text-gray-600 hover:text-blue-600">
                        Pricing
                    </a>
                    <a href="/#apply" className="w-11/12 text-center bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">
                        Apply
                    </a>
                </div>
            </div>
        </nav>
    );
};