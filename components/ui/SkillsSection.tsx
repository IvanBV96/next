import { Card, CardContent } from "@/components/ui/card";

//tomorrow all you have to do is too download more svgs and add them to the function.

const skills = [
  {name: "React", icon: "/icons/react.svg" },
  {name: "Linux", icon: "/icons/linux.svg" },
  {name: "Wordpress", icon: "/icons/wordpress.svg" },
  {name: "Git", icon: "/icons/git.svg" },
  {name: "Java", icon: "/icons/java.svg" },
  {name: "Nodejs", icon: "/icons/nodejs.svg" },
  {name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  {name: "Javascript", icon: "/icons/javascript.svg" }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-white text-black hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="h-full flex items-center justify-center">
                {/* Render the SVG icon for each skill */}
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
