import { Code2, Trophy, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CodingStats = () => {
  const platforms = [
    {
      name: "CodeChef",
      username: "stiffen",
      link: "https://www.codechef.com/users/stiffen",
      icon: Code2,
      stats: [
        { label: "Rating", value: "1800+", icon: Trophy },
        { label: "Stars", value: "4★", icon: Target },
        { label: "Problems Solved", value: "500+", icon: TrendingUp },
      ],
      color: "primary",
    },
    {
      name: "LeetCode",
      username: "Shreya_Agrawal19",
      link: "https://leetcode.com/u/Shreya_Agrawal19/",
      icon: Code2,
      stats: [
        { label: "Problems Solved", value: "300+", icon: Trophy },
        { label: "Contest Rating", value: "1600+", icon: Target },
        { label: "Global Rank", value: "Top 15%", icon: TrendingUp },
      ],
      color: "accent",
    },
  ];

  return (
    <section id="stats" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Coding Statistics</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Competitive programming achievements and problem-solving track record
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className={`bg-card/50 backdrop-blur-sm border-${platform.color}/20 hover:border-${platform.color}/50 transition-all duration-300 hover:glow-${platform.color}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-${platform.color}/10`}>
                      <platform.icon className={`h-6 w-6 text-${platform.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{platform.name}</CardTitle>
                      <p className={`text-sm text-${platform.color}`}>@{platform.username}</p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`bg-${platform.color}/10 text-${platform.color} border-${platform.color}/30`}
                  >
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platform.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <stat.icon className={`h-5 w-5 text-${platform.color}`} />
                        <span className="text-foreground/70">{stat.label}</span>
                      </div>
                      <span className="text-xl font-bold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block text-center py-3 rounded-lg bg-${platform.color}/10 hover:bg-${platform.color}/20 text-${platform.color} font-semibold transition-colors`}
                >
                  View Profile →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-lg">
            Consistently practicing algorithmic problem-solving and participating in coding competitions
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
