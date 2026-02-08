export default function Contact() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
      {/* Header */}
      <section style={{textAlign: 'center', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 20px)', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: 'clamp(12px, 3vw, 20px)', color: 'white'}}>
        <h1 style={{fontSize: 'clamp(28px, 7vw, 48px)', fontWeight: 'bold', marginBottom: 'clamp(16px, 3vw, 24px)'}}>Get Your Custom Research Quote</h1>
        <p style={{fontSize: 'clamp(16px, 3vw, 20px)', opacity: '0.9', maxWidth: '800px', margin: '0 auto'}}>
          Tell us about your research needs and get a detailed proposal with timeline and pricing. Free consultation included.
        </p>
      </section>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(30px, 5vw, 60px)'}}>
        {/* Quote Request Form */}
        <div>
          <h2 style={{fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 'bold', marginBottom: 'clamp(16px, 3vw, 24px)', color: 'white'}}>Request Your Quote</h2>
          <p style={{fontSize: 'clamp(14px, 2.5vw, 16px)', color: 'white', marginBottom: 'clamp(20px, 4vw, 32px)', fontWeight: 'bold'}}>
            Fill out this form with as much detail as possible. The more information you provide, the more accurate our quote will be.
          </p>

          <form action="https://formspree.io/f/mojnagvg" method="POST" style={{display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)'}}>
            {/* Personal Information */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(16px, 3vw, 20px)'}}>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Full Name *</label>
                <input 
                  type="text" 
                  name="Full_Name"
                  required
                  style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Email Address *</label>
                <input 
                  type="email" 
                  name="Email"
                  required
                  style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(16px, 3vw, 20px)'}}>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Phone Number</label>
                <input 
                  type="tel"
                  name="Phone"
                  style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Organization/Institution</label>
                <input 
                  type="text"
                  name="Organization"
                  style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}}
                  placeholder="Your organization name"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Research Type *</label>
              <select 
                name="Research_Type"
                required
                style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}}
              >
                <option value="">Select research type</option>
                <option value="custom-research">Custom Research Project</option>
                <option value="academic-writing">Academic Writing Support</option>
                <option value="thesis-dissertation">Thesis/Dissertation</option>
                <option value="data-analysis">Data Analysis</option>
                <option value="literature-review">Literature Review</option>
                <option value="market-research">Market Research</option>
                <option value="policy-research">Policy Research</option>
                <option value="other">Other (specify in description)</option>
              </select>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(16px, 3vw, 20px)'}}>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Research Domain</label>
                <select style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}} name="Research_Domain">
                  <option value="">Select domain</option>
                  <option value="psychology">Psychology & Mental Health</option>
                  <option value="education">Education</option>
                  <option value="business">Business & Economics</option>
                  <option value="healthcare">Healthcare & Medicine</option>
                  <option value="technology">Information Technology</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="political-science">Political Science</option>
                  <option value="geography">Geography & Planning</option>
                  <option value="theology">Theology & Religious Studies</option>
                  <option value="genetics">Genetics & Biology</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Expected Timeline</label>
                <select style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}} name="Timeline">
                  <option value="">Select timeline</option>
                  <option value="1-2-weeks">1-2 weeks</option>
                  <option value="3-4-weeks">3-4 weeks</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-months-plus">6+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(16px, 3vw, 20px)'}}>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Estimated Pages/Length</label>
                <select style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}} name="Pages_Length">
                  <option value="">Select length</option>
                  <option value="1-10">1-10 pages</option>
                  <option value="11-25">11-25 pages</option>
                  <option value="26-50">26-50 pages</option>
                  <option value="51-100">51-100 pages</option>
                  <option value="100-plus">100+ pages</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Budget Range (Optional)</label>
                <select style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px'}} name="Budget">
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-plus">$5,000+</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Project Description *</label>
              <textarea 
                name="Project_Description"
                required
                rows={6}
                style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px', resize: 'vertical'}}
                placeholder="Please provide detailed information about your research project including:&#10;• Research objectives and questions&#10;• Methodology preferences&#10;• Data sources needed&#10;• Specific requirements&#10;• Any additional context"
              ></textarea>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: 'white'}}>Additional Requirements</label>
              <textarea 
                name="Additional_Requirements"
                rows={3}
                style={{width: '100%', padding: '12px 16px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px', resize: 'vertical'}}
                placeholder="Any specific formatting, citation styles, or special requirements..."
              ></textarea>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <input type="checkbox" id="terms" required style={{width: '18px', height: '18px'}} />
              <label htmlFor="terms" style={{color: 'white', fontSize: '14px', fontWeight: 'bold'}}>
                I agree to the terms of service and privacy policy. I understand this is a quote request and not a binding commitment.
              </label>
            </div>

            <button 
              type="submit"
              style={{
                backgroundColor: '#78350f', 
                color: 'white', 
                padding: '16px 32px', 
                borderRadius: '12px', 
                border: 'none', 
                fontSize: '18px', 
                fontWeight: '700', 
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(22, 163, 74, 0.3)'
              }}
            >
              Submit Quote Request
            </button>
          </form>
        </div>

        {/* Contact Information & FAQ */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
          {/* Contact Info */}
          <div className="card">
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#1f2937'}}>Contact Information</h3>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '40px', height: '40px', backgroundColor: '#dbeafe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg style={{width: '20px', height: '20px', color: '#1e40af'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p style={{fontWeight: '600', color: '#1f2937'}}>Email</p>
                  <p style={{color: '#6b7280'}}>info@didee-research.com</p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '40px', height: '40px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg style={{width: '20px', height: '20px', color: '#16a34a'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p style={{fontWeight: '600', color: '#1f2937'}}>WhatsApp</p>
                  <p style={{color: '#6b7280', fontSize: '14px'}}>+44 7831 077726</p>
                  <p style={{color: '#6b7280', fontSize: '14px'}}>+44 7349 054077</p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '40px', height: '40px', backgroundColor: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg style={{width: '20px', height: '20px', color: '#d97706'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p style={{fontWeight: '600', color: '#1f2937'}}>Location</p>
                  <p style={{color: '#6b7280'}}>Cardiff, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="card" style={{backgroundColor: '#f0f9ff'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#1e40af'}}>What Happens Next?</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '24px', height: '24px', backgroundColor: '#1e40af', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 'bold'}}>1</div>
                <p style={{color: '#6b7280', fontSize: '14px'}}>We review your request within 24 hours</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '24px', height: '24px', backgroundColor: '#1e40af', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 'bold'}}>2</div>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Free consultation call to discuss details</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '24px', height: '24px', backgroundColor: '#1e40af', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 'bold'}}>3</div>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Detailed proposal with timeline & pricing</p>
              </div>
            </div>
          </div>

          {/* Quick FAQ */}
          <div className="card">
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#1f2937'}}>Quick FAQ</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div>
                <p style={{fontWeight: '600', color: '#1f2937', marginBottom: '4px'}}>How much does research cost?</p>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Pricing depends on scope, complexity, and timeline. We provide custom quotes after understanding your needs.</p>
              </div>
              <div>
                <p style={{fontWeight: '600', color: '#1f2937', marginBottom: '4px'}}>Do you work with students?</p>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Yes! We support students with thesis writing, research proposals, and academic projects.</p>
              </div>
              <div>
                <p style={{fontWeight: '600', color: '#1f2937', marginBottom: '4px'}}>What's included in the service?</p>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Research, writing, analysis, revisions, and ongoing support throughout the project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}