import { useContext, useReducer, useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CartContext } from "@/context/CartContext";
import Image from 'next/image'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex justify-between bg-[#171717] px-8 items-center py-4">
      <div className="flex items-center">
        <Link href="/home">
          <span>
            <p className="text-white font-bold text-xl">NextJS Cart</p>
          </span>
        </Link>
      </div>
      <button
        className="text-white"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white z-50 transition duration-300 ease-in-out ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute bg-[#1717171] top-0 right-0 p-4">
          <button
            className="text-white"
            onClick={toggleSidebar}
          >
            <IoClose size={28} />
          </button>
        </div>
        <div className="flex flex-col bg-[#171717] px-6 py-5 h-full">
          <p className="text-white font-bold text-xl">Selected Items</p>
          <div className="py-10"> 

            {cartItems.map((item) => {
              return (
                <>
                  <div className="flex items-center bg-[#333333] p-2 rounded-lg mb-4">
                    <Image src={item.images[1]} width={60} height={60} alt="" />
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <p className="text-white ml-2 text-xs">{item.title}</p>
                        <p className="text-white ml-2 text-xs">$ {item.price}</p>
                      </div>
                      <MdDelete className="text-white text-xl cursor-pointer" onClick={() => removeFromCart(item.id)} />
                    </div>
                  </div>
                </>
              )
            })}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;