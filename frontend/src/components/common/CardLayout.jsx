import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import CartItem from "../cart/CartItem";
function CardLayout({ hideCardLayout, className = "" }) {
  const items = [
    {
      id: 1,
      name: "Nike Air Max",
      count: 2,
      unitPrice: 120,
      size: "M",
      color: "Black",
      picture:
        "https://images.unsplash.com/photo-1517263904808-5dc0d6e1b8d4?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      count: 1,
      unitPrice: 150,
      size: "L",
      color: "White",
      picture:
        "https://images.unsplash.com/photo-1528701800484-905909b1c6b4?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Puma RS-X",
      count: 3,
      unitPrice: 110,
      size: "S",
      color: "Red",
      picture:
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Vans Old Skool",
      count: 1,
      unitPrice: 80,
      size: "M",
      color: "Blue",
      picture:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Converse Chuck Taylor",
      count: 2,
      unitPrice: 70,
      size: "L",
      color: "Black",
      picture:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Reebok Classic",
      count: 1,
      unitPrice: 90,
      size: "S",
      color: "White",
      picture:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      name: "New Balance 574",
      count: 2,
      unitPrice: 100,
      size: "M",
      color: "Grey",
      picture:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      name: "Fila Disruptor",
      count: 1,
      unitPrice: 95,
      size: "L",
      color: "White",
      picture:
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 9,
      name: "Asics Gel-Lyte",
      count: 1,
      unitPrice: 105,
      size: "S",
      color: "Green",
      picture:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 10,
      name: "Jordan 1 Retro",
      count: 1,
      unitPrice: 200,
      size: "M",
      color: "Red",
      picture:
        "https://images.unsplash.com/photo-1517263904808-5dc0d6e1b8d4?auto=format&fit=crop&w=400&q=80",
    },
  ];
  return (
    <motion.div
      className={`py-1 px-3 bg-white shadow fixed right-0 h-screen top-0 z-50 gap-5 overflow-x-hidden duration-300 ${className}`}
    >
      <IoIosClose
        className="w-10 h-10 ml-auto cursor-pointer"
        onClick={hideCardLayout}
      />
      <h1 className="text-lg font-semibold">Your cart :</h1>
      {/* condition must be if card is empty === true  */}
      <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 flex flex-col gap-2">
        {items.length === 0 ? (
          <h1 className="text-md">Your cart is empty.</h1>
        ) : (
          items.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-white p-3 border-t border-gray-400/50">
        <button className="w-full h-10 rounded text-white capitalize cursor-pointer duration-300 hover:bg-black/80 bg-black ">
          checkout
        </button>
        <p className="text-gray-700 text-center text-sm">
          Shipping , Taxes and discount codes calculated at checkout.
        </p>
      </div>
    </motion.div>
  );
}

export default CardLayout;
