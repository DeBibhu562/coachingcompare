import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Icons } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About Platform */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Logo variant="light" size="md" />
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#94a3b8', marginBottom: '20px' }}>
              CoachingCompare.in is India’s independent, merit-driven evaluation directory for competitive coaching institutes. We audit centres on faculty credentials, verified track records, test series depth, and student feedback using our rigorous 100-Point Inspection System.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '12px', color: '#cbd5e1' }}>
              <Icons.ShieldCheck size={16} color="#fbbf24" />
              <span>100% Unbiased & Zero Paid Placements</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/exams" className="footer-link">Exams Directory</Link></li>
              <li><Link href="/methodology" className="footer-link">100-Point Inspection</Link></li>
              <li><Link href="/compare" className="footer-link">Compare Tool</Link></li>
              <li><Link href="/fees-calculator" className="footer-link">Fees Calculator</Link></li>
              <li><Link href="/write-review" className="footer-link">Write a Review</Link></li>
              <li><Link href="/for-institutes" className="footer-link">For Institutes</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/contact" className="footer-link">Contact & Audit</Link></li>
            </ul>
          </div>

          {/* Col 3: Free Resources */}
          <div>
            <h4 className="footer-col-title">Study Resources</h4>
            <ul className="footer-links">
              <li><Link href="/previous-year-papers" className="footer-link">Previous Year Papers</Link></li>
              <li><Link href="/study-materials" className="footer-link">Free Study Materials</Link></li>
              <li><Link href="/blog" className="footer-link">Preparation Blog</Link></li>
              <li><Link href="/verified-faculty" className="footer-link">Faculty Standards</Link></li>
              <li><Link href="/coaching-in-delhi" className="footer-link">Delhi State Hub</Link></li>
              <li><Link href="/coaching-in-maharashtra" className="footer-link">Maharashtra Hub</Link></li>
              <li><Link href="/coaching-in-rajasthan" className="footer-link">Rajasthan Hub</Link></li>
              <li><Link href="/coaching-in-karnataka" className="footer-link">Karnataka Hub</Link></li>
              <li><Link href="/coaching-in-uttar-pradesh" className="footer-link">Uttar Pradesh Hub</Link></li>
            </ul>
          </div>

          {/* Col 4: Top Exam Categories */}
          <div>
            <h4 className="footer-col-title">Exam Categories</h4>
            <ul className="footer-links">
              <li><Link href="/best-clat-coaching-in-delhi" className="footer-link">CLAT (Law Entrance)</Link></li>
              <li><Link href="/best-jee-coaching-in-delhi" className="footer-link">JEE Main & Advanced</Link></li>
              <li><Link href="/best-neet-coaching-in-delhi" className="footer-link">NEET Medical</Link></li>
              <li><Link href="/best-upsc-coaching-in-delhi" className="footer-link">UPSC Civil Services</Link></li>
              <li><Link href="/best-cat-coaching-in-delhi" className="footer-link">CAT Management</Link></li>
              <li><Link href="/best-ssc-coaching-in-delhi" className="footer-link">SSC CGL / CHSL</Link></li>
              <li><Link href="/best-banking-coaching-in-delhi" className="footer-link">Banking PO & Clerk</Link></li>
              <li><Link href="/best-gate-coaching-in-delhi" className="footer-link">GATE Engineering</Link></li>
            </ul>
          </div>

          {/* Col 5: Popular City-Exam Tree Links */}
          <div>
            <h4 className="footer-col-title">Featured Rankings</h4>
            <ul className="footer-links">
              <li><Link href="/best-jee-coaching-in-kota" className="footer-link">JEE in Kota</Link></li>
              <li><Link href="/best-upsc-coaching-in-delhi" className="footer-link">UPSC in Delhi</Link></li>
              <li><Link href="/best-neet-coaching-in-hyderabad" className="footer-link">NEET in Hyderabad</Link></li>
              <li><Link href="/best-cat-coaching-in-mumbai" className="footer-link">CAT in Mumbai</Link></li>
              <li><Link href="/best-clat-coaching-in-bangalore" className="footer-link">CLAT in Bengaluru</Link></li>
              <li><Link href="/best-clat-coaching-in-delhi" className="footer-link">CLAT in Delhi</Link></li>
              <li><Link href="/best-jee-coaching-in-delhi" className="footer-link">JEE in Delhi</Link></li>
              <li><Link href="/sitemap" className="footer-link">Directory Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Independent Platform Legal Disclaimer */}
        <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '11.5px', color: '#64748b', lineHeight: '1.6' }}>
          <strong>Legal & Editorial Disclaimer:</strong> CoachingCompare.in is an independent, non-sponsored educational evaluation directory. All institute trademarks, brand marks, and acronyms (e.g. UPSC, CLAT, JEE, NEET, CAT, GATE) are the intellectual property of their respective examining bodies or institutions and are referenced strictly for identification and comparative editorial analysis under fair use. Scores are awarded solely via our proprietary 100-Point Inspection audit.
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom" style={{ marginTop: '16px' }}>
          <p>© 2026 CoachingCompare.in. All rights reserved.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
            <Link href="/disclaimer" className="footer-link">Editorial Policy</Link>
            <Link href="/sitemap.xml" className="footer-link">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
