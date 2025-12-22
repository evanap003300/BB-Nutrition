
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

export const Hero = () => {
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden text-center"
            style={{ backgroundColor: '#f0eee6' }}
        >
            {/* Background visual elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative container mx-auto px-6 md:px-12 lg:px-24 pt-40 md:pt-48 pb-28 md:pb-36">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto"
                >
                    Transform Your Body With
                    <span className="block text-gray-900 mt-2">Expert Nutrition Coaching</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mt-6"
                >
                    Personalized 1-on-1 coaching to lose fat, build muscle, and feel your best—tailored to your goals and lifestyle.
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

