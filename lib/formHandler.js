// Form submission handler using Formspree
export const handleFormSubmit = async (formData) => {
  try {
    const { firstName, lastName, email, subject, message } = formData;
    
    console.log('Form submission started with data:', formData);
    
    // Formspree endpoint - replace with your actual Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/myznkqda';
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', `${firstName} ${lastName}`);
    formDataToSend.append('email', email);
    formDataToSend.append('subject', subject || 'Contact from Portfolio');
    formDataToSend.append('message', message);
    formDataToSend.append('_replyto', email);
    
    console.log('Sending to Formspree:', formspreeEndpoint);
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('Email sent successfully via Formspree');
      alert('Thank you for your message! I\'ll get back to you soon.');
      return { success: true };
    } else {
      throw new Error(`Formspree error: ${response.status}`);
    }
    
  } catch (error) {
    console.error('Formspree failed, trying fallback:', error);
    
    // Fallback to mailto
    const { firstName, lastName, email, subject, message } = formData;
    const mailtoLink = `mailto:safiankhan59@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    try {
      window.location.href = mailtoLink;
      setTimeout(() => {
        alert('Thank you for your message! Your email client should open with a pre-filled message. Please send it to complete the contact process.');
      }, 100);
    } catch (popupError) {
      alert(`Thank you for your message! Please copy the following information and email it to safiankhan59@gmail.com:\n\nSubject: ${subject || 'Contact from Portfolio'}\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
    }
    
    return { success: true };
  }
};

// Form validation
export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }
  
  if (!formData.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  }
  
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
