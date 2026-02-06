import Link from 'next/link';

export default function Portfolio() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
      {/* Header */}
      <section style={{textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>Our Research Portfolio</h1>
        <p style={{fontSize: '20px', opacity: '0.9', maxWidth: '800px', margin: '0 auto'}}>
          Explore our published research works and successful projects across multiple domains. Quality research that makes an impact.
        </p>
      </section>

      {/* Didee Publications Showcase */}
      <section>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: 'white'}}>Didee Publications</h2>
            <p style={{fontSize: '18px', color: 'white', marginBottom: '30px', lineHeight: '1.7', fontWeight: 'bold'}}>
              Our research institute publishes high-quality academic papers and research studies. 
              Visit our publications platform to explore our extensive collection of peer-reviewed research across various domains.
            </p>
            <div style={{marginBottom: '30px'}}>
              <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}}>Featured Research Areas:</h3>
              <ul style={{color: 'white', lineHeight: '1.8', fontWeight: 'bold'}}>
                <li>• Psychology & Mental Health Studies</li>
                <li>• Educational Research & Policy</li>
                <li>• Social Sciences & Behavioral Analysis</li>
                <li>• Healthcare & Medical Research</li>
                <li>• Technology & Innovation Studies</li>
                <li>• Environmental & Sustainability Research</li>
              </ul>
            </div>
            <a 
              href="https://www.didee-publications.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{fontSize: '18px', padding: '16px 32px'}}
            >
              Explore Our Publications →
            </a>
          </div>
          <div style={{height: '400px', backgroundColor: '#f3f4f6', borderRadius: '16px', backgroundImage: 'url(/images/research-team.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>
      </section>

      {/* Recent Publications */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 40px', borderRadius: '20px'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: '#1f2937'}}>Recent Published Research</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
          
          <div className="card" style={{borderLeft: '4px solid #059669'}}>
            <div style={{marginBottom: '16px'}}>
              <span style={{backgroundColor: '#d1fae5', color: '#78350f', fontSize: '12px', padding: '4px 12px', borderRadius: '20px', fontWeight: '600'}}>Psychology</span>
            </div>
            <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1f2937'}}>
              Philosophy and Ethics in Modern Society: A Contemporary Analysis
            </h3>
            <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '16px'}}>
              An in-depth exploration of philosophical and ethical frameworks in contemporary society, 
              examining their relevance and application in modern psychological practice.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{color: '#6b7280', fontSize: '12px'}}>Dr. Daniel Offor</span>
              <a 
                href="https://www.didee-publications.com/articles/philosophy-ethics-modern-society" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: '#78350f', fontSize: '14px', fontWeight: '600', textDecoration: 'none'}}
              >
                Read Article →
              </a>
            </div>
          </div>

          <div className="card" style={{borderLeft: '4px solid #1e40af'}}>
            <div style={{marginBottom: '16px'}}>
              <span style={{backgroundColor: '#dbeafe', color: '#1e3a8a', fontSize: '12px', padding: '4px 12px', borderRadius: '20px', fontWeight: '600'}}>Mental Health</span>
            </div>
            <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1f2937'}}>
              Psychosocial Factors Influencing Mental Health Outcomes
            </h3>
            <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '16px'}}>
              Research examining the complex interplay between psychosocial factors and mental health outcomes, 
              providing insights for therapeutic interventions.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{color: '#6b7280', fontSize: '12px'}}>Dr. Daniel Offor</span>
              <a 
                href="https://www.didee-publications.com/articles/psychosocial-factors-mental-health" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: '#1e40af', fontSize: '14px', fontWeight: '600', textDecoration: 'none'}}
              >
                Read Article →
              </a>
            </div>
          </div>

          <div className="card" style={{borderLeft: '4px solid #7c3aed'}}>
            <div style={{marginBottom: '16px'}}>
              <span style={{backgroundColor: '#f3e8ff', color: '#581c87', fontSize: '12px', padding: '4px 12px', borderRadius: '20px', fontWeight: '600'}}>Social Research</span>
            </div>
            <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1f2937'}}>
              Media Influence on Adolescent Sexuality: A Psychological Perspective
            </h3>
            <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '16px'}}>
              Analysis of media's impact on adolescent sexual development and behavior, 
              offering evidence-based recommendations for parents and educators.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{color: '#6b7280', fontSize: '12px'}}>Dr. Daniel Offor</span>
              <a 
                href="https://www.didee-publications.com/articles/media-influence-adolescent-sexuality" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: '#7c3aed', fontSize: '14px', fontWeight: '600', textDecoration: 'none'}}
              >
                Read Article →
              </a>
            </div>
          </div>

          <div className="card" style={{borderLeft: '4px solid #dc2626'}}>
            <div style={{marginBottom: '16px'}}>
              <span style={{backgroundColor: '#fef2f2', color: '#991b1b', fontSize: '12px', padding: '4px 12px', borderRadius: '20px', fontWeight: '600'}}>Religious Studies</span>
            </div>
            <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1f2937'}}>
              Exorcism in the Catholic Church: The Legacy of Gabriele Amorth
            </h3>
            <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '16px'}}>
              A scholarly examination of exorcism practices within the Catholic Church, 
              exploring the intersection of spiritual and psychological approaches to healing.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{color: '#6b7280', fontSize: '12px'}}>Dr. Daniel Offor</span>
              <a 
                href="https://www.didee-publications.com/articles/exorcism-catholic-church-gabriele-amorth" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: '#dc2626', fontSize: '14px', fontWeight: '600', textDecoration: 'none'}}
              >
                Read Article →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: 'white'}}>Our Research Expertise</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
          
          <div className="card" style={{textAlign: 'center', borderTop: '4px solid #1e40af'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#1e40af'}}>Psychology & Mental Health</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Clinical psychology, behavioral analysis, therapeutic interventions, and mental health assessments.
            </p>
            <div style={{fontSize: '14px', color: '#6b7280'}}>
              <strong>15+ Published Papers</strong>
            </div>
          </div>

          <div className="card" style={{textAlign: 'center', borderTop: '4px solid #16a34a'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#16a34a'}}>Educational Research</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Curriculum development, educational management, pedagogy, and learning outcome assessments.
            </p>
            <div style={{fontSize: '14px', color: '#6b7280'}}>
              <strong>12+ Research Projects</strong>
            </div>
          </div>

          <div className="card" style={{textAlign: 'center', borderTop: '4px solid #d97706'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#d97706'}}>Business & Economics</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Market analysis, economic research, business strategy, and financial impact studies.
            </p>
            <div style={{fontSize: '14px', color: '#6b7280'}}>
              <strong>10+ Market Studies</strong>
            </div>
          </div>

          <div className="card" style={{textAlign: 'center', borderTop: '4px solid #7c3aed'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#7c3aed'}}>Social Sciences</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Behavioral studies, social policy analysis, demographic research, and community studies.
            </p>
            <div style={{fontSize: '14px', color: '#6b7280'}}>
              <strong>8+ Social Studies</strong>
            </div>
          </div>

          <div className="card" style={{textAlign: 'center', borderTop: '4px solid #dc2626'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#dc2626'}}>Healthcare Research</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              Medical research, clinical studies, healthcare policy, and public health assessments.
            </p>
            <div style={{fontSize: '14px', color: '#6b7280'}}>
              <strong>6+ Clinical Studies</strong>
            </div>
          </div>

          <div className="card" style={{textAlign: 'center', borderTop: '4px solid #059669'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#78350f'}}>Technology & Innovation</h3>
            <p style={{color: '#6b7280', marginBottom: '20px', lineHeight: '1.6'}}>
              IT research, digital transformation, innovation studies, and technology impact analysis.
            </p>
            <div style={{fontSize: '14px', color: '#6b7280'}}>
              <strong>5+ Tech Studies</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section style={{backgroundColor: '#78350f', padding: '60px 40px', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px'}}>Client Success Stories</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          
          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <div style={{marginBottom: '20px'}}>
              <div style={{display: 'flex', gap: '4px', marginBottom: '12px'}}>
                {[1,2,3,4,5].map(star => (
                  <svg key={star} style={{width: '20px', height: '20px', color: '#fbbf24'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{fontStyle: 'italic', marginBottom: '16px', opacity: '0.9'}}>
                "Exceptional research quality and professional service. The team delivered comprehensive market analysis that helped us make critical business decisions."
              </p>
              <div>
                <p style={{fontWeight: '600'}}>Sarah Johnson</p>
                <p style={{fontSize: '14px', opacity: '0.7'}}>CEO, TechStart Solutions</p>
              </div>
            </div>
          </div>

          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <div style={{marginBottom: '20px'}}>
              <div style={{display: 'flex', gap: '4px', marginBottom: '12px'}}>
                {[1,2,3,4,5].map(star => (
                  <svg key={star} style={{width: '20px', height: '20px', color: '#fbbf24'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{fontStyle: 'italic', marginBottom: '16px', opacity: '0.9'}}>
                "Outstanding thesis support! The research team helped me complete my PhD dissertation with high-quality analysis and writing."
              </p>
              <div>
                <p style={{fontWeight: '600'}}>Dr. Michael Chen</p>
                <p style={{fontSize: '14px', opacity: '0.7'}}>PhD Graduate, University of Oxford</p>
              </div>
            </div>
          </div>

          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <div style={{marginBottom: '20px'}}>
              <div style={{display: 'flex', gap: '4px', marginBottom: '12px'}}>
                {[1,2,3,4,5].map(star => (
                  <svg key={star} style={{width: '20px', height: '20px', color: '#fbbf24'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{fontStyle: 'italic', marginBottom: '16px', opacity: '0.9'}}>
                "Professional, timely, and thorough. Their policy research provided valuable insights for our government initiative."
              </p>
              <div>
                <p style={{fontWeight: '600'}}>Emma Rodriguez</p>
                <p style={{fontSize: '14px', opacity: '0.7'}}>Policy Director, Health Ministry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px'}}>Ready to Add Your Project to Our Portfolio?</h2>
        <p style={{fontSize: '18px', marginBottom: '32px', opacity: '0.9', maxWidth: '600px', margin: '0 auto 32px'}}>
          Join our satisfied clients and let us help you achieve your research goals with professional, high-quality research services.
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/contact" style={{backgroundColor: 'white', color: '#78350f', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px'}}>
            Start Your Project
          </a>
          <a 
            href="https://www.didee-publications.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{border: '2px solid white', color: 'white', padding: '14px 30px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px'}}
          >
            View All Publications
          </a>
        </div>
      </section>
    </div>
  );
}