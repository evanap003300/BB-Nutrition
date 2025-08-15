// A reusable list item for this section to keep the code clean.
// It includes the checkmark icon and the text content.
const IncludedItem = ({ title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <span className="text-3xl text-blue-500">✅</span>
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </div>
);


export const WhatsIncluded = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 py-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        What You Get With 1-on-1 Coaching
                    </h2>
                </div>

                {/* Grid container for the included items */}
                {/* It's a 2-column grid on medium screens and up, and 1 column on small screens. */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
                    <IncludedItem 
                        title="Weekly 1-on-1 Video Check-ins"
                        description="Stay on track with personalized strategy calls."
                    />
                    <IncludedItem 
                        title="Daily Email Support"
                        description="Get your questions answered and stay accountable every day."
                    />
                    <IncludedItem 
                        title="Custom Meal Guidance & Grocery Lists"
                        description="No generic plans—just real food for real results."
                    />
                    <IncludedItem 
                        title="Clear Goals & Strategy"
                        description="Tailored for fat loss, muscle gain, body recomposition, or overall wellness."
                    />
                    <IncludedItem 
                        title="Progress Monitoring"
                        description="We'll track habits, measurements, and mindset."
                    />
                    <IncludedItem 
                        title="No Fluff, Just Results"
                        description="Education, support, and structure you can actually follow."
                    />
                </div>
            </div>
        </section>
    );
};
