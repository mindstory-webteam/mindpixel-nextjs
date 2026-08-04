"use client";
import React from 'react';
import Breadcrumb from '../components/BreadCrums';
import SEO from '../components/SEO';

const TermsCondition = () => {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Syne', sans-serif" }}>
      <SEO 
        title="Terms & Conditions | MindPixel Digital Company" 
        description="Review the Terms and Conditions for MindPixel, a full-service web design and digital marketing company based in Thrissur, Kerala." 
      />

      {/* Breadcrumb section */}
      <Breadcrumb pageName="Terms" />

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-12 md:py-20" style={{ color: '#111111', lineHeight: '1.7', fontFamily: "'Syne', sans-serif" }}>
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
            Terms & Conditions
          </h1>
          <p className="text-sm font-semibold opacity-70" style={{ fontFamily: 'monospace' }}>
            Effective Date: March 23, 2026
          </p>
        </div>

        <div className="space-y-8 text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              1. Agreement to Terms
            </h2>
            <p>
              Welcome to <strong>Mind Pixel</strong>. By accessing or using our website, services, and digital solutions, you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              2. Services Offered
            </h2>
            <p>
              Mind Pixel provides digital agency services, including but not limited to web development, design, branding, mobile applications, and software engineering. All services are subject to specific project agreements and statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              3. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, all content, design elements, graphics, code, and materials on this site are the intellectual property of Mind Pixel or our licensors and are protected by copyright and trademark laws. Client deliverables and ownership rights are governed by our respective service contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              4. User Responsibilities
            </h2>
            <p>
              You agree to use our website and services only for lawful purposes. You must not transmit any worms, viruses, or any code of a destructive nature. Any unauthorized use or breach of security may result in immediate termination of your access to our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall Mind Pixel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              6. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify users of any changes by updating the effective date at the top of this page. Your continued use of our services following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              7. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-semibold">Mind Pixel Support Team</p>
              <p>Email: <a href="mailto:hello@mindstory.in" className="hover:underline" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>hello@mindstory.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
