import React from "react";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

// Inline SVG UAE Flag
const UaeFlag = () => (
  <svg className="w-8 h-5 rounded shadow-sm shrink-0" viewBox="0 0 6 3" xmlns="http://www.w3.org/2000/svg">
    <rect width="1.5" height="3" fill="#FF0000" />
    <rect x="1.5" width="4.5" height="1" fill="#00732F" />
    <rect x="1.5" y="1" width="4.5" height="1" fill="#FFFFFF" />
    <rect x="1.5" y="2" width="4.5" height="1" fill="#000000" />
  </svg>
);

// Inline SVG India Flag
const IndiaFlag = () => (
  <svg className="w-8 h-5 rounded shadow-sm shrink-0" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
    <rect width="3" height="0.67" fill="#FF9933" />
    <rect y="0.67" width="3" height="0.67" fill="#FFFFFF" />
    <rect y="1.33" width="3" height="0.67" fill="#138808" />
    <circle cx="1.5" cy="1" r="0.2" fill="#000080" />
  </svg>
);

function Locations() {
  const branches = [
    {
      city: "Dubai",
      country: "UNITED ARAB EMIRATES",
      flag: <UaeFlag />,
      phone: "+971 XX XXX XXXX",
      email: "info@pravasisouq.com",
      hours: [
        { days: "Sun – Thu", time: "9:00 AM – 9:00 PM" },
        { days: "Fri – Sat", time: "10:00 AM – 10:00 PM" },
      ],
      mapUrl: "#",
    },
    {
      city: "Sharjah",
      country: "UNITED ARAB EMIRATES",
      flag: <UaeFlag />,
      phone: "+971 XX XXX XXXX",
      email: "info@pravasisouq.com",
      hours: [
        { days: "Sun – Thu", time: "9:00 AM – 9:00 PM" },
        { days: "Fri – Sat", time: "10:00 AM – 10:00 PM" },
      ],
      mapUrl: "#",
    },
    {
      city: "Kozhikode",
      country: "INDIA", // Corrected country label to INDIA as discussed
      flag: <IndiaFlag />,
      phone: "+91 XX XXX XXXX",
      email: "info@pravasisouq.com",
      hours: [
        { days: "Mon – Sat", time: "9:00 AM – 8:00 PM" },
        { days: "Sunday", time: "Closed" },
      ],
      mapUrl: "#",
    },
  ];

  return (
    <section className="py-20 bg-brand-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase block">
            Our Outlets
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-charcoal">
            Find us <span className="text-brand-green">near you</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-charcoal/5 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Flag, City, Country */}
                <div className="flex items-center justify-between border-b border-brand-charcoal/5 pb-5 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-charcoal leading-none mb-1.5">{branch.city}</h3>
                    <p className="text-[10px] font-bold text-brand-charcoal/40 tracking-wider uppercase">
                      {branch.country}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded-full uppercase border border-brand-primary/10">
                      Open Now
                    </span>
                    {branch.flag}
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4 mb-6">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex items-center gap-3 text-sm font-medium text-brand-charcoal/70 hover:text-brand-gold transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-cream flex items-center justify-center text-brand-gold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>{branch.phone}</span>
                  </a>
                  <a
                    href={`mailto:${branch.email}`}
                    className="flex items-center gap-3 text-sm font-medium text-brand-charcoal/70 hover:text-brand-gold transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-cream flex items-center justify-center text-brand-gold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>{branch.email}</span>
                  </a>
                </div>

                {/* Opening Hours */}
                <div className="bg-brand-cream/35 border border-brand-gold/10 p-5 rounded-xl space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal/55 tracking-wider uppercase mb-2">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span>Operating Hours</span>
                  </div>
                  {branch.hours.map((h, hIdx) => (
                    <div key={hIdx} className="flex justify-between text-sm">
                      <span className="font-semibold text-brand-charcoal/65">{h.days}:</span>
                      <span className="text-brand-charcoal/80 font-bold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Directions Link */}
              <a
                href={branch.mapUrl}
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-brand-cream hover:bg-brand-gold hover:text-brand-charcoal border border-brand-gold/25 rounded-xl font-bold text-brand-gold text-sm transition-all duration-300"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;
