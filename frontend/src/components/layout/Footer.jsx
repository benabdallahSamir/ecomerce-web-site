import { IoLogoInstagram } from "react-icons/io";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
function Footer() {
  return (
    <>
      <footer className="gap-4 flex items-start w-screen px-10 my-10 max-[1000px]:flex-col *:w-1/4 max-[1000px]:*:w-full max-[1000px]:items-center">
        <section className="gap-2 flex-col flex overflow-hidden ">
          <h2 className="font-semibold text-lg capitalize">newsletter</h2>
          <p className="text-sm text-gray-700">
            be the first to hear about new products. exclusive events and online
            offers.
          </p>
          <p className="text-sm text-gray-700">
            sign up and get 10% off your first order
          </p>
          <div className="w-full h-10 rounded flex border border-gray-700/70">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-3/5 rounded px-2 outline-none"
            />
            <button className="w-44 rounded h-full bg-black ml-auto text-white duration-300 hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </section>
        <section>
          <h2 className="mb-4 font-semibold text-lg">Shop</h2>
          <ul className="flex gap-1 flex-col items-start text-gray-700">
            <li>men's top wear</li>
            <li>women's top wear</li>
            <li>men's bottom wear</li>
            <li>women's bottom wear</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-4 font-semibold text-lg">Support</h2>
          <ul className="flex gap-1 flex-col items-start text-gray-700">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Features</li>
          </ul>
        </section>
        <section>
          <h2 className="capitalize font-semibold mb-3">follow us</h2>
          <div className="flex gap-2 items-center mb-4">
            <IoLogoInstagram className="w-6 h-6 hover:text-black text-gray-700 duration-300 cursor-pointer" />
            <TbBrandMeta className="w-6 h-6 hover:text-black text-gray-700 duration-300 cursor-pointer" />
            <RiTwitterXLine className="w-6 h-6 hover:text-black text-gray-700 duration-300 cursor-pointer" />
          </div>
          <h2 className="capitalize font-semibold mb-2">call us</h2>
          <a
            href="tel:+213551473210"
            className="flex hover:text-black text-gray-700 duration-300 gap-2 items-center"
          >
            <CiPhone className="w-6 h-6" />
            <p>+213551473210</p>
          </a>
        </section>
      </footer>
      <div className="py-3 border-t border-gray-500/70 text-center text-sm text-gray-700">
        &copy; {new Date().getFullYear()} E-commerce Website. All rights
        reserved.
      </div>
    </>
  );
}

export default Footer;
