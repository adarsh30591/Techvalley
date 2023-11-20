import Image from "next/image";
import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import Link from "next/link";
// import "@fontsource/inter/400-italic.css"; // Specify weight and style

export default function Footer() {
  return (
    <div>
      <div className="relative mx-auto lg:w-[1440px] h-[360px] bg-[#6C727580] py-[95px] lg:py-[0px] flex justify-center items-center">
        {/* <Image
          src="\footerimage.svg"
          width="1440"
          height="360"
          alt="footer Image"
          className="hidden lg:block"
        /> */}
        <div className="absolute lg:w-[540px] flex flex-col justify-evenly">
          <p
            className="text-[28px] lg:text-[40px] font-medium leading-[44px] tracking-[-0.4px] w-[312px] lg:w-[540px] h-auto text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Join Our Newsletter
          </p>
          <p
            className="text-[14px] md:text-[18px] font-normal leading-[30px] w-[312px] lg:w-[540px] h-auto text-center"
            style={{ fontFamily: "Inter" }}
          >
            Sign up for deals, new products and promotions
          </p>
          <div className="flex flex-row py-2 lg:mt-8 mx-auto lg:mx-[26px] border-b-[1px] border-gray-500 w-[312px] lg:w-[500px]">
            {/* <Image
              src="\emailicon.svg"
              width="24"
              height="24"
              alt="email box Image"
              className="pr-[8px] justify-center"
            /> */}
            <input
              type="email"
              placeholder="Email address"
              className=" text-[16px] font-normal text-[#6C7275] leading-[28px] md:w-[396px] h-[28px] justify-center "
              style={{
                fontFamily: "Inter",
                background: "rgba(108,114,117,0.01)",
              }}
            />
            <button
              className=" text-[16px] font-normal text-[#6C7275] leading-[28px] w-[52px] h-[28px] justify-center"
              style={{ fontFamily: "Inter" }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
      {/* 2nd div */}
      <div className="lg:w-[1440px] h-[569px] lg:h-[294px] mx-auto bg-[#141718]">
        <div className="flex flex-col lg:flex-row justify center lg:justify-between lg:pt-[80px] lg:px-[160px] text-[#E8ECEF]">
          <div className="flex flex-col lg:flex-row ">
            <div
              className="text-[24px] font-medium leading-[24px] text-center py-[16px] lg:py-[0px] lg:pr-[32px] lg:border-r-[1px]"
              style={{ fontFamily: "Poppins" }}
            >
              3legant
            </div>
            <div
              className="text-[14px] font-normal leading-[24px] py-[16px] lg:py-[0px] lg:pl-[32px] lg:w-[350px] text-center lg:text-left"
              style={{ fontFamily: "Inter" }}
            >
              Gifts & Decoration Store
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row  text-[14px] font-normal leading-[22px] justify-center lg:justify-between"
            style={{ fontFamily: "Inter" }}
          >
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center "
            >
              Home
            </Link>
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center"
            >
              Product
            </Link>
            <Link
              href="#"
              className="lg:mr-[40px] py-[16px] lg:py-[0px] text-center"
            >
              Blog
            </Link>
            <Link href="#" className="py-[16px] lg:py-[0px] text-center">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row  justify-center lg:justify-between lg:mt-[49px] lg:mx-[160px] py-[16px] text-[#E8ECEF] border-t-[1px] border-[#6C7275]">
          <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between ">
            <div
              className="text-[12px] font-normal leading-[20px] text-center p-[16px] lg:p-[0px]"
              style={{ fontFamily: "Poppins" }}
            >
              Copyright © 2023 3legant. All rights reserved
            </div>
            <div className="flex flex-row justify-center p-[16px] lg:p-[0px] ">
              <div
                className="text-[12px] font-bold leading-[20px] px-[28px] text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Privacy Policy
              </div>
              <div
                className="text-[12px] font-bold leading-[20px] text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Terms Of Use
              </div>
            </div>
          </div>
          <div className="flex justify-center p-[16px] lg:p-[0px]">
            {/* <Image
              src="/instagram.svg"
              width="24"
              height="24"
              alt="Instagram link"
              className="mr-[24px]"
            />
            <Image
              src="/facebook.svg"
              width="24"
              height="24"
              alt="Instagram link"
              className="mr-[24px]"
            />
            <Image
              src="/youtube.svg"
              width="24"
              height="24"
              alt="Instagram link"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
