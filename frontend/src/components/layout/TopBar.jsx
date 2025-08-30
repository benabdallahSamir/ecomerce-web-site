import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
export default function TopBar() {
  return (
    <section className="bg-1 text-white  py-3 px-4 flex justify-between items-center">
      <div className="flex gap-2 max-sm:hidden *:transition-colors *:duration-300">
        <a href="#" className="hover:text-gray-500">
          <TbBrandMeta className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-gray-500">
          <IoLogoInstagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-gray-500">
          <RiTwitterXLine className="w-5 h-5" />
        </a>
      </div>
      <div className="text-sm text-center flex-grow ">
        <span>we ship worldwide - fast and reliable shipping!</span>
      </div>
      <div className="text-sm text-center transition-colors duration-300 hover:text-gray-500 max-sm:hidden">
        <a href="tel:+213551473210">+213551473210</a>
      </div>
    </section>
  );
}
