import { useState } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_6siqs7s",
    "template_ljf46dh",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    "NdiAkPR6yV_Lr7RsQ"
  )
  .then(() => {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out",
    });
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error("EmailJS error:", error);
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
    });
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "saksheesingh303@gmailcom",
      link: "mailto:saksheesingh303@gmailcom"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/SaksheeSingh4896",
      link: "https://github.com/SaksheeSingh4896"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sakshee-singh-901950297",
      link: "https://linkedin.com/in/sakshee-singh-901950297"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Uttar Pradesh, India",
      link: "https://maps.app.goo.gl/6JBfXYFRQygocwCC9"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss data analytics opportunities or collaborate on projects? 
              I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border hover:glow-primary transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-smooth resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-primary-foreground hover:glow-primary transition-smooth group"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border hover:glow-secondary transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Prefer direct contact? Reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary/20 transition-smooth">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-secondary transition-smooth"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Let's Build Something Amazing</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">24h</p>
                    <p className="text-sm opacity-90">Response Time</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">10+</p>
                    <p className="text-sm opacity-90">Projects Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;