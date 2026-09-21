import { Code, Database, Server, Sparkles, Wrench, type LucideIcon } from "lucide-react";

interface SkillGroup {
  name: string;
  icon: LucideIcon;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    icon: Code,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Vue 3",
      "Next.js",
      "Angular",
      "Astro",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "PHP",
      "Flask",
      "Django",
      "JWT",
      "Socket.io",
      "MJML",
    ],
  },
  {
    name: "Databases & DevOps",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "Docker",
      "Nginx",
      "Linux",
      "Hetzner VPS",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "AI & Automation",
    icon: Sparkles,
    skills: [
      "AI Integration",
      "Ollama",
      "LLM",
      "LLM Integration",
      "n8n",
      "Zapier",
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: ["Postman"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div key={group.name} className="gradient-border p-6 card-hover text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{group.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-primary/20 text-secondary-foreground rounded-full border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always learning and expanding my skill set, currently focusing on
            full-stack JavaScript/TypeScript development and AI integration.
          </p>
        </div>
      </div>
    </section>
  );
};
