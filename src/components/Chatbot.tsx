import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, User, Bot } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sakshee's portfolio assistant. Ask me anything about her skills, projects, or experience!",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const predefinedResponses: { [key: string]: string } = {
    "skills": "Sakshee specializes in Python, SQL, Power BI, Excel, and Basics of Machine learning. She's experienced in data visualization, statistical analysis, and machine learning techniques like clustering and predictive modeling.",
    "projects": "Sakshee has worked on several exciting projects including Airbnb Data Analysis, Sales Dashboard in Power BI, Customer Segmentation using K-means clustering,Financial Data Analysis with Python, Covid-19 Vaccination Data Analysis, Job recommendation system using machine learning, Lok shabha election data analysis using power BI and Time series forecasting using RMSE.",
    "experience": "Sakshee has experience as a Data Analytics Intern at Innobyte Solutions.",
    "education": "Sakshee has pursued a Master in computer Applications at Uttar Pradesh Rajarshi Tondon Open University with a 67% Aggregate. She also holds certifications in Power BI, Python for Data Science, SQL, and Advanced Excel.",
    "contact": "You can reach Sakshee at saksheesingh303@gmail.com, connect on LinkedIn at linkedin.com/in/sakshee-singh-901950297, or check out her GitHub at github.com/SaksheeSingh4896.",
    "resume": "You can download Sakshee's resume using the 'Download Resume' button in the hero section above!",
    "hello": "Hello! Great to meet you. I can help you learn more about Sakshee's data analytics background, projects, and skills. What would you like to know?",
    "hi": "Hi there! I'm here to answer questions about Sakshee's portfolio. Feel free to ask about her skills, projects, experience, or how to get in touch!",
    "who is sakshee":"Sakshee is a Data Analyst skilled in Python, SQL, Power BI, Excel, and Machine Learning. She enjoys transforming data into insights through visualization, analysis, and predictive modeling.",
    "what role is sakshee aiming for":"Sakshee is passionate about Data Analytics and Machine Learning, and she’s looking for opportunities as a Data Analyst or Business Intelligence Analyst.",
    "what technical skills does sakshee have":"Sakshee specializes in Python, SQL, Power BI, and Excel. She also has experience with machine learning basics like clustering, regression, and time-series forecasting.",
    "does sakshee know data visualization tools":"Yes! She’s skilled in creating dashboards and visual reports using Power BI and Excel to present insights clearly.",
    "can you tell me about sakshee’s most impactful project":"One of her key projects was Airbnb Data Analysis, where she explored pricing trends, customer preferences, and location-based insights to support decision-making.",
    "has sakshee done any predictive modeling projects":"Yes, she has worked on Customer Segmentation using K-means clustering and Time Series Forecasting to predict future trends using RMSE.",
    "has she worked with real-world data":"Absolutely! She’s analyzed datasets like Covid-19 vaccination data, financial datasets, and Lok Sabha election results using Python and Power BI.",
    "where has sakshee gained industry experience":"She worked as a Data Analytics Intern at Innobyte Solutions, where she applied data analysis techniques to solve business problems."
  };

  const getResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseInput.includes(key)) {
        return response;
      }
    }
    
    return "That's a great question! For detailed information about Sakshee's background, please explore the sections above or feel free to reach out directly through the contact form.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isBot: false };
    const botResponse = { text: getResponse(inputValue), isBot: true };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground hover:glow-primary transition-smooth animate-float group"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-card border-border glow-primary transition-smooth animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-sm font-medium">Portfolio Assistant</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 hover:bg-white/20 text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-60">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  {message.isBot && (
                    <div className="p-1 bg-primary/10 rounded-full shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.isBot
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                  {!message.isBot && (
                    <div className="p-1 bg-secondary/10 rounded-full shrink-0">
                      <User className="h-4 w-4 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-background border-border focus:border-primary transition-smooth"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Quick Questions */}
              <div className="mt-2 flex flex-wrap gap-1">
                {["Skills", "Projects", "Contact"].map((quick) => (
                  <Button
                    key={quick}
                    variant="outline"
                    size="sm"
                    className="text-xs h-6 px-2 border-border hover:border-primary hover:text-primary transition-smooth"
                    onClick={() => {
                      setInputValue(quick.toLowerCase());
                      handleSend();
                    }}
                  >
                    {quick}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;