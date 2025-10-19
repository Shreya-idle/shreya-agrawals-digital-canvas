import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Work Experience</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Professional experience in AI and machine learning
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">AI Intern</CardTitle>
                    <p className="text-lg text-primary font-semibold">Amasqis</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground/60">
                  <Calendar className="h-4 w-4" />
                  <span>6 months</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed and implemented machine learning models for real-world applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Collaborated with cross-functional teams to deploy AI solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gained hands-on experience with deep learning frameworks and production systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
