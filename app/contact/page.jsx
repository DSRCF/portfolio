import { Button } from "@/components/ui/button";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import Social from "@/components/ui/Social";

const Contact = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="pt-8 pb-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="h1 mb-4 underline underline-offset-8">Get In Touch</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="h2 mb-6">Send Me a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground resize-none"
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
                <h2 className="h2 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiMail className="text-xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">safiankhan59@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiMapPin className="text-xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">West Yorkshire, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="h2 mb-6">Connect With Me</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiLinkedin className="text-xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">LinkedIn</h3>
                      <p className="text-muted-foreground">linkedin.com/in/safian-khan</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiGithub className="text-xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">GitHub</h3>
                      <p className="text-muted-foreground">github.com/safian-khan</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiTwitter className="text-xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Twitter</h3>
                      <p className="text-muted-foreground">@safian_khan</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;