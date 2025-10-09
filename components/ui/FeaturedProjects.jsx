"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
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
  SiHtml5,
  SiFramer,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiExpo,
  SiPython,
  SiPytorch,
  SiHuggingface,
} from "react-icons/si";

// Custom C# Icon Component
const CSharpIcon = ({ className }) => {
  return (
    <img 
      src="/assets/C%23.png" 
      alt="C#" 
      className={`${className} w-5 h-5`} 
    />
  );
};

const FeaturedProjects = () => {
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
      "HTML5": "text-[#E34F26]",
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

  const featuredProjects = [
    {
      id: 1,
      title: "HTREX (Handwritten Text Recognition and Extraction)",
      description: "A desktop application that allows users to upload images of handwritten text and extract the text using OCR (Optical Character Recognition). Built with Python and PyTorch for machine learning capabilities.",
      image: "/assets/HTREX.png",
      technologies: [
          { name: "Python", icon: SiPython },
          { name: "C#", icon: CSharpIcon },
          { name: "PyTorch", icon: SiPytorch },
          { name: "Hugging Face", icon: SiHuggingface },
      ],
      liveUrl: "https://huggingface.co/spaces/SafianK/HTREX",
      githubUrl: "#",
      category: "AI/ML",
      featured: true
    },
    {
      id: 2,
      title: "Second Look",
      description: "A price comparison web application that scrapes listings from multiple second-hand marketplaces and benchmarks them against the average eBay price.",
      image: "/assets/SecondLook.png",
      technologies: [
        { name: "Python", icon: SiPython },
        { name: "NEXT.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills.",
      image: "/assets/portfolio.png",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "TypeScript", icon: SiTypescript },
      ],
      liveUrl: "https://safiank.com",
      githubUrl: "https://github.com/SafianK/portfolio",
      category: "Full-Stack",
      featured: true
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4 underline underline-offset-8">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my most notable projects that showcase my skills in full-stack development, 
            AI/ML, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiCode className="text-4xl text-primary/50" />
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
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
                        className="bg-muted text-foreground px-3 py-1 rounded text-xs flex items-center gap-2 hover:bg-muted/80 transition-colors duration-200"
                      >
                        <IconComponent className={`text-sm ${getIconColor(tech.name)}`} />
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
                    className="flex-1 flex items-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <FiExternalLink className="text-sm" />
                    <span>Live</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 flex items-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
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
        <div className="text-center">
          <h3 className="h3 mb-4">Want to See More Projects?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out my complete portfolio and GitHub repositories for more projects and contributions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg" className="uppercase hover:scale-105 hover:shadow-lg transition-all duration-200">
                View All Projects
              </Button>
            </Link>
            <Link href="https://github.com/DSRCF">
              <Button variant="outline" size="lg" className="uppercase hover:scale-105 hover:shadow-lg transition-all duration-200">
                Visit GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;