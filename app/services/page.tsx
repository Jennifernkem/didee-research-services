import Link from 'next/link';

export default function Services() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
      {/* Header */}
      <section style={{textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>Our Research Services</h1>
        <p style={{fontSize: '20px', opacity: '0.9', maxWidth: '800px', margin: '0 auto'}}>
          Comprehensive research solutions tailored to your specific needs. From academic support to corporate research, we deliver excellence.
        </p>
      </section>

      {/* Custom Research Projects */}
      <section>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px'}}>
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: 'white'}}>Custom Research Projects</h2>
            <p style={{fontSize: '18px', color: 'white', marginBottom: '30px', lineHeight: '1.7'}}>
              Organizations and businesses trust us to conduct comprehensive research studies that drive informed decision-making. 
              Our team delivers evidence-based insights across multiple domains.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px'}}>
              <div className="card" style={{padding: '20px'}}>
                <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1e40af'}}>Market Research</h3>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Industry analysis, competitor research, consumer behavior studies</p>
              </div>
              <div className="card" style={{padding: '20px'}}>
                <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1e40af'}}>Policy Analysis</h3>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Government policy research, impact assessments, regulatory analysis</p>
              </div>
              <div className="card" style={{padding: '20px'}}>
                <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1e40af'}}>Academic Research</h3>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Literature reviews, systematic reviews, meta-analyses</p>
              </div>
              <div className="card" style={{padding: '20px'}}>
                <h3 style={{fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1e40af'}}>Social Research</h3>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Community studies, demographic analysis, social impact research</p>
              </div>
            </div>
          </div>
          <div style={{height: '400px', backgroundColor: '#f3f4f6', borderRadius: '16px', backgroundImage: 'url(/images/custom-research.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>
      </section>

      {/* Academic Writing Support */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 40px', borderRadius: '20px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
          <div style={{height: '400px', backgroundColor: '#f3f4f6', borderRadius: '16px', backgroundImage: 'url(/images/academic%20writing.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#78350f'}}>Academic Writing & Thesis Support</h2>
            <p style={{fontSize: '18px', color: '#6b7280', marginBottom: '30px', lineHeight: '1.7'}}>
              Supporting students and researchers at every stage of their academic journey. From proposal development to final dissertation, 
              we ensure academic excellence and adherence to institutional standards.
            </p>
            
            <div style={{marginBottom: '30px'}}>
              <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#1f2937'}}>What We Offer:</h3>
              <ul style={{color: '#6b7280', lineHeight: '1.8'}}>
                <li>• <strong>Thesis & Dissertation Writing:</strong> Complete chapters or full dissertations</li>
                <li>• <strong>Research Proposals:</strong> Compelling proposals that get approved</li>
                <li>• <strong>Literature Reviews:</strong> Comprehensive and systematic reviews</li>
                <li>• <strong>Data Analysis Support:</strong> Statistical analysis and interpretation</li>
                <li>• <strong>Journal Articles:</strong> Publication-ready manuscripts</li>
                <li>• <strong>Grant Writing:</strong> Funding proposals and applications</li>
              </ul>
            </div>

            <div style={{display: 'flex', gap: '16px'}}>
              <Link href="/contact" className="btn-primary">Get Academic Support</Link>
              <Link href="/portfolio" className="btn-secondary">View Sample Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Services */}
      <section>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: 'white'}}>Data Analysis & Statistical Services</h2>
            <p style={{fontSize: '18px', color: 'white', marginBottom: '30px', lineHeight: '1.7'}}>
              Transform your raw data into meaningful insights. Our statistical experts use advanced analytical methods 
              to uncover patterns, trends, and actionable recommendations.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '30px'}}>
              <div style={{padding: '20px', backgroundColor: '#fef3c7', borderRadius: '12px', borderLeft: '4px solid #d97706'}}>
                <h4 style={{fontWeight: '700', marginBottom: '8px', color: '#92400e'}}>Quantitative Analysis</h4>
                <p style={{color: '#6b7280', fontSize: '14px'}}>SPSS, R, Python statistical modeling, regression analysis, hypothesis testing</p>
              </div>
              <div style={{padding: '20px', backgroundColor: '#fef3c7', borderRadius: '12px', borderLeft: '4px solid #d97706'}}>
                <h4 style={{fontWeight: '700', marginBottom: '8px', color: '#92400e'}}>Qualitative Analysis</h4>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Thematic analysis, content analysis, interview transcription and coding</p>
              </div>
              <div style={{padding: '20px', backgroundColor: '#fef3c7', borderRadius: '12px', borderLeft: '4px solid #d97706'}}>
                <h4 style={{fontWeight: '700', marginBottom: '8px', color: '#92400e'}}>Data Visualization</h4>
                <p style={{color: '#6b7280', fontSize: '14px'}}>Interactive dashboards, charts, graphs, and infographics</p>
              </div>
            </div>
          </div>
          <div style={{height: '400px', backgroundColor: '#f3f4f6', borderRadius: '16px', backgroundImage: 'url(/images/data-analysis.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>
      </section>

      {/* Specialized Services */}
      <section style={{backgroundColor: '#78350f', padding: '60px 40px', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px'}}>Specialized Research Domains</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
          
          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#60a5fa'}}>Psychology & Mental Health</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>
              Clinical psychology research, mental health assessments, therapeutic intervention studies, and behavioral analysis.
            </p>
          </div>

          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#34d399'}}>Healthcare & Medicine</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>
              Medical research, clinical trials support, healthcare policy analysis, and epidemiological studies.
            </p>
          </div>

          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#fbbf24'}}>Business & Economics</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>
              Market analysis, financial research, economic impact studies, and business strategy research.
            </p>
          </div>

          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#f87171'}}>Education & Social Sciences</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>
              Educational research, curriculum development, social policy analysis, and community studies.
            </p>
          </div>

          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#a78bfa'}}>Technology & Innovation</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>
              Tech industry analysis, innovation studies, digital transformation research, and emerging technology trends.
            </p>
          </div>

          <div style={{padding: '30px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#fb7185'}}>Environmental Studies</h3>
            <p style={{opacity: '0.9', lineHeight: '1.6'}}>
              Environmental impact assessments, sustainability research, climate change studies, and conservation analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Approach */}
      <section style={{textAlign: 'center', padding: '60px 40px', backgroundColor: '#f0f9ff', borderRadius: '20px'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#1e40af'}}>Custom Pricing for Every Project</h2>
        <p style={{fontSize: '18px', color: '#6b7280', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px'}}>
          Every research project is unique. We provide detailed quotes based on scope, complexity, timeline, and specific requirements. 
          No hidden fees, just transparent pricing tailored to your needs.
        </p>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px'}}>
          <div style={{padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(30, 64, 175, 0.1)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#1e40af'}}>Factors We Consider</h3>
            <ul style={{textAlign: 'left', color: '#6b7280', lineHeight: '1.8'}}>
              <li>• Research scope & depth</li>
              <li>• Number of pages/words</li>
              <li>• Timeline requirements</li>
              <li>• Data collection needs</li>
              <li>• Analysis complexity</li>
            </ul>
          </div>
          
          <div style={{padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(30, 64, 175, 0.1)'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#1e40af'}}>What You Get</h3>
            <ul style={{textAlign: 'left', color: '#6b7280', lineHeight: '1.8'}}>
              <li>• Detailed project proposal</li>
              <li>• Clear timeline & milestones</li>
              <li>• Transparent pricing</li>
              <li>• Regular progress updates</li>
              <li>• Quality guarantee</li>
            </ul>
          </div>
        </div>

        <Link href="/contact" className="btn-primary" style={{fontSize: '18px', padding: '16px 32px'}}>
          Get Your Custom Quote
        </Link>
      </section>
    </div>
  );
}