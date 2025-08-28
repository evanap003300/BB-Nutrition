

import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

export const CTA = () => {
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="apply-cta" className="bg-blue-600"
        >
            <div className="container mx-auto text-center px-6 py-20 pb-40">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-extrabold text-white"
                >
                    Ready to Take Control of Your Nutrition?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-blue-100 mt-4 mb-8"
                >
                    Let’s build a plan that works for YOU.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <CTAButton to={intakeFormLink}>
                        Apply for Coaching Now
                    </CTAButton>
                </motion.div>
            </div>
        </motion.section>
    );
};
