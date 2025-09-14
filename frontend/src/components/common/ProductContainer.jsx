import React from "react";

function ProductContainer({ text, products }) {
  return (
    <div className="px-40 max-lg:px-5 max-md:px-2 my-10">
      <h1 className="font-bold text-2xl mb-5 text-center">{text}</h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        {products.map((product) => (
          <div key={product.id} className="rounded shadow-lg p-3">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-56 object-cover mb-3 rounded"
            />
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-sm">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
