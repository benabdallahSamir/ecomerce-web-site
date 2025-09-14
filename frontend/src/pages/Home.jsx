import { Link } from "react-router-dom";
import NewArrivals from "../components/common/NewArrivals.jsx";
import BestSeller from "../components/common/BestSeller.jsx";
import YouMayLike from "../components/common/YouMayLike.jsx";
import heroImg from "../assets/featured.webp";
import TopWearsForMen from "../components/common/TopWearsForMen.jsx";
import TopWearsForWomen from "../components/common/TopWearsForWomen.jsx";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-5">
      {/* header section */}
      <section className="h-screen bg-[url('./assets/rabbit-hero.webp')] bg-cover flex pt-20">
        <div className="mx-auto">
          <h1 className="text-[100px] max-[500px]:w-full max-[500px]:text-[50px] font-bold uppercase leading-none text-center text-white w-[500px]">
            vacation ready
          </h1>
          <p className="text-gray-100 text-center my-10">
            explore our vacation-ready outfit with fast worldwide shipping.
          </p>
          <button className="bg-white px-3 py-1 rounded text-black duration-300 hover:bg-gray-300 mx-auto block">
            Shop Now
          </button>
        </div>
      </section>
      {/* categories section */}
      <section className="h-screen grid grid-cols-2 max-[500px]:grid-cols-1 gap-2 px-4">
        <div className="collection-section-card bg-[url('./assets/womens-collection.webp')]">
          <div>
            <h2 className="font-bold text-lg">Women's collection</h2>
            <Link
              to={"/"}
              className="underline text-sm capitalize mt-3 text-gray-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="collection-section-card bg-[url('./assets/mens-collection.webp')]">
          <div>
            <h2 className="font-bold text-lg">Men's collection</h2>
            <Link
              to={"/"}
              className="underline text-sm capitalize mt-3 text-gray-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* new Arrivals */}
      <NewArrivals />
      {/* BEST SELLER */}
      <BestSeller />
      {/* you may also like */}
      <YouMayLike />
      {/* top wears */}
      <TopWearsForMen />
      <TopWearsForWomen />
      {/* FEATURE COLLECTION */}
      <div className="mx-10 max-lg:mx-2 bg-green-300/70 rounded h-screen max-lg:h-max flex max-lg:flex-col-reverse">
        <aside className="w-1/2 flex justify-center p-10 flex-col max-lg:w-full max-lg:text-center">
          <h5 className="font-bold">Comfort and Style</h5>
          <h1 className="font-bold text-3xl">
            Apparel made for your everyday life
          </h1>
          <p className="text-sm my-5">
            Discover high-quality, comfortable clothing effortlessly blends
            fashion and function. Designed to make you look and feel great
            everyday.
          </p>
          <button className="px-5 max-lg:mx-auto py-1 rounded-md capitalize bg-black text-white duration-300 hover:bg-gray-800 w-max cursor-pointer">
            Shop Now
          </button>
        </aside>
        <img
          src={heroImg}
          alt="feature image"
          className="w-1/2 block max-lg:w-full rounded lg:rounded-l-none max-lg:rounded-b-none"
        />
      </div>
    </main>
  );
}
