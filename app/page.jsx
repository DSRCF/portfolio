import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/photo";
import SkillsSection from "@/components/ui/SkillsSection";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - matches working HTML structure */}
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Left side: text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1">
                Hello I'm <br /> <span className="text-blue-500">Safian</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-muted-foreground">
                <b>Skilled in Python, AI/ML, and web development, I craft practical and engaging digital solutions</b>
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="mb-8 xl:mb-0">
                  <Social 
                    containerStyles="flex gap-6" 
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right side: photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Down Indicator - replaces the stats section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
              <span className="text-xl font-medium">Scroll Down</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
    </div>
  )
}