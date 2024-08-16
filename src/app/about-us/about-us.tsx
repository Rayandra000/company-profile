import React from "react";
import GetConnected from "./GetConnected";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CA Studio | About Us",
  description: "Discover CA Studio, a global leader in B2B photography services, offering tailored visual content through our network of professional photographers and videographers in over 500 cities worldwide.",
};

const AboutUs = () => {
  return (
    <section>
      <div className="relative flex justify-center pt-28 lg:pt-10 bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap m-5 lg:mb-24 lg:mt-[10rem]">
            <div className="mx-auto text-center mb-3 w-full lg:w-1/2">
              <h4 className="font-bold leading-10 text-[2rem] bg-gradient-to-br text-dark1 text-2xl mb-3 max-w-xl">
                Save money and get the right price
                <br />
                only at
                <span className="pb-5 text-primary"> RAYMART</span>
              </h4>
            </div>
            <div className="flex flex-wrap mx-auto">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <div>
                    <Image
                      src="/images/mart1.jpg"
                      alt="Photography1"
                      width={500}
                      height={500}
                      className="h-[300px] w-[950px]"
                      placeholder="blur" // Use blur-up placeholder
                      blurDataURL="/images/photographers.webp" // Optional: add a small base64 placeholder image
                    />
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-left lg:pb-8 lg:mt-3">
                    Save money and get the right price only at <span className="text-primary font-bold">RAYMART</span>
                  </h2>
                  <p className="text-justify">
                    Want to shop without draining your pocket? Raymart is the right solution for you! At Raymart, you can find various products at very friendly prices. From daily necessities to special items, Raymart offers discounts and
                    attractive offers that will make your shopping more economical and enjoyable.
                  </p>
                  <h3 className="font-bold text-xl">
                    <span className="text-primary">Find the Best</span> Deals for All Your Needs!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
