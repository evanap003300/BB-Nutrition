
// A reusable row component for the plan details to keep the main component clean.
const PlanRow = ({ duration, description, whoFor }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 md:gap-y-0 py-6 border-b border-gray-200 items-center">
        {/* Plan Length */}
        <div className="font-bold text-lg text-blue-600">
            {duration}
        </div>
        {/* Description */}
        <div className="text-gray-700">
            {description}
        </div>
        {/* Who It's For */}
        <div className="text-gray-600 italic">
            {whoFor}
        </div>
    </div>
);

export const CoachingPlans = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-6 py-20">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Flexible Coaching Options
                    </h2>
                </div>

                {/* Plans Container */}
                <div className="max-w-5xl mx-auto">
                    {/* Header Row for Desktop */}
                    <div className="hidden md:grid grid-cols-3 gap-8 pb-4 border-b-2 border-gray-300 text-left">
                        <h3 className="font-bold text-gray-500 uppercase tracking-wider">Plan Length</h3>
                        <h3 className="font-bold text-gray-500 uppercase tracking-wider">Description</h3>
                        <h3 className="font-bold text-gray-500 uppercase tracking-wider">Who It’s For</h3>
                    </div>

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
                <p className="text-center text-gray-600 mt-12 max-w-xl mx-auto">
                    💬 Note: All coaching plans begin with a detailed intake form to ensure we’re the right fit.
                </p>
            </div>
        </section>
    );
};
