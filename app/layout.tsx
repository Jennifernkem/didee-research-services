import React from "react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Didee Research Services — Professional Research Solutions",
  description:
    "Custom research services, academic writing, thesis support, and data analysis for organizations and individuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}>
        <div className="content-wrapper">
          <header style={{padding: '20px 24px', borderBottom: '1px solid rgba(59, 130, 246, 0.1)', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)'}}>
            <nav style={{display: 'flex', gap: '48px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
              <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
                <img src="/images/Black Elegant Modern Name Initials Monogram Logo.png" alt="Didee Research Services" style={{width: '40px', height: '40px'}} />
                <div>
                  <div style={{fontSize: '20px', fontWeight: 'bold', color: '#1f2937', lineHeight: '1.2', fontFamily: 'Georgia, Times New Roman, serif'}}>Didee Research Services</div>
                  <div style={{fontSize: '12px', lineHeight: '1.2', fontFamily: 'Georgia, Times New Roman, serif'}}>Professional Research</div>
                </div>
              </Link>
              <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
                <Link href="/" style={{textDecoration: 'none', color: '#374151', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Home</Link>
                <Link href="/about" style={{textDecoration: 'none', color: '#374151', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>About</Link>
                <Link href="/services" style={{textDecoration: 'none', color: '#374151', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Services</Link>
                <Link href="/team" style={{textDecoration: 'none', color: '#374151', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Team</Link>
                <Link href="/process" style={{textDecoration: 'none', color: '#374151', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Process</Link>
                <Link href="/portfolio" style={{textDecoration: 'none', color: '#374151', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Portfolio</Link>
                <Link href="/contact" style={{textDecoration: 'none', color: '#374151', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Get Quote</Link>
              </div>
            </nav>
          </header>

          <main style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 24px'}}>{children}</main>
          
          <footer style={{backgroundColor: '#1f2937', color: 'white', padding: '40px 24px', marginTop: '80px'}}>
            <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
              <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px'}}>Didee Research Services</h3>
              <p style={{marginBottom: '16px', opacity: '0.8'}}>Professional research solutions for organizations and individuals</p>
              <p style={{fontSize: '14px', opacity: '0.6'}}>© 2024 Didee Research Services. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}