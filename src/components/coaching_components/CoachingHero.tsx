
// This is a reusable button component we can create
// to avoid repeating styles for the main call-to-action.
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


export const CoachingHero = () => {
    // A link to the intake form or a relevant section on the page
    const intakeFormLink = "/#apply"; 

    return (
        // Using a light gray background to create a subtle visual separation
        <section className="bg-gray-100 text-center">
            <div className="container mx-auto px-6 py-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Transform Your Body and Health with Personalized Nutrition Coaching
                </h1>
                <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-700">
                    At BB Nutrition, I offer expert 1-on-1 coaching tailored to your goals—whether that’s fat loss, muscle gain, body recomposition, or simply feeling your best every day.
                </p>
                <div className="mt-8">
                    <CTAButton>
                        Apply for Coaching
                    </CTAButton>
                </div>
            </div>
        </section>
    );
};
