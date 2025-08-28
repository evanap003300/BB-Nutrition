
import { motion } from 'framer-motion';

const CTAButton = ({ children, to }) => (
    <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.a>
);

export default CTAButton;
