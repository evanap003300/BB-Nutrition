// A reusable step component to keep the main component clean.
const Step = ({ number, title, description }) => (
    <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-xl">
                {number}
            </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

// A reusable CTA button component
const CTAButton = ({ children }) => (
    <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header"
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
    >
        {children}
    </a>
);


export const HowToGetStarted = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-6 py-20 text-center">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">
                    Start Your Coaching Journey in 3 Easy Steps
                </h2>

                {/* Steps Grid */}
                {/* Stacks on mobile, becomes a 3-column grid on medium screens and up */}
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
                <div className="mt-20">
                    <CTAButton>
                        Apply for Coaching Now
                    </CTAButton>
                </div>
            </div>
        </section>
    );
};
