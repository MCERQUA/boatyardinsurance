"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

const serviceOptions = [
  "General Inquiry",
  "Quote Request",
  "Policy Questions",
  "Claims Assistance",
  "Coverage Changes",
  "Billing Questions",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const submitData: Record<string, string> = {
        'form-name': 'surron-contact',
        ...formData,
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(submitData).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
      } else {
        throw new Error(`Submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error sending your message. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 1 business day.
        </p>
        <p className="text-sm text-muted-foreground">
          Need immediate assistance? Call us at{" "}
          <a href="tel:844-967-5247" className="text-primary font-medium hover:underline">
            (844) 967-5247
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      name="surron-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="surron-contact" />
      <div style={{ display: 'none' }}>
        <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      {submitStatus === 'error' && (
        <div className="p-4 rounded-md bg-red-50 text-red-800 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{errorMessage}</p>
            <p className="text-sm mt-1">
              Call us at <a href="tel:844-967-5247" className="underline">(844) 967-5247</a>
            </p>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
          placeholder="Your full name" 
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="you@example.com" 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567" 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceInterest">What can we help you with?</Label>
        <Select 
          name="serviceInterest" 
          value={formData.serviceInterest}
          onValueChange={(value) => handleSelectChange('serviceInterest', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="How can we help you?"
          rows={5}
        />
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-indigo-600 hover:bg-indigo-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
