import React from "react";
import { FaLinkedinIn } from "react-icons/fa6"; 
import { img } from "../assets/assest";

const teamMembers = [
  { name: "Lijo", role: "CEO", img: `${img.lijoyceo}` },
  { name: "Rahoof", role: "Developer Head", img: `${img.raufteamlead}` },
  { name: "Indrajith", role: "SEO Head", img:`${img.indranseohead}` },
  { name: "Jishnu", role: "Full Stack Developer", img: `${img.jishnumerndev}` },
  { name: "Janavalsan", role: "Shopify Developer", img: `${img.janavalsanshopifydev}` },
  { name: "Lakshmi", role: "Project Coordinator", img: `${img.lakshmicoordinator}` },
  { name: "Ajith k v", role: "Mern Stack developer", img: `${img.ajithjrmerndev}` },
  { name: "Seethalakshmi", role: "SEO Strategist", img: `${img.seethajrseo}` },
];

const OurMembers = () => {
  return (
    <section className="px-6 lg:px-16 pb-16 lg:pb-24 bg-white" style={{ fontFamily: "'Syne', sans-serif" }}>
      {/* Updated Header Section */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-[32px] lg:text-4xl font-normal tracking-tight leading-tight">
            Meet the MindPixel team
          </h2>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-black max-w-xs leading-relaxed md:ml-auto text-justify">
            Meet the talented individuals who drive our company's success with their dedication, expertise, and passion for innovation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border border-gray-100 bg-white relative group"
            style={{ aspectRatio: "2/3" }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg px-3 py-2 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[14px] font-semibold leading-tight">{member.name}</p>
                <p className="text-[12px] text-gray-400 mt-0.5">{member.role}</p>
              </div>
              {/* <div className="w-6 h-6 rounded-md border border-gray-100 flex items-center justify-center  bg-[#0077b5] text-white transition-all cursor-pointer">
                <FaLinkedinIn size={11} />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMembers;