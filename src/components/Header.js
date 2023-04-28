import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg";

const Header = () => {
  const { Open, setOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setisActive] = useState(false);
  //event listen
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    });
  });

  return (
    <div
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed z-10 transition-all w-full`}
    >
      <div
        className="container mx-auto flex 
    justify-between items-center h-12 px-4"
      >
        <Link to={"/"}>
          <div>
            <img className="w-[80px] text-white" src={Logo} alt="" />
          </div>
        </Link>
        <div className="text-white">Header</div>
        <div
          className="cursor-pointer flex relative max-w-[50px"
          onClick={() => setOpen(!Open)}
        >
          <AiOutlineShoppingCart className="w-6 h-6   " />
          <div
            className="bg-orange-500 absolute -right-2 -bottom-2 text-[12px]
        w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
