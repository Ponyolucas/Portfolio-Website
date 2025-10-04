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
              I'm a recent Cognitive Science grad with certificates in both entrepreneurship and changemaking from UC Berkeley. I combine intuitive and effective design, data, and storytelling to craft digital tools and experiences that build bridges between systems and the people that utilize them. From optimizing web pathways at Pfizer to mentoring 400+ founders for the Berkeley Method of Entrepreneurship Bootcamp, I've experimented with and developed mastery in UX design, CRM systems, and web strategy. This arsenal emboldens me to help bridge the gap between technical complexity and human needs.
            </p>
            <p className="text-muted-foreground">
              My design philosophy lives at the intersection of entrepreneurial and empathetic. I strive to build systems that empower the people utilizing them; whether that means organizing CRMs that scale with hundreds of clients, shaping web strategies that prioritize the end user, or approaching AI not as a black box but as a collaborator to challenge and guide. At my core, I'm someone who strives to learn quickly, unite teams, and bring ideas to life through a mix of entrepreneurial drive and social instinct. This mindset has fueled projects like my award-winning essay on AI's hidden influence, a Spoon Theory–based task manager app designed for the needs of those with chronic disabilities, and the keynote talk I gave at the 2024 Asian Leadership Conference in Seoul. You can find details about those achievements and more down below!
            </p>
            <p className="text-muted-foreground">
              If you're looking for someone who combines strategic problem-solving with a collaborative spirit, I'm your person. I thrive when helping people find their story, mapping out systems that actually work, and bringing energy to the room when ideas need momentum.
            </p>
            <p className="text-muted-foreground">
              When I'm not working, I'm usually performing with my Berkeley a cappella group, The Trill Seekers, or sketching out new ideas for games, songs, and creative projects.
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
