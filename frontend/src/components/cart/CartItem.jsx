import React from "react";

export default function CartItem({ item }) {
  const [count, setCount] = React.useState(item.count);
  const handleRemove = () => {
    console.log("remove item" + item.id);
  };
  const handleQuantityChange = (newQuantity) => {
    let newCount = count + newQuantity;
    if (newCount < 1) newCount = 1;
    setCount(newCount);
  };
  return (
    <div className="py-2 border-b border-gray-400/50 flex gap-2">
      <img
        src={item.picture}
        alt={item.name}
        className="w-20 rounded object-contain"
      />
      <section className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-sm">
          size : {item.size.toUpperCase()} | color : {item.color.toLowerCase()}
        </p>
        <div className="flex item-center gap-2">
          <button
            className="cursor-pointer w-7 h-7 font-bold flex items-center justify-center border border-gray-400/70 "
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <p className="block">{count}</p>
          <button
            className="cursor-pointer w-7 h-7 font-bold flex items-center justify-center border border-gray-400/70 "
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
      </section>
      <section className="">
        <h2 className="font-semibold">$ {item.unitPrice}</h2>
        <p
          className="cursor-pointer capitalize text-sm text-1/70 hover:text-1"
          onClick={handleRemove}
        >
          remove
        </p>
      </section>
    </div>
  );
}
