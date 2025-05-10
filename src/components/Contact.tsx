import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validateForm()) {
      setIsSubmitting(true);
  
     
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
  
     
      emailjs.send(
        'service_qg9k919',   // Replace with your actual service ID
        'template_of50vuj',  // Replace with your actual template ID
        templateParams,
        '6MDFUpqKmJTavE-g7'      // Replace with your actual user ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
  
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
  
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setIsSubmitting(false);
      });
    }
  };
  
  
  return (
    <section id="contact" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2">05.</span> 
          Get In Touch
          <span className="ml-4 h-px bg-[#233554] flex-grow"></span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-[#8892b0] mb-8 text-center">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          {submitSuccess ? (
            <div className="bg-[#112240] p-8 rounded-md border border-[#64ffda] text-center">
              <h3 className="text-xl text-[#ccd6f6] mb-2">Message Sent!</h3>
              <p className="text-[#8892b0]">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-[#112240] p-6 md:p-8 rounded-md shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[#8892b0] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-[#0a192f] text-[#ccd6f6] border rounded-md focus:outline-none focus:ring-2 transition-all
                    ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#233554] focus:ring-[#64ffda]'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#8892b0] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-[#0a192f] text-[#ccd6f6] border rounded-md focus:outline-none focus:ring-2 transition-all
                    ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#233554] focus:ring-[#64ffda]'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-[#8892b0] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-[#0a192f] text-[#ccd6f6] border rounded-md focus:outline-none focus:ring-2 transition-all
                  ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-[#233554] focus:ring-[#64ffda]'}`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#8892b0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-[#0a192f] text-[#ccd6f6] border rounded-md focus:outline-none focus:ring-2 transition-all
                  ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[#233554] focus:ring-[#64ffda]'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-[#64ffda] text-[#0a192f] font-medium rounded hover:bg-[#64ffda]/90 
                transition duration-300 w-full flex justify-center items-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;