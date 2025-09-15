"use client";

import { Button } from "@/components/ui/button";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import Social from "@/components/ui/Social";

const ContactSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4 underline underline-offset-8">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="h3 mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground resize-none transition-colors duration-200"
                  placeholder="Type your message here."
                ></textarea>
              </div>

              <Button size="lg" className="w-full uppercase">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Personal Info */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="h3 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiMail className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">safiankhan59@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">West Yorkshire, UK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="h3 mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiLinkedin className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/safian-khan</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiGithub className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">github.com/safian-khan</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiTwitter className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Twitter</h4>
                    <p className="text-muted-foreground">@safian_khan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="h3 mb-6">Follow Me</h3>
              <div className="flex justify-center">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="h3 mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Whether you have a specific project in mind or just want to chat about technology, 
            I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="uppercase">
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg" className="uppercase">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;