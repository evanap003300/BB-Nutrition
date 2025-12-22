
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

export const CoachingHero = () => {
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden text-center"
            style={{ backgroundColor: '#f0eee6' }}
        >
            {/* Background visual elements - inverted from home hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-400/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative container mx-auto px-6 md:px-12 lg:px-24 pt-40 md:pt-48 pb-24 md:pb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto"
                >
                    Professional Nutrition Coaching
                    <span className="block text-gray-900 mt-2">That Gets Results</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mt-6"
                >
                    Expert 1-on-1 coaching for fat loss, muscle gain, and body recomposition. No cookie-cutter plans—just real strategies that work.
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                >
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900">1-on-1</div>
                        <div className="text-sm md:text-base text-gray-600 mt-2">Personal Coaching</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900">Weekly</div>
                        <div className="text-sm md:text-base text-gray-600 mt-2">Check-in Calls</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900">Daily</div>
                        <div className="text-sm md:text-base text-gray-600 mt-2">Email Support</div>
                    </div>
                </motion.div>

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
