import bryceImage from "../images/image3.jpg";

export const About = () => {
    return (
        // Use a white background to differentiate it from the previous section.
        <section id="about" className="bg-white">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    
                    {/* Image Column */}
                    {/* This column will take up 1/3 of the space on medium screens and up. */}
                    <div className="md:w-1/3">
                        {/* The 'src' attribute now uses the imported image variable. */}
                        <img
                            src={bryceImage}
                            alt="Bryce Broome, NASM Certified Nutrition Coach"
                            className="w-full h-auto max-w-sm mx-auto rounded-lg shadow-xl object-cover aspect-square object-[center_30%]"
                        />
                    </div>

                    {/* Text Content Column */}
                    {/* This column will take up the remaining 2/3 of the space. */}
                    <div className="md:w-2/3 text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Your Coach
                        </h2>
                        
                        {/* Using a 'space-y-4' utility on a parent div is a clean way to add vertical spacing between paragraphs. */}
                        <div className="space-y-4 text-gray-600 text-lg">
                            <p>
                                Hey, I’m <span className="font-bold text-blue-600">Bryce Broome</span>—a certified NASM Nutrition Coach, lifelong athlete, and current student at Clemson University (Go Tigers!).
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
                    </div>
                </div>
            </div>
        </section>
    );
};
