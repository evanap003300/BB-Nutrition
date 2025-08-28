import { motion } from 'framer-motion';

// A reusable list item for the checklist.
const CheckListItem = ({ children }) => (
    <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start"
    >
        <span className="text-2xl text-green-500 mr-3 mt-1">✓</span>
        <span className="text-lg text-gray-700">{children}</span>
    </motion.li>
);

export const WhoIsThisFor = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white"
        >
            <div className="container mx-auto px-6 py-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Is BB Nutrition Coaching Right for You?
                    </h2>
                </motion.div>

                {/* Content Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
                >
                    <ul className="space-y-4">
                        <CheckListItem>
                            You’re ready to make a change, but want real guidance—not fad diets.
                        </CheckListItem>
                        <CheckListItem>
                            You want to learn how to eat for your goals, not restrict yourself.
                        </CheckListItem>
                        <CheckListItem>
                            You’re looking for accountability, structure, and support.
                        </CheckListItem>
                        <CheckListItem>
                            You’re a student, athlete, busy professional, or someone who’s tired of the guesswork.
                        </CheckListItem>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
};
