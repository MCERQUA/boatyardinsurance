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

const businessTypes = [
  "Full-Service Boat Yard",
  "Marine Repair Facility",
  "Dry Stack Storage",
  "Marina/Slip Rentals",
  "Boat Dealership",
  "Canvas/Upholstery Shop",
  "Marine Electronics",
  "Boat Detailing",
  "Other Marine Business",
];

const servicesOffered = [
  "Haul-out/Launch",
  "Hull Repair/Fiberglass",
  "Engine Repair/Service",
  "Electrical Work",
  "Bottom Painting",
  "Boat Storage (Indoor)",
  "Boat Storage (Outdoor)",
  "Fuel Dock",
  "Parts/Accessories Sales",
];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const employeeRanges = [
  "1-5 employees",
  "6-10 employees",
  "11-25 employees",
  "26-50 employees",
  "51-100 employees",
  "100+ employees",
];

const revenueRanges = [
  "Under $250,000",
  "$250,000 - $500,000",
  "$500,000 - $1,000,000",
  "$1,000,000 - $2,500,000",
  "$2,500,000 - $5,000,000",
  "$5,000,000+",
];

const coverageOptions = [
  "General Liability",
  "Property Coverage",
  "Marine Liability (CCC)",
  "Workers Compensation",
  "Commercial Auto",
  "Umbrella/Excess",
  "Full Package - All Coverages",
  "Not Sure - Need Consultation",
];

const howHeardOptions = [
  "Google Search",
  "Industry Referral",
  "Trade Association",
  "Social Media",
  "Existing Client Referral",
  "Other",
];

const contactPreferences = [
  "Phone Call",
  "Email",
  "Text Message",
];

const contactTimes = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 5pm)",
  "Anytime Business Hours",
];

interface FormData {
  // Business Information
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  businessType: string;
  yearsInBusiness: string;
  // Operations
  numberOfEmployees: string;
  annualRevenue: string;
  boatsInCare: string;
  maxBoatValue: string;
  hasWaterAccess: string;
  operatesLifts: string;
  servicesOffered: string;
  // Insurance
  currentInsurer: string;
  renewalDate: string;
  coverageNeeded: string;
  hadClaimsLast5Years: string;
  claimsDetails: string;
  // Additional
  howDidYouHear: string;
  preferredContact: string;
  bestTimeToContact: string;
  additionalComments: string;
}

const initialFormData: FormData = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  businessType: "",
  yearsInBusiness: "",
  numberOfEmployees: "",
  annualRevenue: "",
  boatsInCare: "",
  maxBoatValue: "",
  hasWaterAccess: "",
  operatesLifts: "",
  servicesOffered: "",
  currentInsurer: "",
  renewalDate: "",
  coverageNeeded: "",
  hadClaimsLast5Years: "",
  claimsDetails: "",
  howDidYouHear: "",
  preferredContact: "",
  bestTimeToContact: "",
  additionalComments: "",
};

export function QuoteForm() {
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
        'form-name': 'boatyard-quote-request',
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
      setErrorMessage('There was an error submitting your request. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your interest in boat yard insurance. One of our marine insurance specialists will contact you within 1 business day with your customized quote.
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
      name="boatyard-quote-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value="boatyard-quote-request" />
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

      {/* Section 1: Business Information */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg border-b pb-2 text-slate-900">Business Information</h3>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name *</Label>
            <Input 
              id="businessName" 
              name="businessName" 
              value={formData.businessName}
              onChange={handleChange}
              required 
              placeholder="Your Boat Yard LLC" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactName">Contact Name *</Label>
            <Input 
              id="contactName" 
              name="contactName" 
              value={formData.contactName}
              onChange={handleChange}
              required 
              placeholder="John Smith" 
            />
          </div>
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
              placeholder="john@yourboatyard.com" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              value={formData.phone}
              onChange={handleChange}
              required 
              placeholder="(555) 123-4567" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="streetAddress">Business Address *</Label>
          <Input 
            id="streetAddress" 
            name="streetAddress" 
            value={formData.streetAddress}
            onChange={handleChange}
            required 
            placeholder="123 Marina Way" 
          />
        </div>
        
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input 
              id="city" 
              name="city" 
              value={formData.city}
              onChange={handleChange}
              required 
              placeholder="Fort Lauderdale" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Select 
              name="state" 
              value={formData.state}
              onValueChange={(value) => handleSelectChange('state', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input 
              id="zipCode" 
              name="zipCode" 
              value={formData.zipCode}
              onChange={handleChange}
              required 
              placeholder="33301" 
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="businessType">Type of Business *</Label>
            <Select 
              name="businessType" 
              value={formData.businessType}
              onValueChange={(value) => handleSelectChange('businessType', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="yearsInBusiness">Years in Business *</Label>
            <Input 
              id="yearsInBusiness" 
              name="yearsInBusiness" 
              type="number" 
              value={formData.yearsInBusiness}
              onChange={handleChange}
              required 
              placeholder="10" 
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Operations */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg border-b pb-2 text-slate-900">Operations</h3>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="numberOfEmployees">Number of Employees *</Label>
            <Select 
              name="numberOfEmployees" 
              value={formData.numberOfEmployees}
              onValueChange={(value) => handleSelectChange('numberOfEmployees', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                {employeeRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="annualRevenue">Annual Revenue *</Label>
            <Select 
              name="annualRevenue" 
              value={formData.annualRevenue}
              onValueChange={(value) => handleSelectChange('annualRevenue', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                {revenueRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="boatsInCare">Max Boats in Care at Once</Label>
            <Input 
              id="boatsInCare" 
              name="boatsInCare" 
              type="number" 
              value={formData.boatsInCare}
              onChange={handleChange}
              placeholder="e.g., 50" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxBoatValue">Highest Boat Value in Care ($)</Label>
            <Input 
              id="maxBoatValue" 
              name="maxBoatValue" 
              type="number" 
              value={formData.maxBoatValue}
              onChange={handleChange}
              placeholder="e.g., 500000" 
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hasWaterAccess">Direct Water Access? *</Label>
            <Select 
              name="hasWaterAccess" 
              value={formData.hasWaterAccess}
              onValueChange={(value) => handleSelectChange('hasWaterAccess', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="operatesLifts">Operate Travel Lifts/Forklifts? *</Label>
            <Select 
              name="operatesLifts" 
              value={formData.operatesLifts}
              onValueChange={(value) => handleSelectChange('operatesLifts', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Travel Lift">Travel Lift</SelectItem>
                <SelectItem value="Forklift Only">Forklift Only</SelectItem>
                <SelectItem value="Both">Both</SelectItem>
                <SelectItem value="Neither">Neither</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="servicesOffered">Services Offered (select all that apply)</Label>
          <Textarea 
            id="servicesOffered" 
            name="servicesOffered" 
            value={formData.servicesOffered}
            onChange={handleChange}
            placeholder="e.g., Haul-out, hull repair, engine service, bottom painting, storage..." 
            rows={3}
          />
        </div>
      </div>

      {/* Section 3: Insurance Information */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg border-b pb-2 text-slate-900">Insurance Information</h3>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="currentInsurer">Current Insurance Provider</Label>
            <Input 
              id="currentInsurer" 
              name="currentInsurer" 
              value={formData.currentInsurer}
              onChange={handleChange}
              placeholder="None, or provider name" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="renewalDate">Policy Renewal Date</Label>
            <Input 
              id="renewalDate" 
              name="renewalDate" 
              type="date" 
              value={formData.renewalDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="coverageNeeded">Coverage Needed *</Label>
            <Select 
              name="coverageNeeded" 
              value={formData.coverageNeeded}
              onValueChange={(value) => handleSelectChange('coverageNeeded', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select coverage" />
              </SelectTrigger>
              <SelectContent>
                {coverageOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hadClaimsLast5Years">Claims in Past 5 Years?</Label>
            <Select 
              name="hadClaimsLast5Years" 
              value={formData.hadClaimsLast5Years}
              onValueChange={(value) => handleSelectChange('hadClaimsLast5Years', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="No">No Claims</SelectItem>
                <SelectItem value="1 Claim">1 Claim</SelectItem>
                <SelectItem value="2-3 Claims">2-3 Claims</SelectItem>
                <SelectItem value="4+ Claims">4+ Claims</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {formData.hadClaimsLast5Years && formData.hadClaimsLast5Years !== 'No' && (
          <div className="space-y-2">
            <Label htmlFor="claimsDetails">Claims Details</Label>
            <Textarea 
              id="claimsDetails" 
              name="claimsDetails" 
              value={formData.claimsDetails}
              onChange={handleChange}
              placeholder="Brief description of claims..." 
              rows={2}
            />
          </div>
        )}
      </div>

      {/* Section 4: Additional Information */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg border-b pb-2 text-slate-900">Additional Information</h3>
        
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
            <Select 
              name="howDidYouHear" 
              value={formData.howDidYouHear}
              onValueChange={(value) => handleSelectChange('howDidYouHear', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {howHeardOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredContact">Preferred Contact Method</Label>
            <Select 
              name="preferredContact" 
              value={formData.preferredContact}
              onValueChange={(value) => handleSelectChange('preferredContact', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {contactPreferences.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bestTimeToContact">Best Time to Contact</Label>
            <Select 
              name="bestTimeToContact" 
              value={formData.bestTimeToContact}
              onValueChange={(value) => handleSelectChange('bestTimeToContact', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {contactTimes.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalComments">Additional Comments or Questions</Label>
          <Textarea 
            id="additionalComments" 
            name="additionalComments" 
            value={formData.additionalComments}
            onChange={handleChange}
            placeholder="Tell us more about your business or any specific coverage concerns..."
            rows={4}
          />
        </div>
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get My Free Quote"
          )}
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting this form, you agree to be contacted about insurance quotes.
          We respect your privacy and will never share your information.
        </p>
      </div>
    </form>
  );
}
