import { useState } from "react";
import { Code, Database, Wrench, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = {
  frontend: {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  backend: {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 70 },
    ],
  },
  database: {
    name: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Firebase", level: 88 },
    ],
  },
  tools: {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
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
                <h3 className="font-semibold text-lg">{skill.name}</h3>
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
