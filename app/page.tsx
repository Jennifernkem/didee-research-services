import Link from 'next/link';

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '80px'}}>
      {/* Hero Section */}
      <section style={{textAlign: 'center', padding: '50px 20px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'url(/images/research-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.2'}}></div>
        <div style={{position: 'relative', zIndex: '2'}}>
          <h1 style={{fontSize: '56px', fontWeight: 'bold', marginBottom: '24px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            Professional Research Solutions
          </h1>
          <p style={{fontSize: '24px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', opacity: '0.95', lineHeight: '1.6'}}>
            Custom research services, academic writing, and data analysis for organizations, students, and professionals worldwide
          </p>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/contact" style={{backgroundColor: 'white', color: '#1e40af', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px', transition: 'all 0.3s', boxShadow: '0 4px 20px rgba(255,255,255,0.3)'}}>
              Get Free Quote
            </Link>
            <Link href="/services" style={{border: '2px solid white', color: 'white', padding: '14px 30px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px', transition: 'all 0.3s'}}>
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 style={{fontSize: '42px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px', color: 'white'}}>Our Research Services</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
          
          <div className="card" style={{textAlign: 'center', position: 'relative'}}>
            <div style={{width: '80px', height: '80px', backgroundColor: '#dbeafe', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '40px', height: '40px', color: '#1e40af'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#1e40af'}}>Custom Research Projects</h3>
            <p style={{color: '#6b7280', lineHeight: '1.6', marginBottom: '20px'}}>
              Comprehensive research studies tailored to your specific needs. From market research to academic investigations, we deliver high-quality, evidence-based findings.
            </p>
            <ul style={{textAlign: 'left', color: '#6b7280', marginBottom: '24px'}}>
              <li>• Market & Industry Analysis</li>
              <li>• Academic Literature Reviews</li>
              <li>• Policy Research & Analysis</li>
              <li>• Competitive Intelligence</li>
            </ul>
          </div>

          <div className="card" style={{textAlign: 'center'}}>
            <div style={{width: '80px', height: '80px', backgroundColor: '#dcfce7', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '40px', height: '40px', color: '#16a34a'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#78350f'}}>Academic Writing Support</h3>
            <p style={{color: '#6b7280', lineHeight: '1.6', marginBottom: '20px'}}>
              Professional writing services for students and researchers. From research proposals to complete academic projects, we ensure academic excellence.
            </p>
            <ul style={{textAlign: 'left', color: '#6b7280', marginBottom: '24px'}}>
              <li>• Academic Research Writing</li>
              <li>• Research Proposals</li>
              <li>• Journal Article Preparation</li>
              <li>• Grant Writing Support</li>
            </ul>
          </div>

          <div className="card" style={{textAlign: 'center'}}>
            <div style={{width: '80px', height: '80px', backgroundColor: '#fef3c7', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg style={{width: '40px', height: '40px', color: '#d97706'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,3H21A1,1 0 0,1 22,4V20A1,1 0 0,1 21,21H3A1,1 0 0,1 2,20V4A1,1 0 0,1 3,3M5,5V19H19V5H5M7,7H17V9H7V7M7,11H17V13H7V11M7,15H17V17H7V15Z"/>
              </svg>
            </div>
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#d97706'}}>Data Analysis & Insights</h3>
            <p style={{color: '#6b7280', lineHeight: '1.6', marginBottom: '20px'}}>
              Transform raw data into actionable insights. Our experts use advanced statistical methods and visualization tools to uncover meaningful patterns.
            </p>
            <ul style={{textAlign: 'left', color: '#6b7280', marginBottom: '24px'}}>
              <li>• Statistical Analysis</li>
              <li>• Survey Design & Analysis</li>
              <li>• Data Visualization</li>
              <li>• Predictive Modeling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{backgroundColor: '#f8fafc', padding: '30px 20px', borderRadius: '20px', position: 'relative'}}>
        <div style={{position: 'relative', zIndex: '2'}}>
          <h2 style={{fontSize: '42px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px', color: '#78350f'}}>Why Choose Didee Research?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px'}}>
            
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '48px', fontWeight: 'bold', color: '#1e40af', marginBottom: '16px'}}>100+</div>
              <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1f2937'}}>Projects Completed</h3>
              <p style={{color: '#6b7280'}}>Successfully delivered research projects across various domains and industries</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '48px', fontWeight: 'bold', color: '#78350f', marginBottom: '16px'}}>PhD</div>
              <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1f2937'}}>Expert Researchers</h3>
              <p style={{color: '#6b7280'}}>Led by Dr. Daniel Offor and team of qualified researchers with advanced degrees</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '48px', fontWeight: 'bold', color: '#d97706', marginBottom: '16px'}}>24/7</div>
              <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1f2937'}}>Support Available</h3>
              <p style={{color: '#6b7280'}}>Round-the-clock communication and support throughout your project timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section>
        <h2 style={{fontSize: '42px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px', color: 'white'}}>How It Works</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
          
          <div style={{textAlign: 'center', padding: '30px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: '#1e40af', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold'}}>1</div>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'white'}}>Submit Requirements</h3>
            <p style={{color: 'white', fontWeight: 'bold'}}>Share your research needs, timeline, and specific requirements through our consultation form</p>
          </div>

          <div style={{textAlign: 'center', padding: '30px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: '#78350f', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold'}}>2</div>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'white'}}>Get Custom Quote</h3>
            <p style={{color: 'white', fontWeight: 'bold'}}>Receive a detailed proposal with scope, timeline, and pricing based on your specific needs</p>
          </div>

          <div style={{textAlign: 'center', padding: '30px'}}>
            <div style={{width: '60px', height: '60px', backgroundColor: '#d97706', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold'}}>3</div>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'white'}}>Research & Delivery</h3>
            <p style={{color: 'white', fontWeight: 'bold'}}>Our expert team conducts thorough research and delivers high-quality results on time</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{textAlign: 'center', padding: '50px 40px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white', position: 'relative'}}>
        <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'url(/images/research-cta.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.2'}}></div>
        <div style={{position: 'relative', zIndex: '2'}}>
          <h2 style={{fontSize: '42px', fontWeight: 'bold', marginBottom: '24px'}}>Ready to Start Your Research Project?</h2>
          <p style={{fontSize: '20px', marginBottom: '40px', opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px'}}>
            Get a free consultation and custom quote for your research needs. No obligation, just expert advice.
          </p>
          <Link href="/contact" style={{backgroundColor: 'white', color: '#78350f', padding: '16px 40px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px', boxShadow: '0 4px 20px rgba(255,255,255,0.3)'}}>
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}