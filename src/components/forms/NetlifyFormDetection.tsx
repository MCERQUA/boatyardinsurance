/**
 * Static Forms for Netlify Detection
 * 
 * Renders hidden static HTML forms that Netlify detects at build time.
 * Field names must EXACTLY match the dynamic form components.
 */

export function NetlifyFormDetection() {
  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {/* Quote Request Form */}
      <form 
        name="surron-quote-request" 
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="surron-quote-request" />
        <input name="bot-field" />
        
        {/* Personal Information */}
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="streetAddress" />
        <input type="text" name="city" />
        <input type="text" name="state" />
        <input type="text" name="zipCode" />
        <input type="date" name="dateOfBirth" />
        
        {/* E-Bike Information */}
        <input type="text" name="ebikeBrand" />
        <input type="text" name="ebikeModel" />
        <input type="text" name="ebikeYear" />
        <input type="text" name="ebikeValue" />
        <input type="text" name="vinSerialNumber" />
        <input type="text" name="isModified" />
        <textarea name="modifications"></textarea>
        <input type="text" name="storageLocation" />
        <input type="text" name="hasSecuritySystem" />
        <textarea name="securityDetails"></textarea>
        
        {/* Usage Information */}
        <input type="text" name="primaryUse" />
        <input type="text" name="annualMiles" />
        <input type="text" name="ridingLocations" />
        <input type="text" name="participatesInEvents" />
        <textarea name="eventDetails"></textarea>
        
        {/* Insurance History */}
        <input type="text" name="currentInsurer" />
        <input type="text" name="hadClaimsLast3Years" />
        <textarea name="claimsDetails"></textarea>
        <input type="text" name="hadAccidents" />
        <textarea name="accidentDetails"></textarea>
        <input type="text" name="coverageDesired" />
        
        {/* Additional */}
        <input type="text" name="howDidYouHear" />
        <input type="text" name="preferredContact" />
        <input type="text" name="bestTimeToContact" />
        <textarea name="additionalComments"></textarea>
      </form>

      {/* Contact Form */}
      <form 
        name="surron-contact" 
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="surron-contact" />
        <input name="bot-field" />
        
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="serviceInterest" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
}
