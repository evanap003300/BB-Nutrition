
import { motion } from 'framer-motion';

const SecondaryButton = ({ children, to }) => (
    <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-200 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.a>
);

export default SecondaryButton;
