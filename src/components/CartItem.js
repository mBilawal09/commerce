import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const { removeFromCart, plus, minus } = useContext(CartContext);
  //destructure
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full">
      <div className="w-full min-h-[100px] flex items-center gap-x-5 ">
        <div to={`/product/${id}`}>
          <img className="max-w-[50px]" src={image} alt="" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            {/* title */}
            <div
              className="text-sm uppercase font-medium max-w-[240px] text-gray-700 hover: underline "
              to={`/product/${id}`}
            >
              {title}
            </div>
            {/* icons */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <AiOutlineCloseSquare className="text-black-500 hover:text-orange-400 transition" />
            </div>
          </div>
          <div className="bg-gray-100 flex gap-x-2 h-[32px] text-sm  ">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium ">
              <div
                onClick={() => minus(id)}
                className="flex-1 flex h-full justify-center items-center cursor-pointer text-gray-700  "
              >
                <MdOutlineRemoveCircleOutline className="h-5 w-5" />
              </div>
              <div className="h-full flex justify-center items-center px-6 ">
                {amount}
              </div>
              <div
                onClick={() => plus(id)}
                className=" text-gray-700 flex-1 flex h-full justify-center items-center cursor-pointer"
              >
                <MdOutlineAddCircleOutline className="h-5 w-5" />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-around">
              {price}
            </div>
            <div className="flex-1 flex justify-end items-center">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
