
import { motion } from 'framer-motion';

const SecondaryButton = ({ children, to }) => (
    <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-900/20 active:scale-[0.98]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
    >
        {children}
    </motion.a>
);

export default SecondaryButton;
