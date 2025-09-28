"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import Social from "@/components/ui/Social";
import { handleFormSubmit, validateForm } from "@/lib/formHandler";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await handleFormSubmit(formData);
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form - Centered */}
        <div className="flex justify-center mb-16">
          <div className="bg-card p-8 rounded-lg border border-border w-full max-w-2xl">
            <h3 className="h3 mb-6 text-center">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200 ${
                      errors.firstName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200 ${
                      errors.lastName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200 ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground resize-none transition-colors duration-200 ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Type your message here."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full uppercase"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Information - Below form, centered */}
        <div className="flex justify-center">
          <div className="bg-card p-8 rounded-lg border border-border w-full max-w-2xl">
            <h3 className="h3 mb-6 text-center">Contact Information</h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;