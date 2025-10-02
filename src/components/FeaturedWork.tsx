import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import spoonfulImage from "@/assets/spoonful-screenshot.png";
import aiArticleImage from "@/assets/ai-article-visual.png";
import alcKeynoteImage from "@/assets/alc-keynote.png";
import berkeleyBootcampImage from "@/assets/berkeley-bootcamp.png";

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
  },
  {
    title: "Berkeley Students Take the Global Stage at Asian Leadership Conference",
    description: "Featured keynote speaker at the 2024 Asian Leadership Conference in Seoul, South Korea, presenting on innovation and entrepreneurship to an international audience of leaders and changemakers.",
    image: alcKeynoteImage,
    tags: ["Public Speaking", "Leadership", "International", "Conference"],
    links: [
      { label: "Read More", url: "https://scet.berkeley.edu/scet-takes-the-global-stage-at-asian-leadership-conference/", icon: ExternalLink }
    ]
  },
  {
    title: "Berkeley Method of Entrepreneurship Bootcamp",
    description: "Mentored 400+ global founders through Berkeley's intensive entrepreneurship program, helping early-stage ventures refine their pitches and business strategies for investor presentations.",
    image: berkeleyBootcampImage,
    tags: ["Mentorship", "Entrepreneurship", "Education", "Berkeley"],
    links: [
      { label: "Learn More", url: "https://scet.berkeley.edu/students/courses/berkeley-method-of-entrepreneurship-bootcamp/", icon: ExternalLink }
    ]
  }
];

const FeaturedWork = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Featured Work</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A collection of projects and writings I'm proud of
        </p>
        
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {works.map((work, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden hover:shadow-card transition-shadow bg-card border-border">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index 
                  ? "bg-primary w-8" 
                  : "bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
