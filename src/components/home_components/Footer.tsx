
import { motion } from 'framer-motion';

// An icon component for social media links would be great here.
// For simplicity, I'll use text, but you could easily add SVG icons.
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

export const Footer = () => {
    // Automatically gets the current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-600"
        >
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

                    <h3 className="text-xl font-bold text-white mb-4 md:mb-0">
                        BB Nutrition
                    </h3>

                    <div className="text-blue-200">
                        <a href="mailto:brycebroomeinquiries@gmail.com" className="hover:text-white hover:underline transition-colors duration-300">
                            brycebroomeinquiries@gmail.com
                        </a>
                        <span className="mx-2 hidden md:inline">|</span>
                        <p className="mt-2 md:mt-0 md:inline">
                            &copy; {currentYear} BB Nutrition LLC. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};