import { ExternalLink, Github, ArrowRight } from "lucide-react"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
  isLive: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NutriVa \u2013 AI-Powered Nutrition App',
    description: 'Flagship project. Led a 4-person development team building AI-driven meal planning, with tracking and dashboard functionality. Deployed on a Hetzner VPS with Nginx.',
    image: "projects/project4.png",
    tags: ["React", "Node.js", "MongoDB", "AI Integration", "Nginx"],
    demoUrl: "https://nutriva.live/",
    githubUrl: "https://github.com/FaridBerlin/NutriVa",
    isLive: true,
  },
  {
    id: 2,
    title: 'Space Invader Game',
    description: 'Classic arcade game built with JavaScript and Canvas, focused on game logic and animation.',
    image: "projects/project5.png",
    tags: ["JavaScript", "Canvas", "Game Logic"],
    demoUrl: "https://space-invader-three.vercel.app",
    githubUrl: "https://github.com/FaridBerlin/space-invader",
    isLive: true,
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Real-time weather via the OpenWeather API, with location search and animated conditions. Built in two versions: a JavaScript/TypeScript client, and a Python/Flask build with containerized API integration via Docker.',
    image: "projects/project2.png",
    tags: ["JavaScript", "TypeScript", "OpenWeather API", "Python", "Flask", "Docker"],
    demoUrl: "https://faridberlin.github.io/weather-15-jul/",
    githubUrl: "https://github.com/FaridBerlin/weather-15-jul",
    isLive: true,
  },
  {
    id: 4,
    title: '3D Earth Visualization',
    description: 'Interactive 3D Earth built with Three.js featuring realistic textures, lighting, and smooth rotation animations.',
    image: "projects/project1.png",
    tags: ["Three.js", "WebGL", "JavaScript"],
    demoUrl: "https://faridberlin.github.io/earth3d/",
    githubUrl: "https://github.com/FaridBerlin/earth3d",
    isLive: true,
  },
  {
    id: 5,
    title: 'Tunel',
    description: 'Interactive tunnel visualization with immersive 3D graphics and smooth animations.',
    image: "projects/project3.png",
    tags: ["Three.js", "WebGL", "JavaScript"],
    demoUrl: "https://faridberlin.github.io/tunel/",
    githubUrl: "https://github.com/FaridBerlin/tunel",
    isLive: true,
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and creativity. Each project is a unique solution to a problem or a creative endeavor that I am proud of.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
           <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
            <div className="h-48 overflow-hidden relative">
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={`Preview of ${project.title}`}
                width={800}
                height={414}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {project.isLive && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  LIVE
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 text-xs font-medium bg-primary/20 text-secondary-foreground rounded-full flex items-center gap-1 border">
                    {tag}</span>

                ))}

              </div>
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}/>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source of ${project.title} on GitHub`}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20}/>
                </a>
              </div>
            </div>

            </div>



           </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/FaridBerlin"
          >
            Check My Github <ArrowRight size={25} />
          </a>
        </div>

      </div>



    </section>
  )
}
