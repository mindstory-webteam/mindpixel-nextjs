import React from 'react';
import localMarketImg from '../assets/local_market.png';
import communicationImg from '../assets/communication.png';
import expertsImg from '../assets/experts_icon.png';
import growthImg from '../assets/growth_icon2.png';

const reasons = [
  {
    image: localMarketImg.src || localMarketImg,
    title: "Local Market Understanding",
    desc: "Deep understanding of Thrissur and the wider Kerala consumer mindset, tailoring strategies that connect directly with regional audiences."
  },
  {
    image: communicationImg.src || communicationImg,
    title: "Clear & Honest Communication",
    desc: "No false promises or complex jargon. We provide absolute transparency with clear, metrics-driven reporting and recommendations."
  },
  {
    image: expertsImg.src || expertsImg,
    title: "Experienced Experts",
    desc: "Our team consists of specialists who are highly experienced in running paid campaigns, content management, and SEO auditing."
  },
  {
    image: growthImg.src || growthImg,
    title: "Long-Term Growth Focus",
    desc: "We steer clear of quick hacks that collapse. We build secure organic systems, brand consistency, and reliable lead channels for steady scaling."
  }
];

export default function EnquiryWhyChooseUs() {
  return (
    <section className="wcu-section">
      <style>{`
        .wcu-section {
          background-color: #ffffff;
          padding: 60px 40px;
          color: #111;
          font-family: 'Syne', sans-serif;
          overflow: hidden;
        }
        .wcu-inner {
          max-width: 1400px;
          margin: 0 auto;
        }
        .wcu-header {
          text-align: center;
          margin-bottom: 72px;
        }
        .wcu-heading {
          font-size: 56px;
          font-weight: 400;
          line-height: 1.1;
          margin: 0;
          color: #1a1a1a;
        }
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .wcu-card {
          background: #ffffff;
          border: 1px solid #f0f0f0;
          border-radius: 24px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        }
        .wcu-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 16px 0;
          color: #111111;
          position: relative;
          z-index: 1;
        }
        .wcu-desc {
          font-size: 16px;
          line-height: 1.7;
          color: #555555;
          margin: 0;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .wcu-icon-bg {
          position: absolute;
          top: 50%;
          right: -20px;
          transform: translateY(-50%);
          width: 250px;
          height: 250px;
          object-fit: contain;
          opacity: 0.2;
          z-index: 0;
          pointer-events: none;
          mix-blend-mode: multiply;
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
          mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
        }

        @media (max-width: 1023px) {
          .wcu-grid {
            grid-template-columns: 1fr;
          }
          .wcu-section {
            padding: 40px 20px;
          }
          .wcu-heading {
            font-size: 32px;
          }
          .wcu-card {
            padding: 32px;
            border-radius: 20px;
          }
          .wcu-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="wcu-inner">
        <div className="wcu-header">
          <h2 className="wcu-heading">Why Businesses Choose Us</h2>
        </div>

        <div className="wcu-grid">
          {reasons.map((item, i) => (
            <div className="wcu-card" key={i}>
              <img src={item.image} alt={item.title} className="wcu-icon-bg" />
              <h3 className="wcu-title">{item.title}</h3>
              <p className="wcu-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
