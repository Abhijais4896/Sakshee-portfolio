import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart3, Brain, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "Power BI", level: 88, category: "Visualization" },
    { name: "Matplotlib & Seaborn", level: 82, category: "Visualization" },
    { name: "Excel", level: 95, category: "Analysis" },
    { name: "Pandas/NumPy", level: 87, category: "Libraries" },
    { name: "Statistics", level: 85, category: "Analysis" },
    { name: "Machine Learning", level: 75, category: "AI/ML" }
  ];

  const softSkills = [
    { name: "Problem Solving", level: 92 },
    { name: "Communication", level: 88 },
    { name: "Analytical Thinking", level: 94 },
    { name: "Team Collaboration", level: 85 },
    { name: "Project Management", level: 80 },
    { name: "Critical Thinking", level: 90 }
  ];

  const tools = [
    "Jupyter Notebook", "Git/GitHub", "VS Code", "MySQL", "PowerBI", "Excel", "Pandas", "NumPy", "Matplotlib", "Seaborn"
  ];

  const categories = {
    "Programming": { icon: <Code className="h-5 w-5" />, color: "primary" },
    "Database": { icon: <BarChart3 className="h-5 w-5" />, color: "secondary" },
    "Visualization": { icon: <BarChart3 className="h-5 w-5" />, color: "accent" },
    "Analysis": { icon: <Brain className="h-5 w-5" />, color: "primary" },
    "Libraries": { icon: <Code className="h-5 w-5" />, color: "secondary" }
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and 
            business intelligence across multiple platforms and technologies.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <Card className="bg-card border-border hover:glow-primary transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Technical Skills
              </CardTitle>
              <CardDescription>
                Programming languages, tools, and frameworks for data analysis
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs border-${categories[skill.category as keyof typeof categories]?.color || 'primary'}/30 text-${categories[skill.category as keyof typeof categories]?.color || 'primary'}`}
                      >
                        {skill.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress 
                    value={isVisible ? skill.level : 0} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-card border-border hover:glow-secondary transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-secondary" />
                Soft Skills
              </CardTitle>
              <CardDescription>
                Professional competencies and interpersonal abilities
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress 
                    value={isVisible ? skill.level : 0} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <Card className="bg-card border-border hover:glow-accent transition-smooth mt-8 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Brain className="h-6 w-6 text-accent" />
              Tools & Technologies
            </CardTitle>
            <CardDescription>
              Additional software, platforms, and technologies I work with
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-smooth cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;