"use client";

import { Button } from "@/components/ui/button";
import { FiExternalLink, FiGithub, FiCode, FiDatabase, FiSmartphone, FiGlobe, FiShield, FiSmartphone as FiMobile } from "react-icons/fi";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiSocketdotio,
  SiJavascript,
  SiCss3,
  SiFramer,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiExpo,
  SiPython,
  SiPytorch,
  SiHuggingface,
} from "react-icons/si";

// Custom C# Icon Component because SimpleIcons doesn't have a C# icon
const CSharpIcon = ({ className }) => {
  return (
    <img 
      src="/assets/C%23.png" 
      alt="C#" 
      className={`${className} w-5 h-5`} 
    />
  );
};

const Projects = () => {
  // Color mapping for technology icons
  const getIconColor = (techName) => {
    const colorMap = {
      "React": "text-[#61DAFB]",
      "Node.js": "text-[#339933]",
      "MongoDB": "text-[#47A248]",
      "Stripe": "text-[#6772E5]",
      "Tailwind CSS": "text-[#06B6D4]",
      "Next.js": "text-[#000000]",
      "TypeScript": "text-[#3178C6]",
      "Prisma": "text-[#2D3748]",
      "PostgreSQL": "text-[#336791]",
      "Socket.io": "text-[#010101]",
      "JavaScript": "text-[#F7DF1E]",
      "CSS3": "text-[#1572B6]",
      "Framer Motion": "text-[#0055FF]",
      "Express": "text-[#000000]",
      "Firebase": "text-[#FFCA28]",
      "Redux": "text-[#764ABC]",
      "Expo": "text-[#000020]",
      "Weather API": "text-[#4A90E2]",
      "Auth": "text-[#FF6B6B]",
      "API Docs": "text-[#4A90E2]",
      "Python": "text-[#3776AB]",
      "C#": "text-[#239120]",
      "PyTorch": "text-[#EE4C2C]",
      "Hugging Face": "text-[#FFFF00]"
    };
    return colorMap[techName] || "text-foreground";
  };

  const projects = [
    {
      id: 1,
      title: "HTREX (Handwritten Text Recognition and Extraction)",
      description: "A desktop application that allows users to upload images of handwritten text and extract the text using OCR (Optical Character Recognition).",
      image: "/assets/HTREX.png",
      technologies: [
          { name: "Python", icon: SiPython },
          { name: "C#", icon: CSharpIcon },
          { name: "PyTorch", icon: SiPytorch },
          { name: "Hugging Face", icon: SiHuggingface },
      ],
      liveUrl: "https://huggingface.co/spaces/SafianK/HTREX",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A portfolio website to showcase my projects and skills, built with Next.js, Tailwind CSS, and Framer Motion.",
      image: "",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
      ],
      liveUrl: "https://safiank.com",
      githubUrl: "https://github.com/SafianK/portfolio",
      category: "Full-Stack"
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="pt-8 pb-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="h1 mb-4 underline underline-offset-8">Projects</h1>
            <p className="text-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents 
              different skills and technologies I've mastered throughout my development journey.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="lg"
                className="uppercase"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-border transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FiCode className="text-4xl text-primary/50" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => {
                      const IconComponent = tech.icon;
                      return (
                        <span
                          key={tech.name}
                          className="bg-muted text-foreground px-3 py-2 rounded text-xs flex items-center gap-2 hover:bg-muted/80 transition-colors duration-200"
                        >
                          <IconComponent className={`text-xl ${getIconColor(tech.name)}`} />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <FiExternalLink className="text-sm" />
                      <span>Demo</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 flex items-center gap-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <FiGithub className="text-sm" />
                      <span>Code</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="h2 mb-4">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <Button size="lg" className="uppercase">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;