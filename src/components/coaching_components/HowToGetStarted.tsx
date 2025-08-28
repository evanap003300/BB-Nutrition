
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

// A reusable step component to keep the main component clean.
const Step = ({ number, title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left"
    >
        <div className="flex items-center justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-xl">
                {number}
            </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
);

export const HowToGetStarted = () => {
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50"
        >
            <div className="container mx-auto px-6 py-20 text-center">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16"
                >
                    Start Your Coaching Journey in 3 Easy Steps
                </motion.h2>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <Step
                        number="1"
                        title="Fill Out the Intake Form"
                        description="So I can learn more about you, your goals, and your lifestyle."
                    />
                    <Step
                        number="2"
                        title="Book a Free Discovery Call"
                        description="An optional call if we need to talk it through before starting."
                    />
                    <Step
                        number="3"
                        title="Choose Your Plan & Get Started"
                        description="Once we’re aligned, I’ll send over your first week’s roadmap."
                    />
                </div>

                {/* Final CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20"
                >
                    <CTAButton to={intakeFormLink}>
                        Apply for Coaching Now
                    </CTAButton>
                </motion.div>
            </div>
        </motion.section>
    );
};

