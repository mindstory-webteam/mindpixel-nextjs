import React, { useState } from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import AnimatedButton from './AnimatedButton';
import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";

const locations = [
  {
    place: 'Thrissur',
    address: 'Indel House Building, Opposite MTHS, Near Gossayikunnu, Kuriachira, Thrissur 680006',
    mapUrl: 'https://maps.app.goo.gl/9FqB6tqwuzk7C8Co8',
    coords: [76.22321, 10.507415],
  },
  {
    place: 'Kozhikode',
    address: 'Mind Premium Private Limited 7th Floor, Tower 2, Regus Door No. 2703, Cabin 721, HiLITE Business Park, Pantheeramkavu, Kozhikode - 673 014',
    mapUrl: 'https://maps.app.goo.gl/nBX2VKrHS5H5iSpG7',
    coords: [75.8339138, 11.2478476],
  },
  {
    place: 'Thrissur',
    address: 'Aswini Junction, Sahitya Academy Rd, Regional Theater Rd, near Future educity, Peringavu, Thrissur, Kerala 680020',
    mapUrl: 'https://maps.app.goo.gl/McZPiPSzRq3jmRxJA',
    coords: [76.2173263, 10.5336868],
  },
  {
    place: 'Kochi',
    address: 'Changampuzha Nagar, Alfiya Nagar, South Kalamassery, Kalamassery, Ernakulam, Kerala 682033',
    mapUrl: '#',
    coords: [76.2173263, 10.5336868],
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: 'https://www.facebook.com/myndpixel', label: 'Facebook' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/mpxcode/', label: 'Instagram' },
  { icon: <FaYoutube />, url: '#', label: 'YouTube' },
];

const ContactSection = () => {
  return (
    <section className="contact-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

        .contact-container {
          padding: 80px 40px;
          box-sizing: border-box;
          font-family: 'Syne', sans-serif;
          max-width: 1300px;
          margin: 0 auto;
        }

        .locations-section { margin-bottom: 100px; }

        .locations-title {
          font-size: 2rem;
          color: #111;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .locations-sub {
          font-size: 18px;
          color: #888;
          margin-bottom: 40px;
          max-width: 600px;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .loc-card {
          background: #e6e7e8;
          border: 1px solid #e8e8e8;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .loc-card:hover { border-color: #95257b; }

        .loc-body { padding: 32px; flex-grow: 1; display: flex; flex-direction: column; }

        .loc-place {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #95257b;
          margin-bottom: 16px;
        }

        .loc-address {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .loc-link {
          font-size: 13px;
          font-weight: 600;
          color: #111;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid transparent;
          width: fit-content;
          transition: border-color 0.3s;
        }

        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 60px;
        }

        .method-card {
          background: #fafafa;
          border-radius: 24px;
          padding: 40px 32px;
          text-align: center;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .method-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.06);
          border-color: #95257b;
        }

        .method-icon {
          width: 72px;
          height: 72px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 28px;
          color: #95257b;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        .method-title {
          font-size: 15px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .method-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        .social-wrapper {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 10px;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #111;
          text-decoration: none;
          transition: all 0.3s ease;
          background: #fff;
        }

        .social-btn:hover {
          background: #95257b;
          color: #fff;
          border-color: #95257b;
        }

        .map-section { margin-bottom: 100px; }

        .map-header { margin-bottom: 50px; }

        .map-header h2 {
          font-size: 2rem;
          color: #111;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .map-header p {
          font-size: 15px;
          color: #888;
          max-width: 600px;
        }

        .map-wrap {
          width: 100%;
          height: 480px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e8e8e8;
        }

        .maplibregl-popup { pointer-events: auto !important; }

        .maplibregl-popup-content {
          pointer-events: auto !important;
          padding: 0 !important;
          border-radius: 16px !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important;
          overflow: hidden;
        }

        .maplibregl-popup-tip { display: none !important; }
        .maplibregl-ctrl-attrib { display: none !important; }

        @media (max-width: 1024px) {
          .locations-grid { grid-template-columns: 1fr 1fr; }
          .contact-methods-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .contact-container { padding: 100px 20px 40px 20px; }
          .locations-grid { grid-template-columns: 1fr; }
          .contact-methods-grid { grid-template-columns: 1fr; }
          .map-wrap { height: 320px; }
        }
      `}</style>

      {/* LOCATIONS */}
      <div className="locations-section">
        <h2 className="locations-title">Find Us Around the Globe</h2>
        <p className="locations-sub">
          Strategic offices providing local support with global expertise.
          Visit us at any of our branches for a face-to-face consultation.
        </p>
        <div className="locations-grid">
          {locations.map((loc, i) => (
            <a key={i} className="loc-card" href={loc.mapUrl} target="_blank" rel="noopener noreferrer">
              <div className="loc-body">
                <div className="loc-place">{loc.place}</div>
                <div className="loc-address">{loc.address}</div>
                <span className="loc-link">View on Google Maps</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* MAP */}
      <div className="map-section">
        <div className="map-header">
          <h2>Our Locations on the Map</h2>
          <p>All three of our offices.</p>
        </div>
        <div className="map-wrap">
          <Map
            center={[76.22321, 10.507415]}
            zoom={7}
            scrollZoom={false}
            styles={{
              light: {
                version: 8,
                sources: {
                  osm: {
                    type: "raster",
                    tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                    tileSize: 256,
                    attribution: "",
                    maxzoom: 19,
                  },
                },
                layers: [{ id: "osm-tiles", type: "raster", source: "osm", minzoom: 0, maxzoom: 19 }],
              },
              dark: {
                version: 8,
                sources: {
                  osm: {
                    type: "raster",
                    tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                    tileSize: 256,
                    attribution: "",
                    maxzoom: 19,
                  },
                },
                layers: [{ id: "osm-tiles", type: "raster", source: "osm", minzoom: 0, maxzoom: 19 }],
              },
            }}
          >
            {locations.map((loc, i) => (
              <MapMarker key={i} longitude={loc.coords[0]} latitude={loc.coords[1]}>
                <MarkerContent />
                <MarkerTooltip closeOnClick={false}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    width: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '20px',
                  }}>
                    <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#95257b', fontWeight: 700 }}>
                      {loc.place}
                    </span>
                    <div style={{ height: '1px', background: '#eee', margin: '4px 0' }} />
                    <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6, margin: 0 }}>
                      {loc.address}
                    </p>
                  </div>
                </MarkerTooltip>
              </MapMarker>
            ))}
            <MapControls />
          </Map>
        </div>
      </div>



    </section>
  );
};

export default ContactSection;