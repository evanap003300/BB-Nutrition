
import { motion } from 'framer-motion';

const CTAButton = ({ children, to }) => (
    <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-semibold text-base rounded-lg transition-all duration-200 ease-out hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-900/20 active:scale-[0.98]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
    >
        {children}
    </motion.a>
);

export default CTAButton;
