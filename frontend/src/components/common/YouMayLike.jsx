import React from "react";
import { Link } from "react-router-dom";
export default function YouMayLike() {
  const products = [
    {
      id: 1,
      name: "Classic Tee",
      price: 29.99,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 59.99,
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Sport Sneakers",
      price: 49.99,
      img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Summer Dress",
      price: 39.99,
      img: "https://images.unsplash.com/photo-1469398715555-76331a6c7b47?auto=format&fit=crop&w=400&q=80",
    },
  ];
  return (
    <div className="px-40 max-lg:px-5 max-md:px-2 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 my-10">
      {products.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="rounded"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-56 object-cover mb-3 rounded"
          />
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-sm">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
}
