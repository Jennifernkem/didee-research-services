export default function About() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
      {/* Header */}
      <section style={{textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>About Didee Research Services</h1>
        <p style={{fontSize: '20px', opacity: '0.9', maxWidth: '800px', margin: '0 auto'}}>
          Empowering researchers, students, and organizations with professional research solutions since our founding.
        </p>
      </section>

      {/* Mission & Vision */}
      <section>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
          <div className="card" style={{padding: '30px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#78350f', borderBottom: '3px solid #78350f', paddingBottom: '10px'}}>Our Mission</h2>
            <p style={{color: '#1f2937', lineHeight: '1.8', fontSize: '16px', marginBottom: '30px'}}>
              To provide high-quality, evidence-based research services that empower individuals and organizations to make informed decisions. We are committed to academic excellence, integrity, and delivering research solutions that create lasting impact across multiple domains.
            </p>
            <h2 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#78350f', borderBottom: '3px solid #78350f', paddingBottom: '10px'}}>Our Vision</h2>
            <p style={{color: '#1f2937', lineHeight: '1.8', fontSize: '16px'}}>
              To be a leading research services provider recognized globally for excellence, innovation, and commitment to advancing knowledge. We envision a world where quality research is accessible to all who seek to contribute to their fields.
            </p>
          </div>
          <div style={{height: '400px', backgroundColor: '#f3f4f6', borderRadius: '16px', backgroundImage: 'url(/images/mission.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{backgroundColor: '#f8fafc', padding: '30px 20px', borderRadius: '20px'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#78350f'}}>Our Leadership</h2>
        <div style={{maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px'}}>
          <div className="card" style={{padding: '30px', borderLeft: '4px solid #78350f'}}>
            <div style={{display: 'flex', gap: '30px', alignItems: 'start', flexWrap: 'wrap'}}>
              <div style={{width: '100px', height: '100px', backgroundColor: '#78350f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: 'bold', flexShrink: 0}}>
                DO
              </div>
              <div style={{flex: 1}}>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#1f2937'}}>Daniel Ojotule Offor</h3>
                <p style={{fontSize: '16px', color: '#78350f', fontWeight: '600', marginBottom: '16px'}}>Founder & Chief Executive Officer</p>
                <p style={{color: '#1f2937', lineHeight: '1.8'}}>
                  Daniel Offor is a distinguished clinical psychologist and researcher with extensive expertise in psychological assessments, evidence-based interventions, and holistic care. His leadership ensures that Didee Research Services maintains the highest standards of academic excellence while providing personalized, client-focused solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card" style={{padding: '30px', borderLeft: '4px solid #92400e'}}>
            <div style={{display: 'flex', gap: '30px', alignItems: 'start', flexWrap: 'wrap'}}>
              <div style={{width: '100px', height: '100px', backgroundColor: '#92400e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: 'bold', flexShrink: 0}}>
                JI
              </div>
              <div style={{flex: 1}}>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#1f2937'}}>Jennifer Ijeoma</h3>
                <p style={{fontSize: '16px', color: '#92400e', fontWeight: '600', marginBottom: '16px'}}>Chief Technology Officer</p>
                <p style={{color: '#1f2937', lineHeight: '1.8'}}>
                  Jennifer brings 5 years of expertise in digital transformation, driving technological innovation and ensuring seamless integration of advanced research tools and platforms to enhance service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: 'white'}}>Our Core Values</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
          <div style={{height: '400px', backgroundColor: '#f3f4f6', borderRadius: '16px', backgroundImage: 'url(/images/corevalue.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          <div className="card" style={{padding: '40px'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
              <div style={{padding: '16px 24px', backgroundColor: '#dbeafe', borderRadius: '12px', fontWeight: '700', color: '#1e40af', fontSize: '18px'}}>Excellence</div>
              <div style={{padding: '16px 24px', backgroundColor: '#fef3c7', borderRadius: '12px', fontWeight: '700', color: '#78350f', fontSize: '18px'}}>Integrity</div>
              <div style={{padding: '16px 24px', backgroundColor: '#dcfce7', borderRadius: '12px', fontWeight: '700', color: '#16a34a', fontSize: '18px'}}>Innovation</div>
              <div style={{padding: '16px 24px', backgroundColor: '#e0e7ff', borderRadius: '12px', fontWeight: '700', color: '#4f46e5', fontSize: '18px'}}>Timeliness</div>
              <div style={{padding: '16px 24px', backgroundColor: '#fce7f3', borderRadius: '12px', fontWeight: '700', color: '#be185d', fontSize: '18px'}}>Collaboration</div>
              <div style={{padding: '16px 24px', backgroundColor: '#fef2f2', borderRadius: '12px', fontWeight: '700', color: '#dc2626', fontSize: '18px'}}>Global Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section style={{backgroundColor: '#78350f', padding: '40px 30px', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px'}}>What Sets Us Apart</h2>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <div style={{display: 'flex', gap: '20px', alignItems: 'start'}}>
              <div style={{width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px', fontWeight: 'bold'}}>1</div>
              <div>
                <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>Expert Multidisciplinary Team</h3>
                <p style={{opacity: '0.9', lineHeight: '1.7'}}>
                  Our team includes PhD holders, professors, and specialists across 15+ research domains, ensuring expertise in your specific field.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', gap: '20px', alignItems: 'start'}}>
              <div style={{width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px', fontWeight: 'bold'}}>2</div>
              <div>
                <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>Personalized Approach</h3>
                <p style={{opacity: '0.9', lineHeight: '1.7'}}>
                  Every project receives individual attention with customized research strategies tailored to your specific needs and objectives.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', gap: '20px', alignItems: 'start'}}>
              <div style={{width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px', fontWeight: 'bold'}}>3</div>
              <div>
                <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>Proven Track Record</h3>
                <p style={{opacity: '0.9', lineHeight: '1.7'}}>
                  With 100+ successfully completed projects, we have demonstrated excellence across academic, corporate, and policy research.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', gap: '20px', alignItems: 'start'}}>
              <div style={{width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px', fontWeight: 'bold'}}>4</div>
              <div>
                <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>Comprehensive Support</h3>
                <p style={{opacity: '0.9', lineHeight: '1.7'}}>
                  From initial consultation to post-delivery support, we provide guidance and assistance throughout your research journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{textAlign: 'center', padding: '40px 30px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px'}}>Ready to Work With Us?</h2>
        <p style={{fontSize: '18px', marginBottom: '32px', opacity: '0.9', maxWidth: '600px', margin: '0 auto 32px'}}>
          Join hundreds of satisfied clients who have achieved their research goals with our professional services.
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/contact" style={{backgroundColor: 'white', color: '#78350f', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px'}}>
            Get Your Quote
          </a>
          <a href="/team" style={{border: '2px solid white', color: 'white', padding: '14px 30px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px'}}>
            Meet Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
