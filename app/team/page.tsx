export default function Team() {
  const seniorResearchers = [
    { name: "Prof. Ayodele Adeyinka Atowoju", title: "Professor", specialty: "New Testament, African Biblical Hermeneutics" },
    { name: "Dr. Okeke Emeka Paul", title: "Dr.", specialty: "Educational Management" },
    { name: "Dr. Samuel Ochinyabo", title: "Dr.", specialty: "Economics and Business" },
    { name: "Dr. Clementina Okeke", title: "Dr.", specialty: "Law" },
    { name: "Dr. Ifeyinwa Justina Ejike", title: "Dr.", specialty: "Business Management, Entrepreneurship" },
    { name: "Dr. Emmanuel Omopo", title: "Dr.", specialty: "Clinical Psychology / Counselling" },
    { name: "Dr. Kizito Alakwe", title: "Dr.", specialty: "Media and Communication" },
    { name: "Dr. Fehintola Ige", title: "Dr.", specialty: "Geneticist" },
    { name: "Dr. Okhihan Ivie Blessing", title: "Dr.", specialty: "Researcher" },
    { name: "Dr. Ilenloh Collins Osemenkhian", title: "Dr.", specialty: "Researcher" },
    { name: "Dr. Akhaine Jesu-Oboh Precious", title: "Dr.", specialty: "Data Analysis (SPSS), Systematic Reviews, Epidemiological Study Designs" },
    { name: "Dr. Isioma Sylvia Anukwu", title: "Dr.", specialty: "Machine Learning, Artificial Intelligence, Biomedical Engineering, Information Technology" }
  ];

  const researchFellows = [
    { name: "Chinedu Thaddeus Ayogu", specialty: "Social Sciences" },
    { name: "Hongjing Lin", specialty: "Clinical Psychology" },
    { name: "Moses Onubi", specialty: "Agriculture (Stress Physiology, Agro Climatology, Sustainable Agriculture)" },
    { name: "Berna Simsek", specialty: "Clinical Research" },
    { name: "Obiageli Nwachukwu", specialty: "Medicine and Pharmacy" },
    { name: "Mr. Emeka Jude Onyetube", specialty: "Political Science (International Relations)" },
    { name: "Joseph Adebanjo-Paul", specialty: "Philosophy" },
    { name: "Udo Umakiso Sebastian", specialty: "Philosophy of Psychology" },
    { name: "Nura Lawal Tafida", specialty: "Islamic Scholar" },
    { name: "Adjamah Mary", specialty: "Petroleum Engineering" },
    { name: "Vivian Chinenyenwa Eze", specialty: "Web Development, Graphic Design" },
    { name: "Busolala Modupe", specialty: "Spanish" },
    { name: "Mr. Michael Adikpe Omenor", specialty: "Computer Science & Cryptocurrency" },
    { name: "Mr. Peter Onubi", specialty: "Microbiology" },
    { name: "Mr. Chima Anthony Ukachukwu", specialty: "Cybersecurity" },
    { name: "Abel Friday Ugwu", specialty: "Educational Psychology" },
    { name: "Idu Michael Onoja", specialty: "Mechanical Engineering, Physics, Mathematics" },
    { name: "Saanmoiyol Marvin Manasseh", specialty: "Mathematics" }
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
      {/* Header */}
      <section style={{textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>Our Research Team</h1>
        <p style={{fontSize: '20px', opacity: '0.9', maxWidth: '800px', margin: '0 auto'}}>
          Meet our diverse team of expert researchers, professors, and specialists committed to delivering high-quality research across multiple domains.
        </p>
      </section>

      {/* Senior Researchers & Professors */}
      <section>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: 'white'}}>Senior Researchers & Professors</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
          {seniorResearchers.map((member, index) => (
            <div key={index} className="card" style={{borderLeft: '4px solid #78350f', padding: '20px', backgroundColor: '#fef3c7'}}>
              <h3 style={{fontSize: '18px', fontWeight: '700', color: '#78350f', marginBottom: '8px'}}>{member.name}</h3>
              <p style={{color: '#6b7280', lineHeight: '1.6', fontSize: '14px'}}>
                <strong>Specialization:</strong> {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Fellows & Specialists */}
      <section style={{backgroundColor: '#f8fafc', padding: '60px 40px', borderRadius: '20px'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: '#78350f'}}>Research Fellows & Specialists</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px'}}>
          {researchFellows.map((member, index) => (
            <div key={index} className="card" style={{padding: '24px'}}>
              <h3 style={{fontSize: '18px', fontWeight: '700', color: '#1f2937', marginBottom: '12px'}}>{member.name}</h3>
              <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.6'}}>
                <strong>Specialization:</strong> {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Stats */}
      <section style={{backgroundColor: '#78350f', padding: '60px 40px', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px'}}>Our Team Strength</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center'}}>
          <div>
            <div style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '12px'}}>30+</div>
            <p style={{fontSize: '18px', opacity: '0.9'}}>Expert Researchers</p>
          </div>
          <div>
            <div style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '12px'}}>12</div>
            <p style={{fontSize: '18px', opacity: '0.9'}}>PhD Holders</p>
          </div>
          <div>
            <div style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '12px'}}>15+</div>
            <p style={{fontSize: '18px', opacity: '0.9'}}>Research Domains</p>
          </div>
          <div>
            <div style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '12px'}}>100+</div>
            <p style={{fontSize: '18px', opacity: '0.9'}}>Projects Completed</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', borderRadius: '20px', color: 'white'}}>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '24px'}}>Work With Our Expert Team</h2>
        <p style={{fontSize: '18px', marginBottom: '32px', opacity: '0.9', maxWidth: '600px', margin: '0 auto 32px'}}>
          Get matched with the right expert for your research project. Our diverse team ensures quality across all domains.
        </p>
        <a href="/contact" style={{backgroundColor: 'white', color: '#78350f', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '18px'}}>
          Start Your Project
        </a>
      </section>
    </div>
  );
}
