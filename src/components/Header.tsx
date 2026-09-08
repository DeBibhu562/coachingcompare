'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Icons } from './Icons';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setResourcesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation (Only visible on screens >= 1024px) */}
        <nav className="nav-links" aria-label="Main Navigation">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/exams" className="nav-link">
            Exams
          </Link>

          {/* Resources Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="nav-link"
              onClick={() => setResourcesOpen(!resourcesOpen)}
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
            >
              <span>Resources</span>
              <Icons.ChevronDown
                size={14}
                className="dropdown-chevron"
                style={{
                  transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </button>

            {resourcesOpen && (
              <div className="nav-dropdown-menu" role="menu" style={{ width: '310px' }}>
                <Link
                  href="/previous-year-papers"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.GraduationCap size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">Previous Year Papers</div>
                    <div className="dropdown-item-desc">Solved question papers & answer keys</div>
                  </div>
                </Link>

                <Link
                  href="/study-materials"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.Trophy size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">Free Study Materials</div>
                    <div className="dropdown-item-desc">High-yield formula books & digests</div>
                  </div>
                </Link>

                <Link
                  href="/blog"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.Globe size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">Preparation Blog</div>
                    <div className="dropdown-item-desc">Topper strategies & study plans</div>
                  </div>
                </Link>

                <Link
                  href="/verified-faculty"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.Users size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">Verified Faculty Standards</div>
                    <div className="dropdown-item-desc">Educator credentials & tenure checks</div>
                  </div>
                </Link>

                <Link
                  href="/methodology"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.ShieldCheck size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">100-Point Audit System</div>
                    <div className="dropdown-item-desc">Our independent inspection scoring</div>
                  </div>
                </Link>

                <Link
                  href="/fees-calculator"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.Calculator size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">Fees & Expense Calculator</div>
                    <div className="dropdown-item-desc">Tuition, PG, hostel & living estimates</div>
                  </div>
                </Link>

                <Link
                  href="/write-review"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.FileEdit size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">Submit a Student Review</div>
                    <div className="dropdown-item-desc">Rate your coaching on 4 dimensions</div>
                  </div>
                </Link>

                <Link
                  href="/for-institutes"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                >
                  <span className="dropdown-item-icon">
                    <Icons.Building size={16} color="var(--brand-primary)" />
                  </span>
                  <div>
                    <div className="dropdown-item-title">For Coaching Institutes</div>
                    <div className="dropdown-item-desc">Request free 100-point audit & listing</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/methodology" className="nav-link">
            Methodology
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Right Action Area - Clean & Non-Overflowing */}
        <div className="header-actions">
          <Link href="/#matrix-finder" className="btn btn-primary btn-sm header-cta">
            <Icons.Scales size={15} />
            <span>Compare Centres</span>
          </Link>

          {/* Mobile Hamburger Button (Strictly HIDDEN on desktop >= 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-inner">
            <div className="mobile-nav-group">
              <span className="mobile-group-title">Menu</span>
              <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/exams" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Exams Directory
              </Link>
              <Link href="/methodology" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                100-Point Inspection System
              </Link>
              <Link href="/compare" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Direct Compare Tool
              </Link>
              <Link href="/fees-calculator" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Fees & Living Calculator
              </Link>
              <Link href="/write-review" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Submit Student Review
              </Link>
              <Link href="/for-institutes" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                For Institutes / Claim Profile
              </Link>
              <Link href="/previous-year-papers" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Previous Year Papers
              </Link>
              <Link href="/study-materials" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Free Study Materials
              </Link>
              <Link href="/blog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Preparation Blog
              </Link>
              <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>

            <div className="mobile-drawer-cta">
              <Link
                href="/#cities-registry"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icons.Search size={16} /> Explore All Cities
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
