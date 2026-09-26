"use client";
import React from 'react';
import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";

export default function ContactMap({ locations }) {
  return (
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
          <MarkerTooltip closeOnClick={false} className="bg-transparent border-none p-0 shadow-none">
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                width: '260px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '16px 18px',
                background: '#ffffff',
                color: '#111111',
                borderRadius: '14px',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#e07a1b',
                  fontWeight: 700,
                }}
              >
                {loc.place}
              </span>
              <div style={{ height: '1px', background: '#f0f0f0', margin: '2px 0' }} />
              <p
                style={{
                  fontSize: '13px',
                  color: '#222222',
                  lineHeight: 1.5,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {loc.address}
              </p>
            </div>
          </MarkerTooltip>
        </MapMarker>
      ))}
      <MapControls />
    </Map>
  );
}
