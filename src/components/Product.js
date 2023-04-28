import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addcart } = useContext(CartContext);
  // console.log(product);
  const { id, image, category, rating, title, price } = product;
  return (
    <div>
      <div className="border border-[gray] h-[240px] mb-4 mt-6 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* img */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] transition duration-500 ease-in-out transform hover:scale-110 "
              src={image}
              alt=""
            />
          </div>
          {/* buttons */}
          <div className="absolute top-2 right-2 bg-orange-600 flex items-center justify-center gap-y-2 opacity-0 group-hover:right-5 group-hover:opacity-100 transition-all">
            <button onClick={() => addcart(product, id)}>
              <div className="flex justify-center items-center text-white  w-8 h-8  ">
                <BsPlus className="text-3xl " />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-8 h-8 bg-gray-700 flex justify-center items-center text-white  drop-shadow-xl "
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* category,title,prices */}
      <div>
        <div className="text-sm capitalize text-gray-500  ">{category}</div>
        <Link to={`/products/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div>
          {rating.rate} out of {rating.count} reviews
        </div>
        <div className="font-bold text-sm capitalize text-orange-500">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default Product;
