import { Briefcase, GraduationCap, Languages } from "lucide-react";

interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  points: string[];
}

const experience: TimelineEntry[] = [
  {
    role: "Fullstack Developer Intern",
    org: "Crowds, Berlin",
    period: "03/2026 – 06/2026",
    points: [
      "Took ownership of backend development in a team of 3.",
      "Designed and implemented a real-time backend using Node.js, Express, and Socket.io.",
      "Built RESTful APIs, implemented JWT authentication, and defined MongoDB data models.",
      "Contributed to frontend development using Vue 3, Pinia, and Vite.",
      "Collaborated in an agile team using Git workflows.",
    ],
  },
  {
    role: "Amazon FBA Manager",
    org: "IIIHT, Berlin",
    period: "10/2021 – 02/2024",
    points: [
      "Optimized product listings and advertising campaigns for tech products.",
      "Managed inventory, logistics, and supply chain processes.",
      "Conducted market and competitor analysis to increase sales performance.",
    ],
  },
];

const education: TimelineEntry[] = [
  {
    role: "Fullstack Web Development",
    org: "DCI Digital Career Institute GmbH, Berlin",
    period: "10/2024 – 04/2026",
    points: [
      "Comprehensive MERN Stack training (MongoDB, Express.js, React, Node.js).",
      "Developed multiple real-world fullstack projects.",
      "AI automation and AI agent creation.",
    ],
  },
];

const languages = [
  { name: "German", level: "C2" },
  { name: "English", level: "C1" },
];

const TimelineCard = ({ entry }: { entry: TimelineEntry }) => (
  <div className="gradient-border p-6 card-hover text-left">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
      <h4 className="font-semibold text-lg">{entry.role}</h4>
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        {entry.period}
      </span>
    </div>
    <p className="text-primary font-medium mb-3">{entry.org}</p>
    <ul className="space-y-2">
      {entry.points.map((point) => (
        <li key={point} className="text-muted-foreground text-sm flex gap-2">
          <span className="text-primary mt-1 shrink-0">&bull;</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience &amp; <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {experience.map((entry) => (
                <TimelineCard key={entry.role} entry={entry} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {education.map((entry) => (
                <TimelineCard key={entry.role} entry={entry} />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="p-3 rounded-full bg-primary/10">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Languages</h3>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-4 py-2 text-sm font-medium bg-primary/20 text-secondary-foreground rounded-full border"
                  >
                    {lang.name} <span className="text-primary">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
