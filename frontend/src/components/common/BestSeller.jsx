import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function BestSeller() {
  const is = {
    id: 1,
    name: "Best Seller Product",
    gallery: [
      "https://picsum.photos/id/1015/400/300",
      "https://picsum.photos/id/1016/400/300",
      "https://picsum.photos/id/1018/400/300",
      "https://picsum.photos/id/1020/400/300",
    ],
    price: 49.99,
    description:
      "A high-quality best seller product with excellent features and design.",
    color: ["#FF5733", "#33C1FF", "#28A745"],
    characteristic: ["Cotton", "200g", "Made in USA"],
    sizes: ["M", "L", "XL"],
  };

  const [isAdding, setIsAdding] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(is.gallery[0]);
  const [counter, setCounter] = useState(0);
  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      toast.success("Product added to cart");
      setIsAdding(false);
    }, 1000);
  };
  useEffect(() => {
    setCurrentImage(is.gallery[currentImageIndex]);
  }, [currentImageIndex]);
  return (
    <div className="flex max-md:flex-col max-md:*:w-full max-md:*:max-w-[350px] gap-2 px-[20%] w-screen max-sm:px-[5%]">
      <div className="flex-3 flex gap-2 max-md:flex-col-reverse">
        {/* gallery */}
        <div className="flex md:flex-col max-md:justify-center gap-2">
          {is.gallery.map((img, index) => (
            <button
              key={"galery" + index}
              className={`w-10 h-10 ${
                currentImageIndex === index
                  ? "border border-gray-500 opacity-60"
                  : "cursor-pointer"
              }`}
              disabled={currentImageIndex === index}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className=" size-full object-cover border border-gray-300"
              />
            </button>
          ))}
        </div>
        {/* main img */}
        <div className="grow">
          <img
            src={currentImage}
            alt={`Product Image ${currentImageIndex + 1}`}
            className="flex-10 w-full h-full object-cover rounded"
          />
        </div>
      </div>
      {/* details */}
      <div className=" p-5 flex flex-col gap-3 flex-2">
        <h1 className="text-xl font-bold max-md:text-center">{is.name}</h1>
        <p className="text-md text-gray-500">$ {is.price}</p>
        <p className="text-sm text-gray-500 max-md:text-center">
          {is.description}
        </p>
        {/* color */}
        <p className="text-sm capitalize text-gray-500">color :</p>
        <div className="flex gap-2 items-center">
          {is.color.map((color, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full border border-gray-900 cursor-pointer`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        {/* size */}
        <p className="text-sm capitalize text-gray-500">size :</p>
        <div className="flex gap-2 items-center">
          {is.sizes.map((size, index) => (
            <div
              key={index}
              className={`w-7 h-7 rounded border border-gray-300 flex items-center justify-center cursor-pointer`}
            >
              {size}
            </div>
          ))}
        </div>
        {/* counter */}
        <p className="text-md capitalize text-gray-500">quantity :</p>
        <div className="flex items-center rounded">
          <button
            disabled={counter === 0}
            onClick={() => {
              setCounter((curr) => curr - 1);
            }}
            className="cursor-pointer px-2 py-1 rounded rounded-r-none flex items-center justify-center bg-gray-400 text-white disabled:cursor-not-allowed"
          >
            -
          </button>
          <p className="px-2 min-h-4">{counter}</p>
          <button
            onClick={() => {
              setCounter((curr) => curr + 1);
            }}
            className="cursor-pointer px-2 py-1 rounded rounded-l-none flex items-center justify-center bg-gray-400 text-white"
          >
            +
          </button>
        </div>
        {/* button add to cart */}
        <button
          disabled={counter === 0 || isAdding}
          onClick={() => handleAddToCart()}
          className="rounded bg-black hover:bg-gray-800 hover:text-gray-500 py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 text-white font-semibold uppercase duration-300"
        >
          {isAdding ? "adding ..." : "add to cart"}
        </button>
        <p className="text-md capitalize text-gray-500">quantity :</p>
        <div className="grid grid-cols-2 gap-3">
          {is.characteristic.map((e, index) => (
            <p className="max-w-[300px] block" key={"characteristic" + index}>
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
