import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Sakshee Singh</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Aspiring Data Analyst specializing in Python, Pandas, NumPy, and Scikit-Learn, with expertise in EDA, data visualization, and statistical analysis. I use tools like Excel and Power BI to transform complex datasets into actionable insights, while also exploring Machine Learning, NLP, and Generative AI to solve real-world business problems.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Turning raw data into meaningful stories and actionable insights through 
            advanced analytics, visualization, and statistical modeling.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* Resume */}
            <a 
              href="Sakshee Singh Resume.pdf"  // <-- place your resume file in the public folder and link here
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:glow-primary transition-smooth group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/SaksheeSingh4896" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth group"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/sakshee-singh-901950297" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth group"
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
            </a>

            {/* Email */}
            <a href="mailto:saksheesingh303@gmail.com">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Email Me
              </Button>
            </a>
          </div>
          
          <div className="mt-16 animate-float">
            <div className="w-2 h-8 border-2 border-primary rounded-full mx-auto">
              <div className="w-0.5 h-2 bg-primary rounded-full mx-auto animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
