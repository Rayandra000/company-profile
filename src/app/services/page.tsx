import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Testimonial from "../home/Testimonial";
import Clients from "../client/page";

export const metadata: Metadata = {
  title: "RAYMART | Our Services",
  description:
    "Explore the diverse range of professional photography and video production services offered by CA Studio. From commercial photography to tailored editing solutions, we provide high-quality, consistent results to businesses across all industries, worldwide.",
};

const Services = () => {
  return (
    <section>
      <div className="relative flex justify-center min-h-screen pt-48 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Product{" "}
                <span className="text-black">
                  for <br />
                  All Businesses
                </span>
              </h4>
              <p className="font-medium italic text-md text-secondary md:text-lg">Explore the diverse range of Quality products and All Businesses</p>
              <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide"></div>
            </div>

            <div className="w-full px-4 gap-3 flex flex-wrap items-center justify-center mb-10">
              {[
                {
                  src: "/images/Card/buah 1.jpeg",
                  alt: "Fruits",
                  title: "Fresh Fruits",
                  description: "Elevating Your Gastronomic Creations",
                },
                {
                  src: "/images/Card/minuman 1.jpeg",
                  alt: "Fresh Drink",
                  title: "Fresh Drink",
                  description: "Showcasing Properties to Perfection",
                },
                {
                  src: "/images/Card/food1.jpeg",
                  alt: "Fresh Food",
                  title: "Fresh Food",
                  description: "Professional Headshots for Every Need",
                },
                {
                  src: "/images/Card/sabun1.jpeg",
                  alt: "Toiletries",
                  title: "Toiletries",
                  description: "Preserving Moments, Creating Memories",
                },
                {
                  src: "/images/Card/snack1.jpeg",
                  alt: "Packaged Snacks",
                  title: "Packaged Snacks",
                  description: "Highlighting Natural Beauty and Wellness",
                },
                {
                  src: "/images/Card/tulis1.jpeg",
                  alt: "STATIONERY",
                  title: "Stationery",
                  description: "Capturing the Essence of Your Brand",
                },
                {
                  src: "/images/Card/alat1.jpeg",
                  alt: "household appliances",
                  title: "Household",
                  description: "Capturing Stories with Precision",
                },
                {
                  src: "/images/Card/furnitur1.jpeg",
                  alt: "home furniture",
                  title: "Home Furniture",
                  description: "Explore All Our Services",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="card bg-base-100 w-64 shadow-xl">
                    <figure>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={533}
                        priority={index < 2} // Prioritize the first two images
                        sizes="(max-width: 768px) 100vw, 50vw" // Ensure appropriate sizing for responsiveness
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <p className="pb-1">{item.description}</p>
                      <div className="card-actions justify-center">
                        <button className="btn btn_dark_red">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Clients />
    </section>
  );
};

export default Services;
