"use client";

import { useState, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button'; 

// Debounce utility function
const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: NodeJS.Timeout | null = null;
    
    return (...args: any[]) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.success);
      } else {
        setResponseMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Wrap handleSubmit in debounce to prevent spam submissions
  const debouncedSubmit = useCallback(debounce(handleSubmit, 1000), [formData]);

  return (
    <section id="contact-form" className="mb-16">
      <Card className="max-w-5xl mx-auto px-4 bg-white text-black">   
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={debouncedSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input 
                id="name" 
                placeholder="Your Name" 
                className="bg-gray-100"
                value={formData.name} 
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="bg-gray-100"
                value={formData.email} 
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <Textarea 
                id="message" 
                placeholder="Your message here..." 
                className="bg-gray-100"
                value={formData.message} 
                onChange={handleChange}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-black text-white hover:bg-gray-800" 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
            {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;
