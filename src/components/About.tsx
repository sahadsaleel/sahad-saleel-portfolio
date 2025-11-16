import { Card } from "@/components/ui/card";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "EJS",
];

const About = () => {
  return (
    <section id="about" className="section-padding container-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a background in mechanical engineering, I made an exciting transition into the world of technology. 
              Currently immersed in the MERN stack ecosystem, I'm constantly expanding my expertise in advanced JavaScript, 
              Node.js, and MongoDB.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              Every project is an opportunity to learn something new and push the boundaries of what's possible on the web.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card
                  key={skill}
                  className="p-4 text-center hover:shadow-md transition-shadow hover:scale-105 duration-200"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
