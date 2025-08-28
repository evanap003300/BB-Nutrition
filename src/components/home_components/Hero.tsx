
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

export const Hero = () => {
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 text-center"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                >
                    Personalized Nutrition Coaching to Help You{' '}
                    <span className="text-blue-600">Lose Fat</span>,{' '}
                    <span className="text-blue-500">Build Muscle</span>, &{' '}
                    <span className="text-blue-400">Feel Your Best</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-gray-600"
                >
                    1-on-1 nutrition coaching tailored to your goals, lifestyle, and starting point.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10"
                >
                    <CTAButton to={intakeFormLink}>
                        Apply for Coaching
                    </CTAButton>
                </motion.div>
            </div>
        </motion.section>
    );
};

