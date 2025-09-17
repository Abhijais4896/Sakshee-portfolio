import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      school: "Uttar Pradesh Rajarshi Tondon Open University",
      duration: "2023 - 2025",
      Aggregate: "67%",
      description: "Concentration in Data analytics & Business Analytics. Coursework focused on statistical modeling, machine learning, and business analytics.",
      coursework: ["Statistical Modeling", "Machine Learning", "Database Systems", "Business Analytics", "Python", "Data Mining", "Data Analysis", "Object Oriented Programming"]
    },
    {
      degree: "Bachelors Degree in Science",
      school: "Shree Kanhaiyalal Manikchand Mahila P.G. College",
      duration: "2020 - 2025",
      Aggregate: "70%",
      description: "Concentration in Data analytics & Mathematics. Coursework focused on statistical modeling and Science studies.",
      coursework: ["statistics", "Probability", "Science", "Combinatorics", "Python"]
    }
  ];

  const certifications = [
    {
      title: "MySQL Fundamentals",
      issuer: "WSCubeTech",
      year: "2025",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Youtube Data Analysis using Python",
      issuer: "WSCubeTech",
      year: "2025",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Advanced Excel for Data Analytics",
      issuer: "Golden Foundation Academy",
      year: "2024",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Power BI Training",
      issuer: "Infosys Springboard",
      year: "2024",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const relevantCourses = [
    "Advanced Excel for Data Analytics",
    "Statistical Computing with Python",
    "Data Visualization Fundamentals",
    "Business Intelligence Systems",
    "Predictive Analytics",
    "Data Ethics and Privacy"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications that drive my 
            expertise in data analytics and business intelligence.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:glow-accent transition-smooth animate-fade-in"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg font-medium text-accent">
                    {edu.school}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="font-semibold text-primary">Aggregate: {edu.Aggregate}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex}
                          variant="outline"
                          className="border-accent/30 text-accent"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional Courses */}
            <Card className="bg-card border-border hover:glow-primary transition-smooth">
              <CardHeader>
                <CardTitle className="text-lg">Additional Relevant Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {relevantCourses.map((course, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary border-secondary/20"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-secondary" />
              Professional Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border hover:glow-secondary transition-smooth group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary/20 transition-smooth">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-secondary transition-smooth">
                          {cert.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                        <p className="text-primary text-sm font-medium">{cert.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;