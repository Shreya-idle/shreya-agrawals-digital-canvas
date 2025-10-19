import { Github, Linkedin, Download, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-in fade-in duration-700">
          Shreya Agrawal
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6 animate-in fade-in duration-700 delay-150">
          AI/ML Engineer & Researcher
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-8 animate-in fade-in duration-700 delay-300">
          Passionate about machine learning, data science, and building intelligent systems.
          Specializing in deep learning models, competitive programming, and research in advanced AI applications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 animate-in fade-in duration-700 delay-500">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="#stats">
              <Code2 className="mr-2 h-5 w-5" />
              View Coding Stats
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center animate-in fade-in duration-700 delay-700">
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <a href="https://github.com/Shreya-idle" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <a href="https://www.linkedin.com/in/shreya-agrawal4/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
