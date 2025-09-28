"use client";

import { Button } from "@/components/ui/button";
import { FiCode, FiDatabase, FiSmartphone, FiGlobe } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center xl:pt-8">
          {/* Left Column - Personal Info */}
          <div className="flex-1">
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 1.0}}
            >
              <motion.h1 
                className="h1 mb-6 underline underline-offset-8 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <motion.span
                  animate={{
                    color: ["var(--foreground)", "var(--primary)", "var(--foreground)"]
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-primary">About Me</span>
                </motion.span>
              </motion.h1>
            </motion.div>
            <div className="space-y-6 text-muted-foreground">
              <p>
                I'm a passionate Software Developer with a love for creating elegant, 
                user-centric digital experiences. My journey in technology began with 
                curiosity and has evolved into a career focused on building solutions 
                that make a difference.
              </p>
              <p>
                With expertise in both frontend and backend development, I specialize 
                in creating full-stack applications that are not only functional but 
                also intuitive and scalable. I believe in writing clean, maintainable 
                code and staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I'm always eager to learn and take on new challenges.
              </p>
            </div>
            
          </div>

          {/* Skills */}
          <div className="flex-1">
            <h2 className="h2 mb-6">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Development */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FiCode className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React.js & Next.js</li>
                  <li>• JavaScript</li>
                  <li>• HTML5, CSS3, Tailwind CSS</li>
                  <li>• Responsive Design</li>
                  <li>• UI/UX Principles</li>
                </ul>
              </div>

              {/* Backend Development */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FaBrain className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">AI/ML</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deep Learning Models</li>
                  <li>• Optical Character Recognition</li>
                  <li>• API Integration</li>
                  <li>• Training and Testing Models</li>
                  <li>• </li>
                </ul>
              </div>

              {/* Mobile Development */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FiSmartphone className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Mobile Development</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React Native</li>
                  <li>• Progressive Web Apps</li>
                  <li>• Mobile-First Design</li>
                  <li>• Cross-Platform Development</li>
                </ul>
              </div>

              {/* DevOps & Tools */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FiGlobe className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">DevOps & Tools</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Git & GitHub</li>
                  <li>• Docker & AWS</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Testing & Debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;