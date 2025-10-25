import { ArrowBigDown } from "lucide-react";
import profileImage from "../assets/profile2.png";

export const HeroSection = () => {
return (
    <section
     id="hero"
     className="relative min-h-screen flex flex-col items-center justify-center px-4 -mt-48">

    <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-left">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Farid</span>
                    <span  className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Hima</span>
                </h1>
                <p className="font-medium text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 text-left">
                I craft exceptional web and mobile experiences using the latest technologies.
                With a passion for both design and code, I specialize in building visually stunning, intuitive, and high-performance interfaces that delight users and drive results.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4 text-left">
                    <a href="#projects" className="cosmic-button">
                     View My Work
                    </a>
                </div>
            </div>

            {/* Profile Picture */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative opacity-0 animate-fade-in-delay-2">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl scale-150 animate-pulse-subtle"></div>
                    
                    {/* Profile image container */}
                    <div className="relative">
                        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105">
                            <img 
                                src={profileImage} 
                                alt="Farid Hima - Web Developer" 
                                className="w-full h-full object-cover object-center"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f3f4f6"/><circle cx="200" cy="150" r="50" fill="%236b7280"/><path d="M100 300 Q200 250 300 300" stroke="%236b7280" stroke-width="20" fill="none"/></svg>';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
    <ArrowBigDown className="w-6 h-6 text-primary" />
    </div>
     </section>
)
}
