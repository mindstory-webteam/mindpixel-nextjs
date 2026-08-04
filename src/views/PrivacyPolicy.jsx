"use client";
import React from 'react';
import Breadcrumb from '../components/BreadCrums';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: "'Syne', sans-serif" }}>
      <SEO 
        title="Privacy Policy | MindPixel Web & Design Company" 
        description="Read the Privacy Policy of MindPixel to understand how we protect your data while providing top-tier web design and digital marketing services." 
      />

      {/* Breadcrumb section */}
      <Breadcrumb pageName="Privacy" />

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-12 md:py-20" style={{ color: '#111111', lineHeight: '1.7', fontFamily: "'Syne', sans-serif" }}>
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
            Privacy Policy
          </h1>
          <p className="text-sm font-semibold opacity-70" style={{ fontFamily: 'monospace' }}>
            Effective Date: March 23, 2026
          </p>
        </div>

        <div className="space-y-8 text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              1. Introduction
            </h2>
            <p>
              At <strong>Mind Pixel</strong>, we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              2. Information We Collect
            </h2>
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Personal Information:</strong> By which you may be personally identified, such as name, email address, telephone number, or any other identifier by which you may be contacted online or offline.</li>
              <li><strong>Usage Details:</strong> Information about your internet connection, the equipment you use to access our website, and usage details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              3. How We Use Your Information
            </h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              4. Disclosure of Your Information
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide to comply with any court order, law, or legal process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              5. Data Security
            </h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>
              6. Your Rights & Contact Information
            </h2>
            <p>
              Depending on your location, you may have rights regarding access to, correction of, or deletion of your personal data. To exercise these rights, or if you have any questions or comments about this Privacy Policy and our privacy practices, contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-semibold">Mind Pixel Privacy Team</p>
              <p>Email: <a href="mailto:hello@mindstory.in" className="hover:underline" style={{ color: '#9e3a87', fontFamily: "'Syne', sans-serif" }}>hello@mindstory.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
