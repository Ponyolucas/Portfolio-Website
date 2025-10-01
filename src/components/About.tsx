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
            <p className="font-medium">
              UC Berkeley Cognitive Science graduate with experience in UX design, CRM systems, and digital strategy across pharmaceuticals, medtech, and global markets. I combine storytelling and data-driven design to improve customer experiences, from mapping web pathways at Pfizer to mentoring 400+ global founders. I especially shine in highly collaborative and social teams where I can share my passion with those who work alongside me.
            </p>
            <p className="text-muted-foreground">
              My perspective is rooted in a partnership between entrepreneurial and empathetic schools of thought, whether it's refining customer journeys at Pfizer through reducing clicks and centralizing search through a unified landing page, guiding early-stage founders at the Berkeley Method of Entrepreneurship Bootcamp to pitch in front of angel investors confidently, or creating and managing CRMs with hundreds of clients.
            </p>
            <p className="text-muted-foreground">
              I've built skills in UX design, CRM implementation, content creation, and customer research, with work experience spanning pharmaceuticals, medtech, and international markets. I'm in my element when there's a spark of innovation in the room, whether I'm throwing ideas at the wall, helping teams find their story, and building pitch decks that stick the landing.
            </p>
            <p className="text-muted-foreground">
              Outside of work, I'm a non-stop singer and an avid dreamer. You'll find me with my Berkeley a cappella group, the Trill Seekers, or typing fragments of lyrics, board game concepts, and website ideas in a Google Doc.
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
