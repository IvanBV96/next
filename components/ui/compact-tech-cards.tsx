import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AtomIcon, PenLineIcon, FileCodeIcon, GitBranchIcon, CoffeeIcon, ServerIcon, LayoutGridIcon, FileJsonIcon } from "lucide-react"

const technologies = [
  { name: "React", icon: AtomIcon, color: "text-blue-500", bgColor: "bg-blue-100" },
  { name: "Linux", icon: PenLineIcon, color: "text-yellow-500", bgColor: "bg-yellow-100" },
  { name: "WordPress", icon: FileCodeIcon, color: "text-blue-700", bgColor: "bg-blue-100" },
  { name: "Git", icon: GitBranchIcon, color: "text-orange-600", bgColor: "bg-orange-100" },
  { name: "Java", icon: CoffeeIcon, color: "text-red-500", bgColor: "bg-red-100" },
  { name: "Node.js", icon: ServerIcon, color: "text-green-600", bgColor: "bg-green-100" },
  { name: "Bootstrap", icon: LayoutGridIcon, color: "text-purple-600", bgColor: "bg-purple-100" },
  { name: "JavaScript", icon: FileJsonIcon, color: "text-yellow-400", bgColor: "bg-yellow-100" },
]

export default function CompactTechCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {technologies.map((tech) => (
        <Card key={tech.name} className={`${tech.bgColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
          <CardHeader className="p-4">
            <CardTitle className="text-lg flex items-center space-x-2">
              <tech.icon className={`w-6 h-6 ${tech.color}`} />
              <span>{tech.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-sm text-muted-foreground">
            {tech.name.toLowerCase()}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}