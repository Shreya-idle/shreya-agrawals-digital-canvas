import { Trophy, Calendar, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hackathons = () => {
  const hackathons = [
    {
      title: "Genesis X Hackathon",
      level: "University Level",
      rank: "1st Place 🏆",
      organizer: "Health-O-Tech Club VIT Bhopal",
      date: "Feb 2024",
      team: "Team Omkar",
      description: "Secured first position in Genesis X hackathon conducted during Advitya festival with comprehensive data analysis solution.",
      color: "primary",
    },
    {
      title: "Smart India Hackathon 2023",
      level: "National Level",
      rank: "Internal Rounds Winner",
      organizer: "VIT Bhopal Centre of Innovation and Teaching",
      date: "Mar 2024",
      team: "Team Trailblazers",
      description: "Outstanding performance in Smart India Hackathon internal rounds with innovative solution development.",
      color: "secondary",
    },
    {
      title: "Lakecity Hackathon 2024-25",
      level: "Regional",
      rank: "8th Rank",
      organizer: "JLU School of Engineering & Technology",
      date: "Apr 2024",
      team: "Trailblazers",
      participants: "30 teams",
      description: "Developed AgriTech solution with comprehensive ML model development and deployment.",
      color: "accent",
    },
  ];

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Hackathons</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Competitive achievements and collaborative innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${hackathon.color}/10`}>
                    <Trophy className={`h-6 w-6 text-${hackathon.color}`} />
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {hackathon.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{hackathon.title}</CardTitle>
                <div className="flex items-center gap-2 text-accent font-bold text-lg">
                  <Award className="h-5 w-5" />
                  {hackathon.rank}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {hackathon.description}
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{hackathon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{hackathon.team}</span>
                  </div>
                  {hackathon.participants && (
                    <div className="text-xs text-foreground/50">
                      {hackathon.participants}
                    </div>
                  )}
                  <div className="text-xs text-foreground/50 mt-2">
                    {hackathon.organizer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
