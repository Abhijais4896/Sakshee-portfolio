import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";
import projectAirbnb from "@/assets/project-airbnb.jpg";
import projectPowerBI from "@/assets/project-powerbi.jpg";
import projectSegmentation from "@/assets/project-segmentation.jpg";
import projectFinancial from "@/assets/project-financial.jpg";
import covid from "@/assets/covid.jpg";
import amazon from "@/assets/amazon.jpg";
const Projects = () => {
  const projects = [
    {
      title: "Airbnb Data Analysis",
      description: "Comprehensive analysis of Airbnb pricing patterns across major cities using Python and statistical modeling to identify key factors affecting rental prices.",
      icon: <TrendingUp className="h-6 w-6" />,
      image: projectAirbnb,
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      github: "https://github.com/SaksheeSingh4896/Airbnb-Data-Analysis",
      live: "https://github.com/SaksheeSingh4896/Airbnb-Data-Analysis/blob/main/Dashboard%201.pdf"
    },
    {
      title: "Job Recommendation System",
      description: "Developed a job recommendation system using machine learning to match candidates with suitable roles based on their skills, experience, and preferences, enhancing personalized career recommendations",
      icon: <BarChart3 className="h-6 w-6" />,
      image: projectPowerBI,
      technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Machine learning"],
      github: "https://github.com/SaksheeSingh4896/Job-Recommendation-System-using-Machine-learning",
      live: "https://github.com/SaksheeSingh4896/Job-Recommendation-System-using-Machine-learning/blob/main/Job_recommendation_engine.ipynb"
    },
    {
      title: "Lok Sabha Data Analysis using Power BI",
      description: "This project analyzes the Lok Sabha election results to provide insights into the distribution of seats among various political parties.",
      icon: <Users className="h-6 w-6" />,
      image: projectSegmentation,
      technologies: ["Python", "Scikit-learn", "Pandas", "Power BI"],
      github: "https://github.com/SaksheeSingh4896/Lok-Sabha-Election-Data-analysis-using-PowerBI",
      live: "https://github.com/SaksheeSingh4896/Lok-Sabha-Election-Data-analysis-using-PowerBI/blob/main/election_dashboard.pbix"
    },
    {
      title: "Time Series Forecasting",
      description: "Analyzed historical monthly sales data of a company. Created multiple forecast models for two different products of a particular Wine Estate and recommended the optimum forecasting model to predict monthly sales for the next 12 months along with appropriate lower and upper confidence limits.",
      icon: <DollarSign className="h-6 w-6" />,
      image: projectFinancial,
      technologies: ["Python", "NumPy", "Pandas", "RMSE", "ARIMA", "Prophet"],
      github: "https://github.com/SaksheeSingh4896/Time-Series-Forecasting-Project",
      live: "https://github.com/SaksheeSingh4896/Time-Series-Forecasting-Project/blob/main/forecasting%20_report.pdf"
    },
    {
       title: "Covid-19 Vaccination Data Analysis",
      description: "The analysis conducted on the COVID-19 pandemic using the World Health Organization (WHO) dataset focuses on critical metrics such as total cases, death counts, infection rates, vaccination rollouts, and the virus's impact across different continents.",
      icon: <BarChart3 className="h-6 w-6" />,
      image: covid,
      technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Machine learning", "MySQL"],
      github: "https://github.com/SaksheeSingh4896/Covid19-Vaccination-Analysis-using-MySQL",
      live: "https://github.com/SaksheeSingh4896/Covid19-Vaccination-Analysis-using-MySQL/blame/main/Covid19%20Vaccination%20Data%20Analysis"
    },
    {
      title: "Amazon Sales Data Analysis",
      description: "Performed in-depth analysis of Amazon sales data to identify revenue trends, top-selling categories, and customer purchasing behavior using Python and data visualization tools.",
      icon: <BarChart3 className="h-6 w-6" />,
      image: amazon,
      technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Excel"],
      github: "https://github.com/SaksheeSingh4896/Amazon-Sales-Data-Analysis/tree/main",
      live: "https://github.com/SaksheeSingh4896/Amazon-Sales-Data-Analysis/blob/main/Amazon%20Sale%20Report.ipynb"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover my data analysis projects showcasing statistical modeling, 
            visualization, and business intelligence solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:glow-primary transition-smooth group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-smooth">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-3">
  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
    <Button variant="outline" size="sm" className="w-full group/btn">
      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
      Code
    </Button>
  </a>

  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
    <Button size="sm" className="w-full bg-gradient-primary group/btn">
      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
      Live Demo
    </Button>
  </a>
</div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;