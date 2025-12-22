
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';
import SecondaryButton from '../SecondaryButton';

// A simple checkmark icon component for the feature list
const CheckIcon = () => (
    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

export const Offerings = () => {
    const intakeFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header";

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="pricing" className="bg-gray-50"
            style={{ backgroundColor: '#f0eee6' }}
        >
            <div className="container mx-auto px-6 py-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Choose Your Coaching Plan
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Flexible coaching options designed for real, sustainable results.
                    </p>
                </motion.div>

                {/* Pricing Cards Container */}
                <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {/* Card 1: 4 Week Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">4 Week Plan</h3>
                        <p className="text-sm text-gray-600 mt-2">The Perfect Kickstart</p>
                        <p className="text-5xl font-bold text-gray-900 my-6">
                            $599
                        </p>
                        <p className="text-base text-gray-600 mb-6 flex-grow">
                            Perfect for a reset or kickstart. Learn the basics and establish foundational habits.
                        </p>
                        <SecondaryButton to={intakeFormLink}>
                            Get Started
                        </SecondaryButton>
                    </motion.div>

                    {/* Card 2: 8 Week Plan (Recommended) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">8 Week Plan</h3>
                        <p className="text-sm text-gray-600 mt-2">For Deeper Progress</p>
                        <p className="text-5xl font-bold text-gray-900 my-6">
                            $999
                        </p>
                        <p className="text-base text-gray-600 mb-6 flex-grow">
                            Deeper progress with habit building, strategy tweaks, and consistent feedback for sustainable fat loss or muscle gain.
                        </p>
                        <SecondaryButton to={intakeFormLink}>
                            Get Started
                        </SecondaryButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-white rounded-xl shadow-2xl p-8 flex flex-col border-2 border-gray-900 relative"
                    >
                        <div className="absolute top-0 -translate-y-1/2 bg-gray-900 text-white font-bold tracking-wider uppercase text-sm px-4 py-1 rounded-full">
                            Recommended
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">12 Week Plan</h3>
                        <p className="text-sm text-gray-600 mt-2">The Full Transformation</p>
                        <p className="text-5xl font-bold text-gray-900 my-6">
                            $1,359
                        </p>
                        <p className="text-base text-gray-600 mb-6 flex-grow">
                            Full transformation phase with maximum accountability for serious results and body recomposition.
                        </p>
                        <CTAButton to={intakeFormLink}>
                            Get Started
                        </CTAButton>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};
