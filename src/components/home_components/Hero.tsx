
export const Hero = () => {
    return (
        <section className="bg-gray-50 text-center">
            <div className="container mx-auto px-38 py-24">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Personalized Nutrition Coaching to Help You{' '}
                    <span className="text-blue-600">Lose Fat</span>,{' '}
                    <span className="text-blue-500">Build Muscle</span>, &{' '}
                    <span className="text-blue-400">Feel Your Best</span>
                </h1>

                <h2 className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-gray-600">
                    1-on-1 nutrition coaching tailored to your goals, lifestyle, and starting point.
                </h2>

                <div className="mt-10">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfY9aLJG3k1sotvGkUoS4EBQXqrdCU1qLUjXg1aTdwFQL2lHA/viewform?usp=header"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Apply for Coaching
                    </a>
                </div>
            </div>
        </section>
    );
};

