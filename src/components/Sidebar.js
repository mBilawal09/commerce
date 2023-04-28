import React, { useContext } from "react";
import CartItem from "../components/CartItem";

//import SIDEBAR context
import { SidebarContext } from "../contexts/SidebarContext";
//import cartcontext
import { CartContext } from "../contexts/CartContext";

import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const Sidebar = () => {
  // console.log(useContext(CartContext));
  const { Open, handleClose } = useContext(SidebarContext);
  const { cart, deleteCart, total } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 ${
        Open ? "right-0" : "-right-full"
      }  w-full bg-white shadow-2xl top-0 h-full md:w-[35vw] xl:max-w-[30vw] transition-all  duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold text-orange-600">
          Cart (0)
        </div>

        <div
          onClick={handleClose}
          className="cursor-pointer justify-center items-center flex fill-orange-600 "
        >
          <BiRightArrowAlt className="w-6 h-6 text-orange-600" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="bg-gray-100 w-full flex justify-between px-10 items-center  absolute bottom-0">
        <div>
          <span>Total:</span> $ {parseFloat(total).toFixed(2)}
        </div>
        <div
          onClick={deleteCart}
          className="cursor-pointer py-4 bg-orange-500 text-white w-8 h-8 justify-center items-center text-xl flex "
        >
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
