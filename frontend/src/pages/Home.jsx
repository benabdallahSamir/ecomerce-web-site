import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-5">
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
      <section className="h-screen grid grid-cols-2 max-[500px]:grid-cols-1 gap-2 px-4">
        <div className="collection-section-card bg-[url('./assets/womens-collection.webp')]">
          <div>
            <h2 className="font-bold text-lg">Women's collection</h2>
            <Link to={"/"} className="underline text-sm capitalize mt-3 text-gray-700">Shop Now</Link>
          </div>
        </div>
        <div className="collection-section-card bg-[url('./assets/mens-collection.webp')]">
          <div>
            <h2 className="font-bold text-lg">Men's collection</h2>
            <Link to={"/"} className="underline text-sm capitalize mt-3 text-gray-700">Shop Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
