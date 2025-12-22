
import { motion } from 'framer-motion';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900"
        >
            <div className="container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Logo Column */}
                    <div>
                        <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                            BB Nutrition
                        </h3>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-semibold text-base mb-3">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    Coaching
                                </a>
                            </li>
                            <li>
                                <a href="/#about" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    About Bryce
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    Plans & Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Programs Column */}
                    <div>
                        <h4 className="text-white font-semibold text-base mb-3">Programs</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    Fat Loss
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    Muscle Gain
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    Body Recomposition
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-semibold text-base mb-3">Get Started</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:brycebroomeinquiries@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    Email
                                </a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Apply for Coaching
                                </motion.a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} BB Nutrition LLC. All Rights Reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-4 md:mt-0">
                            <a href="mailto:brycebroomeinquiries@gmail.com" className="hover:text-white transition-colors duration-300">
                                brycebroomeinquiries@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};