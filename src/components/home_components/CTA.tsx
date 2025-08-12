
export const CTA = () => {
    return (
        // Use a <section> tag instead of <footer> for semantic correctness.
        // The primary blue background makes it a high-impact section.
        <section id="apply-cta" className="bg-blue-600">
            <div className="container mx-auto text-center px-6 py-20 pb-40">
                
                {/* Main Headline */}
                {/* Using a large, bold, white font for high contrast and readability. */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    Ready to Take Control of Your Nutrition?
                </h2>
                
                {/* Sub-headline */}
                <p className="text-lg md:text-xl text-blue-100 mt-4 mb-8">
                    Let’s build a plan that works for YOU.
                </p>
                
                {/* Call to Action Button */}
                {/* The button is styled to be the inverse of the main site buttons,
                    making it stand out on the blue background. */}
                <a
                    href="/#apply"
                    className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                    Apply for Coaching Now
                </a>
            </div>
        </section>
    );
};