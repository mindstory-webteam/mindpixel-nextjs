import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";
import { img } from "../assets/assest";

gsap.registerPlugin(ScrollTrigger);

const NAVBAR_H = 70;
const SIDE_GAP = 60;

const services = [
  {
    id: "01",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform",
    description:
      "We design and develop high-performance mobile applications tailored for both iOS and Android platforms, combining native precision with the flexibility of cross-platform technologies. Our approach focuses on delivering seamless, intuitive user experiences that not only look exceptional but also perform reliably under real-world conditions. From concept to deployment, we prioritize speed, scalability, and responsiveness, ensuring your app meets modern user expectations and business demands.",
    detail: "From concept to App Store end-to-end.",
    image: `${img.mobileappdevelopment}`
  },
  {
    id: "02",
    title: "SaaS Application",
    subtitle: "Cloud-Native Platforms",
    description:
      "We build robust, scalable software-as-a-service (SaaS) platforms engineered to support growing businesses and evolving user demands. Our solutions are designed with a strong architectural foundation that emphasizes multi-tenancy, allowing multiple customers to securely share a single application instance while maintaining complete data isolation and performance efficiency. This ensures optimal resource utilization and cost-effectiveness without compromising reliability or security.",
    detail: "Architected to grow with your user base.",
    image: `${img.saasservice}`
  },
  {
    id: "03",
    title: "Custom Software",
    subtitle: "Bespoke & Tailored",
    description:
      "We design and develop custom software solutions from the ground up, carefully crafted to address your unique business challenges and operational requirements. Rather than relying on one-size-fits-all products, our approach focuses on building systems that align precisely with your workflows, goals, and long-term vision. Every solution is thoughtfully planned, ensuring that the architecture supports not only your current needs but also future growth and evolving demands.",
    detail: "No templates. No compromise.",
    image: `${img.happynexmockup}`
  },
  {
    id: "04",
    title: "Enterprise Software",
    subtitle: "Complex Workflows Simplified",
    description:
      "We deliver comprehensive end-to-end enterprise solutions designed to simplify and optimize even the most complex business workflows. Our approach begins with a deep understanding of your operational challenges, allowing us to design systems that eliminate inefficiencies, reduce manual effort, and create seamless, automated processes across departments. From initial strategy and architecture to development, deployment, and long-term support, every stage is carefully executed to ensure alignment with your business goals.",
    detail: "Built for teams of 10 to 10,000.",
    image: `${img.EnterpriseSoftware}`
  },
  {
    id: "05",
    title: "UI / UX Design",
    subtitle: "Human-Centred Craft",
    description:
      "We create thoughtful, user-centred designs that seamlessly bridge aesthetics with functionality, ensuring every interaction feels intuitive, engaging, and purposeful. Our design philosophy goes beyond visual appeal, focusing on how users think, behave, and interact with digital products. By deeply understanding user needs and business objectives, we craft experiences that not only look refined but also solve real problems efficiently.",
    detail: "Design that converts, not just impresses.",
    image: `${img.uiux}`
  },
  {
    id: "06",
    title: "SEO",
    subtitle: "Organic Growth Engine",
    description:
      "We develop data-driven SEO strategies designed to elevate your online presence, improve search engine rankings, and drive consistent, high-quality organic traffic to your website. Our approach begins with in-depth research and analysis, including keyword discovery, competitor benchmarking, and audience behavior insights. This allows us to identify the most valuable opportunities and craft a strategy that aligns closely with your business objectives and target market.",
    detail: "Results you can measure, traffic you can trust.",
    image: `${img.seoservice}`
  },
];

function ServiceCard({ service }) {
  return (
    <div className="svc-card">
      <div className="svc-top">
        <div className="svc-id-row">
          <span className="svc-subtitle">{service.subtitle}</span>
        </div>
        <h3 className="svc-title">{service.title}</h3>
        <p className="svc-desc">{service.description}</p>
        <p className="svc-detail">{service.detail}</p>
      </div>
      <div className="svc-bottom">
        <AnimatedButton
          href="/contact"
          bgColor="#1a1a1a"
          textColor="#f5f0e8"
          hoverBgColor="#ffb86a"
          hoverTextColor="#1a1a1a"
          style={{ textTransform: "uppercase" }}
        >
          Know More
        </AnimatedButton>
      </div>
    </div>
  );
}

function MobileServiceCard({ service }) {
  return (
    <div className="mob-card">
      <div className="mob-img">
        <img src={service.image} alt={service.title} />
        <div className="mob-img-overlay" />
        <div className="mob-img-caption">
          <p className="img-caption-eyebrow">Featured Service</p>
          <p className="img-caption-title">{service.title}</p>
        </div>
      </div>
      <div className="mob-body">
        <ServiceCard service={service} />
      </div>
    </div>
  );
}

export default function ServicesSticky() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const section = sectionRef.current;
    const ctx = gsap.context(() => {

      // ── Panel 1 (right side): SaaS base + Custom Software clip ──
      gsap.set(".p1-img", { x: "100%" });
      gsap.set(".p1-txt", { y: "100%" });
      gsap.set(".p1-clip", { clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)" });
      gsap.set(".p1-clip img", { scale: 1.25 });
      gsap.set(".p1-txt .cb", { y: "-101%" });
      // clip caption starts hidden
      gsap.set(".p1-clip-caption", { opacity: 0 });

      // ── Panel 2 (left side): Enterprise base + UI/UX clip ──
      gsap.set(".p2-img", { x: "-100%" });
      gsap.set(".p2-txt", { y: "100%" });
      gsap.set(".p2-clip", { clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)" });
      gsap.set(".p2-clip img", { scale: 1.25 });
      gsap.set(".p2-txt .cb", { y: "-101%" });
      // clip caption starts hidden
      gsap.set(".p2-clip-caption", { opacity: 0 });

      // ── Panel 3 (right side): SEO ──
      gsap.set(".p3-img", { x: "100%" });
      gsap.set(".p3-txt", { y: "100%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=750%",
          pin: true,
          scrub: 1.2,
        },
      });

      const S = 1;

      // Step 1 — Slide out panel 0, slide in panel 1
      tl.to(".p0-img", { opacity: 0, scale: 0.82, duration: S })
        .to(".p0-txt", { opacity: 0, scale: 0.82, duration: S }, "<")
        .to(".p1-img", { x: "0%", duration: S }, "<")
        .to(".p1-txt", { y: "0%", duration: S }, "<");

      // Step 2 — Reveal clip (Custom Software image) + fade out base caption, fade in clip caption
      tl.to(".p1-clip", { clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)", duration: S })
        .to(".p1-clip img", { scale: 1, duration: S }, "<")
        .to(".p1-base-caption", { opacity: 0, duration: S * 0.6 }, "<")
        .to(".p1-clip-caption", { opacity: 1, duration: S * 0.6 }, "<0.3")
        .to(".p1-txt .ca", { y: "-101%", duration: S }, "<")
        .to(".p1-txt .cb", { y: "0%", duration: S }, "<0.15");

      // Step 3 — Slide out panel 1, slide in panel 2
      tl.to(".p1-img", { opacity: 0, scale: 0.82, duration: S })
        .to(".p1-txt", { opacity: 0, scale: 0.82, duration: S }, "<")
        .to(".p2-img", { x: "0%", duration: S }, "<")
        .to(".p2-txt", { y: "0%", duration: S }, "<");

      // Step 4 — Reveal clip (UI/UX image) + fade out base caption, fade in clip caption
      tl.to(".p2-clip", { clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)", duration: S })
        .to(".p2-clip img", { scale: 1, duration: S }, "<")
        .to(".p2-base-caption", { opacity: 0, duration: S * 0.6 }, "<")
        .to(".p2-clip-caption", { opacity: 1, duration: S * 0.6 }, "<0.3")
        .to(".p2-txt .ca", { y: "-101%", duration: S }, "<")
        .to(".p2-txt .cb", { y: "0%", duration: S }, "<0.15");

      // Step 5 — Slide out panel 2, slide in panel 3 (SEO)
      tl.to(".p2-img", { opacity: 0, scale: 0.82, duration: S })
        .to(".p2-txt", { opacity: 0, scale: 0.82, duration: S }, "<")
        .to(".p3-img", { x: "0%", duration: S }, "<")
        .to(".p3-txt", { y: "0%", duration: S }, "<");

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        :root {
          --ink:     #0f0e0c;
          --muted:   #7a7469;
          --accent:  #95297e;
          --card-bg: #ffffff;
          --border:  #e8e2d9;
          --img-overlay: rgba(15,14,12,0.18);
        }

        body { overflow-x: hidden; }

        .svc-root {
          position: relative;
          width: 100vw;
          height: 100svh;
          padding-top: ${NAVBAR_H}px;
          background: #fff;
          overflow: hidden;
          font-family: 'Syne', sans-serif;
          box-sizing: border-box;
        }

        .svc-stage {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .half {
          position: absolute;
          width: 50%;
          height: 100%;
          will-change: transform, opacity;
        }
        .hl { left: 0; }
        .hr { left: 50%; }

        .p-inner {
          position: relative;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }

        .hl .p-inner { padding: 0.6rem 0.4rem 0.6rem ${SIDE_GAP}px; }
        .hr .p-inner { padding: 0.6rem ${SIDE_GAP}px 0.6rem 0.4rem; }

        .p-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 1.6rem;
          overflow: hidden;
          background: #e6e7e8;
          border: 1px solid var(--border);
          box-sizing: border-box;
        }

        .img-base, .img-clip {
          position: absolute;
          inset: 0;
        }
        .img-base img, .img-clip img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .img-base::after, .img-clip::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--img-overlay);
          pointer-events: none;
        }
        .img-base::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,14,12,0.62) 0%, transparent 55%);
          z-index: 1;
          pointer-events: none;
        }
        .img-clip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,14,12,0.62) 0%, transparent 55%);
          z-index: 1;
          pointer-events: none;
        }
        .img-clip {
          clip-path: polygon(0% 0%,100% 0%,100% 0%,0% 0%);
        }
        .img-clip img { transform: scale(1.25); }

        /* Base caption — sits above the base image */
        .img-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          padding: 2.2rem 2.4rem;
          color: #fff;
          pointer-events: none;
        }

        /* Clip caption — sits above the clip layer, hidden by default */
        .clip-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 4;
          padding: 2.2rem 2.4rem;
          color: #fff;
          pointer-events: none;
        }

        .img-caption-eyebrow {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 0.4rem;
        }
        .img-caption-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 2.6vw, 2.6rem);
          font-weight: 700;
          line-height: 1.1;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .ca, .cb {
          position: absolute;
          inset: 0;
          padding: 2.4rem 2.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #e6e7e8;
          will-change: transform;
          overflow: hidden;
          box-sizing: border-box;
        }
        .cb { transform: translateY(-101%); }

        .txt-single {
          width: 100%; height: 100%;
          padding: 2.4rem 2.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
        }

        .svc-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .svc-top {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
        }
        .svc-id-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .svc-subtitle {
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .svc-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.9rem, 3.2vw, 3rem);
          color: var(--ink);
          line-height: 1.06;
          margin-bottom: 1.2rem;
          letter-spacing: -0.03em;
          width: 95%;
        }
        .svc-desc {
          font-family: 'Syne', sans-serif;
          font-size: clamp(0.88rem, 1.1vw, 1rem);
          font-weight: 400;
          color: black;
          line-height: 1.75;
          width: 94%;
          margin-bottom: 0.8rem;
        }
        .svc-detail {
          font-family: 'syne', sans-serif;
          font-weight: 400;
          font-style: italic;
          color: var(--accent);
          letter-spacing: 0.01em;
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.4;
        }
        .svc-bottom {
          padding-top: 1.6rem;
          margin-top: 1.6rem;
          border-top: 1px solid var(--border);
        }

        .mob-services { display: none; }

        @media (max-width: 767px) {
          .svc-root { display: none; }

          .mob-services {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem 1rem;
            background: #fff;
            font-family: 'Syne', sans-serif;
          }

          .mob-card {
            border-radius: 1.2rem;
            overflow: hidden;
            border: 1px solid var(--border);
            background: #e6e7e8;
          }

          .mob-img {
            position: relative;
            width: 100%;
            height: 220px;
          }

          .mob-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .mob-img-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(15,14,12,0.65) 0%, rgba(15,14,12,0.15) 55%);
          }

          .mob-img-caption {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            padding: 1.2rem 1.4rem;
            color: #fff;
          }

          .mob-body { padding: 1.4rem 1.4rem 1.6rem; }
          .mob-body .svc-card { height: auto; }
          .mob-body .svc-title { font-size: 1.5rem; width: 100%; margin-bottom: 0.8rem; }
          .mob-body .svc-desc { font-size: 0.9rem; width: 100%; margin-bottom: 0.6rem; }
          .mob-body .svc-detail { font-size: 1rem; }
          .mob-body .svc-bottom { padding-top: 1.2rem; margin-top: 1.2rem; }
        }
      `}</style>

      <section ref={sectionRef} className="svc-root">
        <div className="svc-stage">

          {/* ── Panel 0: Mobile App (left img, right text) ── */}
          <div className="half hl p0-img">
            <div className="p-inner"><div className="p-card">
              <div className="img-base">
                <img src={services[0].image} alt={services[0].title} />
              </div>
              <div className="img-caption">
                <p className="img-caption-eyebrow">Featured Service</p>
                <p className="img-caption-title">{services[0].title}</p>
              </div>
            </div></div>
          </div>

          <div className="half hr p0-txt">
            <div className="p-inner"><div className="p-card">
              <div className="txt-single">
                <ServiceCard service={services[0]} />
              </div>
            </div></div>
          </div>

          {/* ── Panel 1: SaaS (right img) → Custom Software clip reveals ── */}
          <div className="half hr p1-img">
            <div className="p-inner"><div className="p-card">
              {/* Base image: SaaS */}
              <div className="img-base">
                <img src={services[1].image} alt={services[1].title} />
              </div>
              {/* Clip image: Custom Software — animates in over base */}
              <div className="img-clip p1-clip">
                <img src={services[2].image} alt={services[2].title} />
              </div>
              {/* Base caption: SaaS — fades out when clip reveals */}
              <div className="img-caption p1-base-caption">
                <p className="img-caption-eyebrow">Featured Service</p>
                <p className="img-caption-title">{services[1].title}</p>
              </div>
              {/* Clip caption: Custom Software — fades in when clip reveals */}
              <div className="clip-caption p1-clip-caption">
                <p className="img-caption-eyebrow">Featured Service</p>
                <p className="img-caption-title">{services[2].title}</p>
              </div>
            </div></div>
          </div>

          {/* Panel 1 text: SaaS → Custom Software */}
          <div className="half hl p1-txt">
            <div className="p-inner"><div className="p-card">
              <div className="ca">
                <ServiceCard service={services[1]} />
              </div>
              <div className="cb">
                <ServiceCard service={services[2]} />
              </div>
            </div></div>
          </div>

          {/* ── Panel 2: Enterprise (left img) → UI/UX clip reveals ── */}
          <div className="half hl p2-img">
            <div className="p-inner"><div className="p-card">
              {/* Base image: Enterprise */}
              <div className="img-base">
                <img src={services[3].image} alt={services[3].title} />
              </div>
              {/* Clip image: UI/UX — animates in over base */}
              <div className="img-clip p2-clip">
                <img src={services[4].image} alt={services[4].title} />
              </div>
              {/* Base caption: Enterprise — fades out when clip reveals */}
              <div className="img-caption p2-base-caption">
                <p className="img-caption-eyebrow">Featured Service</p>
                <p className="img-caption-title">{services[3].title}</p>
              </div>
              {/* Clip caption: UI/UX — fades in when clip reveals */}
              <div className="clip-caption p2-clip-caption">
                <p className="img-caption-eyebrow">Featured Service</p>
                <p className="img-caption-title">{services[4].title}</p>
              </div>
            </div></div>
          </div>

          {/* Panel 2 text: Enterprise → UI/UX */}
          <div className="half hr p2-txt">
            <div className="p-inner"><div className="p-card">
              <div className="ca">
                <ServiceCard service={services[3]} />
              </div>
              <div className="cb">
                <ServiceCard service={services[4]} />
              </div>
            </div></div>
          </div>

          {/* ── Panel 3: SEO (right img, left text) ── */}
          <div className="half hr p3-img">
            <div className="p-inner"><div className="p-card">
              <div className="img-base">
                <img src={services[5].image} alt={services[5].title} />
              </div>
              <div className="img-caption">
                <p className="img-caption-eyebrow">Featured Service</p>
                <p className="img-caption-title">{services[5].title}</p>
              </div>
            </div></div>
          </div>

          <div className="half hl p3-txt">
            <div className="p-inner"><div className="p-card">
              <div className="txt-single">
                <ServiceCard service={services[5]} />
              </div>
            </div></div>
          </div>

        </div>
      </section>

      {/* Mobile: plain stacked cards */}
      <div className="mob-services">
        {services.map((service) => (
          <MobileServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  );
}