
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

// A reusable row component for the plan details to keep the main component clean.
const PlanRow = ({ duration, description, whoFor }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 md:gap-y-0 py-6 border-b border-gray-300 items-center"
    >
        {/* Plan Length */}
        <div className="font-semibold text-base text-gray-900">
            {duration}
        </div>
        {/* Description */}
        <div className="text-base text-gray-600">
            {description}
        </div>
        {/* Who It's For */}
        <div className="text-base text-gray-600">
            {whoFor}
        </div>
    </motion.div>
);

export const CoachingPlans = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50"
            style={{ backgroundColor: '#f0eee6' }}
        >
            <div className="container mx-auto px-6 py-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Flexible Coaching Options
                    </h2>
                </motion.div>

                {/* Plans Container */}
                <div className="max-w-5xl mx-auto">
                    {/* Header Row for Desktop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:grid grid-cols-3 gap-8 pb-4 border-b-2 border-gray-300 text-left"
                    >
                        <h3 className="font-bold text-gray-500 uppercase tracking-wider">Plan Length</h3>
                        <h3 className="font-bold text-gray-500 uppercase tracking-wider">Description</h3>
                        <h3 className="font-bold text-gray-500 uppercase tracking-wider">Who It’s For</h3>
                    </motion.div>

                    {/* Plan Details */}
                    <PlanRow
                        duration="4 Weeks"
                        description="Perfect for a reset or kickstart. Learn the basics and establish foundational habits."
                        whoFor="New clients or anyone needing a structured plan to get moving again."
                    />
                    <PlanRow
                        duration="8 Weeks"
                        description="Deeper progress with habit building, strategy tweaks, and consistent feedback."
                        whoFor="Clients focused on sustainable fat loss or muscle gain."
                    />
                    <PlanRow
                        duration="12 Weeks"
                        description="Full transformation phase with maximum accountability and lasting change."
                        whoFor="Ideal for serious results and body recomposition."
                    />
                </div>

                {/* Note at the bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 max-w-2xl mx-auto flex items-start gap-3 justify-center"
                >
                    <Info className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-base text-gray-600">
                        <span className="font-semibold text-gray-900">Note:</span> All coaching plans begin with a detailed intake form to ensure we're the right fit.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};
