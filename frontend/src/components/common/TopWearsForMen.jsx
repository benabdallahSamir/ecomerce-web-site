import React from "react";
import ProductContainer from "./ProductContainer";

export default function TopWearsForMen() {
  const wears = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 19.99,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 49.99,
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Black Hoodie",
      price: 29.99,
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Checked Shirt",
      price: 24.99,
      img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Grey Sweatshirt",
      price: 27.99,
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Navy Polo Shirt",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      name: "Olive Bomber Jacket",
      price: 54.99,
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      name: "Striped Long Sleeve",
      price: 21.99,
      img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
    },
  ];
  return <ProductContainer text={"Top Wears For Men"} products={wears} />;
}
