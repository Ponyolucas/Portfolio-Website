import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application built with React and Node.js, featuring real-time updates and a modern UI.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Beta",
    description: "An open-source library for data visualization with over 1k stars on GitHub. Built for performance and flexibility.",
    tags: ["TypeScript", "D3.js", "React", "npm"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Gamma",
    description: "Mobile-first e-commerce platform with advanced filtering, search, and seamless checkout experience.",
    tags: ["Next.js", "Tailwind", "Stripe", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          A selection of work I'm proud to share
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
