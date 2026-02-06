export default function Process() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '80px'}}>
      {/* Header */}
      <section style={{textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>How Our Research Process Works</h1>
        <p style={{fontSize: '20px', opacity: '0.9', maxWidth: '800px', margin: '0 auto'}}>
          From initial consultation to final delivery, we ensure a smooth, transparent, and collaborative research experience.
        </p>
      </section>

      {/* Main Process Steps */}
      <section>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px', color: 'white'}}>Our 6-Step Research Process</h2>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
          
          {/* Step 1 */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{width: '120px', height: '120px', backgroundColor: '#dbeafe', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#1e40af'}}>1</div>
              <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white'}}>Initial Consultation</h3>
            </div>
            <div>
              <h4 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}}>Submit Your Requirements & Free Consultation</h4>
              <p style={{color: 'white', marginBottom: '20px', lineHeight: '1.7', fontWeight: 'bold'}}>
                Fill out our detailed quote request form or contact us directly. We'll schedule a free consultation call within 24 hours to discuss your project in detail.
              </p>
              <div style={{backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #1e40af'}}>
                <h5 style={{fontWeight: '600', marginBottom: '12px', color: '#78350f'}}>What We Discuss:</h5>
                <ul style={{color: '#78350f', lineHeight: '1.6'}}>
                  <li>• Research objectives and questions</li>
                  <li>• Methodology preferences</li>
                  <li>• Timeline and deliverables</li>
                  <li>• Budget considerations</li>
                  <li>• Specific requirements and expectations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'center'}}>
            <div>
              <h4 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}}>Detailed Proposal & Project Scoping</h4>
              <p style={{color: 'white', marginBottom: '20px', lineHeight: '1.7', fontWeight: 'bold'}}>
                Based on our consultation, we create a comprehensive project proposal with detailed scope, methodology, timeline, and transparent pricing.
              </p>
              <div style={{backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #16a34a'}}>
                <h5 style={{fontWeight: '600', marginBottom: '12px', color: '#78350f'}}>Your Proposal Includes:</h5>
                <ul style={{color: '#78350f', lineHeight: '1.6'}}>
                  <li>• Detailed project scope and objectives</li>
                  <li>• Research methodology and approach</li>
                  <li>• Timeline with key milestones</li>
                  <li>• Transparent pricing breakdown</li>
                  <li>• Team assignment and expertise match</li>
                  <li>• Revision policy and quality guarantee</li>
                </ul>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{width: '120px', height: '120px', backgroundColor: '#dcfce7', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#16a34a'}}>2</div>
              <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white'}}>Project Proposal</h3>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{width: '120px', height: '120px', backgroundColor: '#fef3c7', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#d97706'}}>3</div>
              <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white'}}>Agreement & Kickoff</h3>
            </div>
            <div>
              <h4 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}}>Contract Signing & Project Initiation</h4>
              <p style={{color: 'white', marginBottom: '20px', lineHeight: '1.7', fontWeight: 'bold'}}>
                Once you approve the proposal, we sign a formal agreement and begin the research process. You'll be assigned a dedicated project manager and research team.
              </p>
              <div style={{backgroundColor: '#fffbeb', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #d97706'}}>
                <h5 style={{fontWeight: '600', marginBottom: '12px', color: '#78350f'}}>Project Kickoff Includes:</h5>
                <ul style={{color: '#78350f', lineHeight: '1.6'}}>
                  <li>• Formal project agreement</li>
                  <li>• Team introduction and contact details</li>
                  <li>• Project timeline and milestone schedule</li>
                  <li>• Communication protocol setup</li>
                  <li>• Initial payment processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'center'}}>
            <div>
              <h4 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}}>Research Execution & Regular Updates</h4>
              <p style={{color: 'white', marginBottom: '20px', lineHeight: '1.7', fontWeight: 'bold'}}>
                Our expert team begins the research work according to the agreed methodology. You'll receive regular progress updates and have opportunities for feedback throughout the process.
              </p>
              <div style={{backgroundColor: '#fdf4ff', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #a855f7'}}>
                <h5 style={{fontWeight: '600', marginBottom: '12px', color: '#78350f'}}>During Research Phase:</h5>
                <ul style={{color: '#78350f', lineHeight: '1.6'}}>
                  <li>• Weekly progress reports</li>
                  <li>• Access to preliminary findings</li>
                  <li>• Regular check-in calls</li>
                  <li>• Opportunity for course corrections</li>
                  <li>• Draft sections for early review</li>
                </ul>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{width: '120px', height: '120px', backgroundColor: '#f3e8ff', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#a855f7'}}>4</div>
              <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white'}}>Research Execution</h3>
            </div>
          </div>

          {/* Step 5 */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{width: '120px', height: '120px', backgroundColor: '#fecaca', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#dc2626'}}>5</div>
              <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white'}}>Review & Revision</h3>
            </div>
            <div>
              <h4 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}}>Draft Review & Collaborative Refinement</h4>
              <p style={{color: 'white', marginBottom: '20px', lineHeight: '1.7', fontWeight: 'bold'}}>
                We deliver the first complete draft for your review. You can request revisions, provide feedback, and work with us to refine the research to meet your exact requirements.
              </p>
              <div style={{backgroundColor: '#fef2f2', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #dc2626'}}>
                <h5 style={{fontWeight: '600', marginBottom: '12px', color: '#78350f'}}>Revision Process:</h5>
                <ul style={{color: '#78350f', lineHeight: '1.6'}}>
                  <li>• Complete draft delivery</li>
                  <li>• Detailed feedback collection</li>
                  <li>• Up to 3 rounds of revisions included</li>
                  <li>• Direct collaboration with researchers</li>
                  <li>• Quality assurance checks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'center'}}>
            <div>
              <h4 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}}>Final Delivery & Ongoing Support</h4>
              <p style={{color: 'white', marginBottom: '20px', lineHeight: '1.7', fontWeight: 'bold'}}>
                After incorporating all feedback and completing final quality checks, we deliver the completed research project. We also provide ongoing support for any questions or additional needs.
              </p>
              <div style={{backgroundColor: '#ecfdf5', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #059669'}}>
                <h5 style={{fontWeight: '600', marginBottom: '12px', color: '#78350f'}}>Final Delivery Package:</h5>
                <ul style={{color: '#78350f', lineHeight: '1.6'}}>
                  <li>• Complete research document</li>
                  <li>• Executive summary (if applicable)</li>
                  <li>• Raw data and analysis files</li>
                  <li>• Bibliography and references</li>
                  <li>• 30-day post-delivery support</li>
                  <li>• Satisfaction guarantee</li>
                </ul>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{width: '120px', height: '120px', backgroundColor: '#d1fae5', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#059669'}}>6</div>
              <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white'}}>Final Delivery</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section style={{backgroundColor: '#78350f', padding: '20px 15px', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px'}}>Our Quality Assurance Promise</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
          
          <div style={{textAlign: 'center', padding: '30px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '30px', height: '30px', color: '#60a5fa'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px'}}>Expert Review</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>Every project is reviewed by senior researchers and subject matter experts before delivery.</p>
          </div>

          <div style={{textAlign: 'center', padding: '30px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: 'rgba(34, 197, 94, 0.2)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '30px', height: '30px', color: '#4ade80'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
              </svg>
            </div>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px'}}>Plagiarism Free</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>All research is original and checked through advanced plagiarism detection software.</p>
          </div>

          <div style={{textAlign: 'center', padding: '30px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '30px', height: '30px', color: '#a78bfa'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px'}}>On-Time Delivery</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>We guarantee delivery within agreed timelines or provide compensation for delays.</p>
          </div>

          <div style={{textAlign: 'center', padding: '30px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: 'rgba(251, 191, 36, 0.2)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '30px', height: '30px', color: '#fbbf24'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px'}}>Confidentiality</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>Strict confidentiality agreements protect your research data and intellectual property.</p>
          </div>
        </div>
      </section>

      {/* Communication & Support */}
      <section>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: 'white'}}>Communication & Support</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
          
          <div className="card">
            <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#78350f'}}>Regular Communication</h3>
            <ul style={{color: '#78350f', lineHeight: '1.8', marginBottom: '20px', fontWeight: 'bold'}}>
              <li>• <strong>Weekly Progress Reports:</strong> Detailed updates on research progress</li>
              <li>• <strong>Scheduled Check-ins:</strong> Regular calls to discuss findings and direction</li>
              <li>• <strong>24/7 Email Support:</strong> Questions answered within 24 hours</li>
              <li>• <strong>Direct Team Access:</strong> Communicate directly with your research team</li>
              <li>• <strong>Project Dashboard:</strong> Online portal to track progress and milestones</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#78350f'}}>Ongoing Support</h3>
            <ul style={{color: '#78350f', lineHeight: '1.8', marginBottom: '20px', fontWeight: 'bold'}}>
              <li>• <strong>Post-Delivery Support:</strong> 30 days of free support after completion</li>
              <li>• <strong>Revision Guarantee:</strong> Up to 3 rounds of revisions included</li>
              <li>• <strong>Data Retention:</strong> We keep your project files for 1 year</li>
              <li>• <strong>Follow-up Research:</strong> Discounted rates for additional research</li>
              <li>• <strong>Publication Support:</strong> Help with journal submissions if needed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{textAlign: 'center', padding: '40px 30px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px'}}>Ready to Start Your Research Project?</h2>
        <p style={{fontSize: '18px', marginBottom: '32px', opacity: '0.9', maxWidth: '600px', margin: '0 auto 32px'}}>
          Experience our proven research process. Get a free consultation and detailed proposal for your project.
        </p>
        <a href="/contact" style={{backgroundColor: 'white', color: '#1e40af', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px', boxShadow: '0 4px 20px rgba(255,255,255,0.3)'}}>
          Get Your Free Quote
        </a>
      </section>
    </div>
  );
}