"use client";

import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiJavascript,
  SiCss3,
  SiPython,
  SiPytorch,
  SiGit,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiTensorflow,
  SiCplusplus,
  SiMysql
} from "react-icons/si";

// Custom C# Icon Component
const CSharpIcon = ({ className }) => {
  return (
    <img 
      src="/assets/Csharp-icon.svg"
      alt="C#" 
      className={`${className} w-9 h-9`} 
    />
  );
};

// Custom Java Icon Component
const JavaIcon = ({ className }) => {
  return (
    <img 
      src="/assets/java-icon.svg" 
      alt="Java" 
      className={`${className} w-9 h-9`} 
    />
  );
};

// Custom AWS Icon Component
const AWSIcon = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-600 rounded flex items-center justify-center">
        <span className="text-white font-bold text-xs">AWS</span>
      </div>
    </div>
  );
};

// Custom Azure Icon Component
const AzureIcon = ({ className }) => {
  return (
    <img 
      src="/assets/azure-icon.png" 
      alt="Azure" 
      className={`${className} w-9 h-9`} 
    />
  );
};

const SkillsSection = () => {
  const technologies = [
    { name: "Python", icon: SiPython },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "C/C++", icon: SiCplusplus },
    { name: "Java", icon: JavaIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "Azure", icon: AzureIcon },
    { name: "Docker", icon: SiDocker },
    { name: "MySQL", icon: SiMysql },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "Firebase", icon: SiFirebase },
    { name: "Express", icon: SiExpress },
    { name: "C#", icon: CSharpIcon }
  ].filter(tech => tech.icon); // Filter out any undefined icons

  const getIconColor = (techName) => {
    const colorMap = {
      "React": "text-[#61DAFB]",
      "Node.js": "text-[#339933]",
      "MongoDB": "text-[#47A248]",
      "Tailwind CSS": "text-[#06B6D4]",
      "Next.js": "text-[#000000]",
      "TypeScript": "text-[#3178C6]",
      "PostgreSQL": "text-[#336791]",
      "JavaScript": "text-[#F7DF1E]",
      "CSS3": "text-[#1572B6]",
      "Express": "text-[#000000]",
      "Firebase": "text-[#FFCA28]",
      "Redux": "text-[#764ABC]",
      "Python": "text-[#3776AB]",
      "C#": "text-[#239120]",
      "PyTorch": "text-[#EE4C2C]",
      "Git": "text-[#F05032]",
      "Docker": "text-[#2496ED]",
      "Vercel": "text-[#000000]",
      "TensorFlow": "text-[#FF6F00]",
      "C/C++": "text-[#00599C]",
      "Java": "text-[#007396]",
      "AWS": "text-[#FF9900]",
      "Azure": "text-[#0078D4]",
      "MySQL": "text-[#4479A1]"
    };
    return colorMap[techName] || "text-foreground";
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-left mb-16">
          <h2 className="h2 mb-4 text-center underline underline-offset-8">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg text-center">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            if (!IconComponent) return null; // Skip if icon is undefined
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors duration-200"
              >
                <IconComponent className={`text-4xl ${getIconColor(tech.name)}`} />
                <span className="text-sm font-medium text-foreground text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;