import { motion } from 'framer-motion';
import bryceImage from "../images/image3.jpg";

export const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="about" className="bg-white"
            style={{ backgroundColor: '#f0eee6' }}
        >
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/3"
                    >
                        <img
                            src={bryceImage}
                            alt="Bryce Broome, NASM Certified Nutrition Coach"
                            className="w-full h-auto max-w-sm mx-auto rounded-lg shadow-xl object-cover aspect-square object-[center_30%]"
                        />
                    </motion.div>

                    {/* Text Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:w-2/3 text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Your Coach
                        </h2>

                        <div className="space-y-4 text-gray-600 text-lg">
                            <p>
                                Hey, I'm <span className="font-bold text-gray-900">Bryce Broome</span>—a certified NASM Nutrition Coach, lifelong athlete, and current student at Clemson University (Go Tigers!).
                            </p>
                            <p>
                                My journey into nutrition began during my high school years as a competitive runner. I quickly realized that performance, energy, and physique were all deeply tied to the food I was putting into my body. Through intentional, flexible nutrition, I was able to transform not just how I looked—but how I felt and performed.
                            </p>
                            <p>
                                My coaching philosophy is simple: there’s no one-size-fits-all approach. I work 1-on-1 with every client to meet them where they are. My goal is to make nutrition practical, sustainable, and empowering.
                            </p>
                            <p>
                                If you're ready to take control of your nutrition and create real, lasting change, I’m here to help you get there—step by step.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};
