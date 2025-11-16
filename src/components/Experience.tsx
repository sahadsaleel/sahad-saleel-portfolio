import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Layout } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Building complete web applications from front-end to back-end using modern technologies and best practices.",
  },
  {
    icon: Code,
    title: "API Development",
    description: "Designing and implementing RESTful APIs with robust authentication and efficient data handling.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Creating scalable database architectures with MongoDB, ensuring data integrity and optimal performance.",
  },
  {
    icon: Layout,
    title: "UI Development",
    description: "Crafting responsive, accessible user interfaces using modern frameworks like Bootstrap and Tailwind CSS.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding container-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in building modern web applications with focus on performance and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
