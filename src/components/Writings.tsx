import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const writings = [
  {
    title: "Building Scalable Web Applications",
    description: "A deep dive into architecture patterns for modern web apps, exploring microservices, serverless, and monoliths.",
    date: "March 2024",
    readTime: "8 min read",
    link: "https://medium.com",
  },
  {
    title: "The Art of Clean Code",
    description: "Principles and practices for writing maintainable, readable code that stands the test of time.",
    date: "February 2024",
    readTime: "6 min read",
    link: "https://medium.com",
  },
  {
    title: "From Idea to Production",
    description: "My journey building and launching a SaaS product from scratch, including lessons learned along the way.",
    date: "January 2024",
    readTime: "10 min read",
    link: "https://medium.com",
  },
];

const Writings = () => {
  return (
    <section id="writings" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Writings</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Thoughts on software development, technology, and life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writings.map((writing, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{writing.date}</span>
                  <span>•</span>
                  <span>{writing.readTime}</span>
                </div>
                <CardTitle className="text-2xl">{writing.title}</CardTitle>
                <CardDescription className="text-base">
                  {writing.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center gap-2"
                  asChild
                >
                  <a href={writing.link} target="_blank" rel="noopener noreferrer">
                    Read Article
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writings;
