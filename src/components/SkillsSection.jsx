import { useState } from "react";
import { Code, Database, Wrench, Server } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faPython, 
  faPhp, 
  faHtml5, 
  faCss3Alt, 
  faNodeJs, 
  faGitAlt, 
  faGithub, 
  faFigma, 
  faDocker 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faDatabase, 
  faServer, 
  faPalette,
  faTools,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { cn } from "@/lib/utils";

// Technology Icons Component with Font Awesome and original brand colors
const TechIcon = ({ name, className = "w-[42px] h-[42px]" }) => {
  const iconMap = {
    // Frontend Technologies with brand colors
    React: { icon: faReact, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.1)" },
    "React Native": { icon: faReact, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.1)" },
    JavaScript: { icon: faJs, color: "#F7DF1E", bgColor: "rgba(247, 223, 30, 0.1)" },
    Python: { 
      customSvg: true, 
      color: "#3776AB", 
      bgColor: "rgba(55, 118, 171, 0.1)",
      svg: (
        <svg viewBox="0 0 24 24" style={{ width: '42px', height: '42px' }}>
          <defs>
            <linearGradient id="pythonBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:"#387EB8", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#366994", stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="pythonYellow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:"#FFE052", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#FFC331", stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z" fill="url(#pythonBlue)"/>
          <path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01z" fill="url(#pythonYellow)"/>
          <circle cx="7.5" cy="5.5" r="1.4" fill="#fff"/>
          <circle cx="16.5" cy="18.5" r="1.4" fill="#fff"/>
        </svg>
      )
    },
    PHP: { icon: faPhp, color: "#777BB4", bgColor: "rgba(119, 123, 180, 0.1)" },
    TypeScript: { icon: faJs, color: "#3178C6", bgColor: "rgba(49, 120, 198, 0.1)" },
    "Tailwind CSS": { 
      customSvg: true, 
      color: "#06B6D4", 
      bgColor: "rgba(6, 182, 212, 0.1)",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '42px', height: '42px' }}>
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      )
    },
    CSS: { icon: faCss3Alt, color: "#1572B6", bgColor: "rgba(21, 114, 182, 0.1)" },
    "Next.js": { 
      customSvg: true, 
      color: "#000000", 
      bgColor: "rgba(0, 0, 0, 0.1)",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '42px', height: '42px' }}>
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.8531.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7474C22.8982 4.4074 19.6711.7935 15.3462.4028c-.7672-.069-1.7554-.0891-2.774-.0891zm6.8978 10.2619c.108.0619.2159.1899.2529.2968.0283.0788.0316.2435.0316 4.3161v4.2196l-.7344-1.12-.7378-1.1199v-3.13c0-1.7344.0188-3.1613.0409-3.1735.0221-.0086.0516-.0139.0705-.011.0146.0026.0872.0179.1538.0299z"/>
        </svg>
      )
    },
    HTML: { icon: faHtml5, color: "#E34F26", bgColor: "rgba(227, 79, 38, 0.1)" },
    
    // Backend Technologies
    "Node.js": { icon: faNodeJs, color: "#339933", bgColor: "rgba(51, 153, 51, 0.1)" },
    "Express.js": { icon: faNodeJs, color: "#000000", bgColor: "rgba(0, 0, 0, 0.1)" },
    "REST APIs": { icon: faGlobe, color: "#FF6B35", bgColor: "rgba(255, 107, 53, 0.1)" },
    GraphQL: { icon: faCode, color: "#E10098", bgColor: "rgba(225, 0, 152, 0.1)" },
    
    // Database Technologies
    MongoDB: { icon: faDatabase, color: "#47A248", bgColor: "rgba(71, 162, 72, 0.1)" },
    PostgreSQL: { icon: faDatabase, color: "#336791", bgColor: "rgba(51, 103, 145, 0.1)" },
    MySQL: { icon: faDatabase, color: "#4479A1", bgColor: "rgba(68, 121, 161, 0.1)" },
    Firebase: { icon: faDatabase, color: "#FFCA28", bgColor: "rgba(255, 202, 40, 0.1)" },
    
    // Tools
    "Git/GitHub": { icon: faGithub, color: "#181717", bgColor: "rgba(24, 23, 23, 0.1)" },
    "VS Code": { icon: faCode, color: "#007ACC", bgColor: "rgba(0, 122, 204, 0.1)" },
    Figma: { icon: faFigma, color: "#F24E1E", bgColor: "rgba(242, 78, 30, 0.1)" },
    Docker: { icon: faDocker, color: "#2496ED", bgColor: "rgba(36, 150, 237, 0.1)" },
    Canva: { icon: faPalette, color: "#00C4CC", bgColor: "rgba(0, 196, 204, 0.1)" },
  };

  const tech = iconMap[name];
  
  if (tech) {
    // Special handling for custom SVG icons (Tailwind CSS, Next.js)
    if (tech.customSvg) {
      return (
        <div 
          className="p-4 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: tech.bgColor }}
        >
          <div style={{ color: tech.color }}>
            {tech.svg}
          </div>
        </div>
      );
    }
    
    // Special handling for HTML/CSS with dual icons (removed since we separated them)
    if (tech.icons) {
      return (
        <div 
          className="p-4 rounded-lg flex items-center justify-center gap-2"
          style={{ backgroundColor: tech.bgColor }}
        >
          {tech.icons.map((iconData, index) => (
            <FontAwesomeIcon 
              key={index}
              icon={iconData.icon} 
              style={{ 
                color: iconData.color,
                fontSize: '36px',
                width: '36px',
                height: '36px'
              }}
            />
          ))}
        </div>
      );
    }
    
    // Single FontAwesome icon handling
    return (
      <div 
        className="p-4 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: tech.bgColor }}
      >
        <FontAwesomeIcon 
          icon={tech.icon} 
          style={{ 
            color: tech.color,
            fontSize: '42px',
            width: '42px',
            height: '42px'
          }}
        />
      </div>
    );
  }
  
  // Fallback for technologies without specific icons
  return (
    <div className="p-4 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
      <Code className="w-[42px] h-[42px]" />
    </div>
  );
};

const skillCategories = {
  frontend: {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 95 },
      { name: "React Native", level: 60 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 60 },
      { name: "PHP", level: 40 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "CSS", level: 90 },
      { name: "Next.js", level: 40 },
      { name: "HTML", level: 95 },
    ],
  },
  backend: {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 60 },
      { name: "Python", level: 35 },
      { name: "REST APIs", level: 20 },
      { name: "GraphQL", level: 20 },
    ],
  },
  database: {
    name: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 35 },
      { name: "PostgreSQL", level: 30 },
      { name: "MySQL", level: 35 },
      { name: "Firebase", level: 20 },
    ],
  },
  tools: {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 85 },
      { name: "Docker", level: 50 },
      { name: "Canva", level: 85 },
    ],
  },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                  "border border-primary/20 hover:border-primary/40",
                  activeCategory === key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background/50 backdrop-blur-sm hover:bg-primary/10"
                )}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="gradient-border p-6 card-hover"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <TechIcon name={skill.name} />
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always learning and expanding my skill set. These percentages represent my current proficiency level, 
            and I'm continuously working to improve and stay up-to-date with the latest technologies.
          </p>
        </div>
      </div>
    </section>
  );
};
