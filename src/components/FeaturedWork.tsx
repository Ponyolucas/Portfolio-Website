import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import spoonfulImage from "@/assets/spoonful-screenshot.png";
import aiArticleImage from "@/assets/ai-article-visual.png";

const works = [
  {
    title: "Spoonful - Task Management App",
    description: "An innovative task manager that gamifies productivity using a 'spoon theory' approach. Users manage their energy levels alongside their tasks, creating a more mindful approach to daily planning.",
    image: spoonfulImage,
    tags: ["HTML", "CSS", "JavaScript", "UX Design"],
    links: [
      { label: "View Live Site", url: "https://ponyolucas.github.io/Spoonful/index.html", icon: ExternalLink },
      { label: "GitHub Repo", url: "https://github.com/Ponyolucas/Spoonful", icon: Github }
    ]
  },
  {
    title: "I Live In Your Pocket Now: The Hidden Influences of AI",
    description: "Award-winning article exploring the subtle and pervasive ways artificial intelligence shapes our daily lives, decisions, and perceptions. Published in Berkeley's Art of Writing publication.",
    image: aiArticleImage,
    tags: ["Writing", "AI Ethics", "Technology", "Award-Winning"],
    links: [
      { label: "Read Article", url: "https://artofwriting.berkeley.edu/writing/i-live-in-your-pocket-now-the-hidden-influences-of-ai/", icon: ExternalLink }
    ]
  }
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Featured Work</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A collection of projects and writings I'm proud of
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-card transition-shadow bg-card border-border">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{work.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{work.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {work.links.map((link, linkIndex) => {
                    const Icon = link.icon;
                    return (
                      <Button 
                        key={linkIndex}
                        variant={linkIndex === 0 ? "default" : "secondary"}
                        size="sm"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <Icon className="mr-2 h-4 w-4" />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
