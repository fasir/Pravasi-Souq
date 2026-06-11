import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

function InstagramGallery() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&auto=format&fit=crop&q=80",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-brand-cream/10 border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <a
            href="https://instagram.com/pravasisouq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-primary-light transition-colors uppercase tracking-widest mb-1"
          >
            <Camera className="w-4 h-4" />
            <span>Follow us on Instagram</span>
          </a>
          <h2 className="text-2xl font-extrabold text-brand-charcoal">
            @pravasisouq
          </h2>
        </div>

        {/* 6-Column Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="relative aspect-square rounded-2xl overflow-hidden border border-brand-charcoal/5 group shadow-sm hover:shadow-md block"
            >
              <Image
                src={post.image}
                alt={`Instagram gallery post ${post.id}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-w-xs) 50vw, 200px"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <Camera className="w-8 h-8 text-white scale-90 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default InstagramGallery;
