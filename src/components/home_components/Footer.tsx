
// An icon component for social media links would be great here.
// For simplicity, I'll use text, but you could easily add SVG icons.
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

export const Footer = () => {
    // Automatically gets the current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        // The footer uses the same primary blue background as the CTA for consistency.
        <footer className="bg-blue-600">
            <div className="container mx-auto px-6 py-8">
                {/* Main container uses Flexbox. It stacks vertically on mobile (flex-col)
                    and becomes a row on medium screens and up (md:flex-row).
                    'justify-between' pushes items to opposite ends.
                    'items-center' vertically aligns them. */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    
                    {/* Main Brand Name */}
                    {/* On mobile, it will have a bottom margin (mb-4), which disappears on larger screens (md:mb-0) */}
                    <h3 className="text-xl font-bold text-white mb-4 md:mb-0">
                        BB Nutrition
                    </h3>

                    {/* Contact & Copyright container */}
                    {/* This group will stay together on the right side */}
                    <div className="text-blue-200">
                        <a href="mailto:brycebroomeinquiries@gmail.com" className="hover:text-white hover:underline transition-colors duration-300">
                            brycebroomeinquiries@gmail.com
                        </a>
                        <span className="mx-2 hidden md:inline">|</span>
                        {/* Copyright Notice - line break on mobile, inline on desktop */}
                        <p className="mt-2 md:mt-0 md:inline">
                            &copy; {currentYear} BB Nutrition Coaching. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};