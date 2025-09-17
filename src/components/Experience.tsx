import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Data Analytics Intern",
      company: "Innobyte Solutions",
      location: "Remote",
      duration: "March 2025 - March 2025",
      description: "I designed and developed dashboards that effectively communicated KPIs, with a focus on HR data related to gender metrics. Through analyzing and visualizing gender-related KPIs, I identified key factors influencing gender balance at the executive level. By applying data storytelling and advanced visualization techniques, I uncovered meaningful insights that supported strategic decision-making and helped drive impactful organizational outcomes.",
      achievements: [
        "Designed HR dashboards that highlighted gender-related KPIs and executive-level balance factors.",
        "Uncovered key drivers of gender imbalance through data storytelling and visualization.",
        "Delivered actionable insights that supported strategic diversity and inclusion decisions"
      ],
      skills: ["Python", "SQL", "Power BI", "Data Visualization"]
    }
    
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in data analytics through internships and practical projects, 
            building expertise in data-driven decision making.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:glow-secondary transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/10 text-secondary border-secondary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;