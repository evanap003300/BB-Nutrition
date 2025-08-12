
// A simple checkmark icon component for the feature list
const CheckIcon = () => (
    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

export const Offerings = () => {
    return (
        // Section container with a light gray background and ample padding.
        <section id="pricing" className="bg-gray-50">
            <div className="container mx-auto px-6 py-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Choose Your Coaching Plan
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Flexible coaching options designed for real, sustainable results.
                    </p>
                </div>

                {/* Pricing Cards Container */}
                {/* Uses a grid layout that stacks on mobile and goes to 3 columns on large screens. */}
                <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    
                    {/* Card 1: 4 Week Plan */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900">4 Week Plan</h3>
                        <p className="text-gray-500 mt-2">The Perfect Kickstart</p>
                        <p className="text-5xl font-bold text-gray-900 my-6">
                            $1,999
                        </p>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Perfect for a reset or kickstart. Learn the basics and establish foundational habits.
                        </p>
                        <a href="/#apply" className="w-full text-center bg-gray-200 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                            Get Started
                        </a>
                    </div>

                    {/* Card 2: 8 Week Plan (Recommended) */}
                    <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col border-2 border-blue-600 relative">
                        <div className="absolute top-0 -translate-y-1/2 bg-blue-600 text-white font-bold tracking-wider uppercase text-sm px-4 py-1 rounded-full">
                            Recommended
                        </div>
                        <h3 className="text-2xl font-bold text-blue-600">8 Week Plan</h3>
                        <p className="text-gray-500 mt-2">For Deeper Progress</p>
                        <p className="text-5xl font-bold text-gray-900 my-6">
                            $3,799
                        </p>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Deeper progress with habit building, strategy tweaks, and consistent feedback for sustainable fat loss or muscle gain.
                        </p>
                        <a href="/#apply" className="w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Get Started
                        </a>
                    </div>

                    {/* Card 3: 12 Week Plan */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900">12 Week Plan</h3>
                        <p className="text-gray-500 mt-2">The Full Transformation</p>
                        <p className="text-5xl font-bold text-gray-900 my-6">
                            $5,499
                        </p>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Full transformation phase with maximum accountability for serious results and body recomposition.
                        </p>
                        <a href="/#apply" className="w-full text-center bg-gray-200 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                            Get Started
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};
