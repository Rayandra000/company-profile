import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "RAYMART | Company Overview",
  description: "Overview",
};

const ComOverview = () => {
  return (
    <section className="relative flex justify-center min-h-screen pt-28 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-dark1 text-3xl mb-1 sm:text-4xl lg:text-5xl">Company Overview</h2>
          </div>
        </div>
        <div className="flex flex-wrap px-4">
          <div className="w-full self-center lg:pt-5 px-4 lg:w-1/2 mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase lg:text-xl">RAYMART</h4>
            <p className="font-medium text-justify m-5 text-md text-secondary md:text-lg">
              Raymart is a company specializing in [insert specific industry or field, e.g., industrial equipment, consumer electronics, etc.]. Known for its commitment to innovation and quality, Raymart focuses on delivering
              high-performance [products/services] designed to meet the diverse needs of its customers. Founded with the goal of advancing [industry/sector], Raymart combines cutting-edge technology with a customer-centric approach. The
              company prides itself on its skilled team and robust research and development capabilities, which enable it to offer state-of-the-art solutions and maintain a competitive edge in the market. Raymart dedication to excellence is
              reflected in its rigorous quality control processes and its emphasis on continuous improvement. This ensures that clients receive not only reliable and effective products but also exceptional customer support and service.
              Through its strategic focus on innovation and efficiency, Raymart continues to build strong, long-term relationships with its clients and partners.
            </p>
            <div className="flex flex-col items-center justify-center h-full w-full pt-10 mb-5 lg:flex-row-reverse lg:mb-20">
              <Link href={"/about-us"}>
                <Button type="button" title="About Us" variant="btn_dark_red" />
              </Link>
            </div>
          </div>

          <div className="w-full pb-1 lg:mb-1 mb-8 md:mb-1 px-4 lg:w-1/2">
            <div className="relative mt-0">
              <Image src="/images/network-world.webp" alt="Photography1" width={800} height={800} className="w-full object-cover mt-0 rounded-lg" />
            </div>
            <div className="relative mt-0">
              <Image src="/images/kasir.avif" alt="Photography1" width={800} height={800} className="w-full object-cover mt-5 sm:mt-3 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComOverview;
