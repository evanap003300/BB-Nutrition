
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

export const CoachingHero = () => {
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 text-center"
        >
            <div className="container mx-auto px-6 py-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                >
                    Transform Your Body and Health with Personalized Nutrition Coaching
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl mt-4 max-w-3xl mx-auto text-gray-700"
                >
                    At BB Nutrition, I offer expert 1-on-1 coaching tailored to your goals—whether that’s fat loss, muscle gain, body recomposition, or simply feeling your best every day.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8"
                >
                    <CTAButton to={intakeFormLink}>
                        Apply for Coaching
                    </CTAButton>
                </motion.div>
            </div>
        </motion.section>
    );
};
