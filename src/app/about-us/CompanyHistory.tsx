import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "RAYMART | History",
  description:
    "Founded in 2019, RAYMART began as a passion project in street photography, quickly evolving into a global leader in B2B photography services. From humble beginnings to working with multinational companies, RAYMART now boasts a network of over 10,000 photographers worldwide, offering diverse photography and video production services with consistent quality.",
};

const CompanyHistory = () => {
  return (
    <section className="relative flex justify-center pb-5 bg-slate-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="max-w-xl mx-auto">
            <div className="w-full px-4 m-5">
              <h3 className="font-semibold italic text-dark1 text-2xl mb-2 lg:text-4xl lg:pt-10 lg:mb-10">Our Story</h3>
            </div>
          </div>
          <div className="flex flex-wrap m-5 ">
            <p className="font-medium text-justify text-base m-5 lg:text-xl">
              Behind every great brand is an inspiring story of the journey to success. So is Raymart, a company that has caught the attention of many consumers with its commitment to quality and affordable prices.
              <br />
              <br />
              Raymart was founded in 1951 by Rayandra Rheza Paleva with a simple yet ambitious vision: to provide a variety of quality products at pocket-friendly prices. With an entrepreneurial spirit and dedication to providing added
              value to customers, Raymart began to pioneer its steps in the retail industry.
              <br />
              <br />
              Starting from a small shop located in Jakarta, Raymart managed to attract customers thanks to a combination of competitive prices and friendly service. Over time, Raymart experienced rapid growth. By focusing on customer needs
              and adapting to market changes, Raymart began to expand its reach to various regions.
              <br />
              <br />
              In its efforts to reach more customers, Raymart launched an online platform that allows consumers to shop from the comfort of their homes. This platform not only expanded Raymarts reach but also strengthened its commitment to
              providing an easy and enjoyable shopping experience.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
