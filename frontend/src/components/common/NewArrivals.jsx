import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 59.99,
      image: "https://picsum.photos/seed/denim/500/500",
    },
    {
      id: 2,
      name: "Elegant Silk Dress",
      price: 89.99,
      image: "https://picsum.photos/seed/silk/500/500",
    },
    {
      id: 3,
      name: "Modern Sneakers",
      price: 74.99,
      image: "https://picsum.photos/seed/sneakers/500/500",
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      price: 24.99,
      image: "https://picsum.photos/seed/tshirt/500/500",
    },
    {
      id: 5,
      name: "Leather Handbag",
      price: 120.0,
      image: "https://picsum.photos/seed/handbag/500/500",
    },
    {
      id: 6,
      name: "Vintage Sunglasses",
      price: 39.99,
      image: "https://picsum.photos/seed/sunglasses/500/500",
    },
    {
      id: 7,
      name: "Sporty Watch",
      price: 99.99,
      image: "https://picsum.photos/seed/watch/500/500",
    },
    {
      id: 8,
      name: "Floral Maxi Skirt",
      price: 49.99,
      image: "https://picsum.photos/seed/maxiskirt/500/500",
    },
    {
      id: 9,
      name: "Woolen Scarf",
      price: 29.99,
      image: "https://picsum.photos/seed/scarf/500/500",
    },
    {
      id: 10,
      name: "Canvas Backpack",
      price: 65.0,
      image: "https://picsum.photos/seed/backpack/500/500",
    },
    {
      id: 11,
      name: "Striped Polo Shirt",
      price: 34.99,
      image: "https://picsum.photos/seed/poloshirt/500/500",
    },
    {
      id: 12,
      name: "Slim Fit Jeans",
      price: 54.99,
      image: "https://picsum.photos/seed/jeans/500/500",
    },
    {
      id: 13,
      name: "Classic Fedora Hat",
      price: 44.99,
      image: "https://picsum.photos/seed/fedora/500/500",
    },
    {
      id: 14,
      name: "Chunky Knit Sweater",
      price: 69.99,
      image: "https://picsum.photos/seed/sweater/500/500",
    },
    {
      id: 15,
      name: "Elegant Pearl Necklace",
      price: 79.99,
      image: "https://picsum.photos/seed/necklace/500/500",
    },
  ];
  const scrollRef = useRef();
  const [canScroll, setcanScroll] = useState({ left: false, right: true });
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollMouse, setcanScrollMouse] = useState(false);
  const [startX, setStartX] = useState(0);
  function onmouseDown(e) {
    setcanScrollMouse(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }
  function onmouseUpOrLeave() {
    setcanScrollMouse(false);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

  function onmouseMove(e) {
    if (!canScrollMouse) return;
    const x = e.pageX;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }
  function scroll(direction) {
    const amount = direction === "left" ? -300 : +300;
    setScrollLeft((curr) => curr + amount);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  }
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      setcanScroll({
        left: scrollLeft > 0,
        right: scrollLeft + container.clientWidth < container.scrollWidth,
      });
    }
  }, [scrollLeft]);

  return (
    <section className="w-full min-h-screen max-md:min-h-max flex flex-col gap-1 md:h-screen py-3 text-center">
      <h1 className="capitalize text-xl font-bold">explore new arrivals</h1>
      <p className="text-sm text-gray-400">
        Discover the latest style straight off the runway, freshly added to keep
        your wardrobe on the cutting edge of fashion.
      </p>
      <div className="flex items-center justify-end gap-2">
        <button
          disabled={!canScroll.left}
          onClick={() => {
            scroll("left");
          }}
        >
          <FaChevronLeft
            className={`w-8 h-8 border border-gray-400 rounded p-1 ${
              !canScroll.left
                ? "cursor-not-allowed bg-gray-200"
                : "cursor-pointer"
            }`}
          />
        </button>
        <button disabled={!canScroll.right} onClick={() => scroll("right")}>
          <FaChevronRight
            className={`w-8 h-8 border border-gray-400 rounded p-1 ${
              !canScroll.right
                ? "cursor-not-allowed bg-gray-400"
                : "cursor-pointer"
            }`}
          />
        </button>
      </div>
      <div
        className={`container mx-auto overflow-x-scroll whitespace-nowrap scrollbar-hide select-none flex space-x-6 relative ${
          canScrollMouse ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
        onMouseDown={onmouseDown}
        onMouseUp={onmouseUpOrLeave}
        onMouseLeave={onmouseUpOrLeave}
        onMouseMove={onmouseMove}
        ref={scrollRef}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[35%] max-md:min-w-[35%] max-sm:min-w-full relative min-h-[300px] bg-red-400"
          >
            <img
              src={product.image}
              alt={product.name}
              draggable={false}
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bg-white/50 w-full backdrop-blur-md text-white bottom-0 right-0 p-4">
              <Link
                to={`/product/${product.id}`}
                className="flex items-center justify-center gap-2"
              >
                <h2 className="font-bold text-lg">{product.name}</h2>
                <p className="text-sm">${product.price.toFixed(2)}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
