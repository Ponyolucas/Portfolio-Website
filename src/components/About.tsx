import { Badge } from "@/components/ui/badge";
import headshotImage from "@/assets/headshot.jpg";

const skills = [
  "UX Design", "CRM Systems", "Customer Research", "Digital Strategy",
  "Content Creation", "Pitch Decks", "User Journey Mapping", "Web Design",
  "HTML/CSS", "JavaScript", "Team Collaboration", "Mentorship"
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 flex justify-center items-start">
            <img 
              src={headshotImage} 
              alt="Lucas Walsh headshot"
              className="rounded-lg shadow-card w-full max-w-sm"
            />
          </div>

          <div className="md:col-span-2 space-y-6 text-lg text-foreground">
            <p className="font-semibold text-2xl">
              Hi, I'm Lucas!
            </p>
            <p className="text-muted-foreground">
              I'm a Cognitive Science grad from UC Berkeley who thrives at the intersection of systems and people. I bring together design, data, and storytelling to create digital experiences that are both effective and human. From refining web pathways at Pfizer to mentoring 400+ founders at the Berkeley Method of Entrepreneurship Bootcamp, I've built a toolkit around UX design, CRM systems, and web strategy—all with a focus on making technology feel intuitive and meaningful.
            </p>
            <p className="text-muted-foreground">
              What drives me is building around empathy while keeping the bigger picture moving forward. I'm passionate about creating systems that empower people; whether that means designing CRMs that scale with hundreds of clients, shaping web strategies that prioritize the end user, or approaching AI not as a black box but as a collaborator in creativity. At my core, I'm someone who learns quickly, unites teams, and brings ideas to life through a mix of entrepreneurial drive and social instinct. That mindset has fueled projects like my award-winning essay on AI's hidden influence, my Spoon Theory–based task manager app, and my keynote talk at the 2024 Asian Leadership Conference in Seoul.
            </p>
            <p className="text-muted-foreground">
              If you're looking for someone who combines strategic thinking with a collaborative spirit, that's where I shine. I love helping people find their story, mapping out systems that actually work, and bringing energy to the room when ideas need momentum.
            </p>
            <p className="text-muted-foreground">
              When I'm not working, you'll probably find me singing with my Berkeley a cappella group, the Trill Seekers, or scribbling down fragments of lyrics, board game concepts, and product ideas in Google Docs.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Skills & Expertise</h3>
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
