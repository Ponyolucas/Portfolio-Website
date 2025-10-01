import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "AWS", "Docker",
  "Git", "CI/CD", "REST APIs", "GraphQL",
  "Tailwind CSS", "Next.js", "Express", "Testing"
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground mb-12">
          <p>
            I'm a passionate developer and writer who loves creating elegant solutions to complex problems. 
            With a background in full-stack development, I specialize in building scalable web applications 
            that prioritize user experience and code quality.
          </p>
          <p>
            When I'm not coding, you'll find me writing about software development, exploring new technologies, 
            or contributing to open-source projects. I believe in continuous learning and sharing knowledge 
            with the community.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-base py-2 px-4 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
