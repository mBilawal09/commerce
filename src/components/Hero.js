import React from "react";
import hero from "../img/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-white h-[620px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center upparcase"></div>
          <h1 className="text-[70px] leading-[1.1] justify-center items-center px-6 ">
            <span className="font-semibold text-gray-500">
              E-commerce Store
            </span>
            <br />
            <span className="font-light text-yellow-500">Garments, </span>
            <span className="font-light text-orange-600">Electronics and </span>
            <span className="font-light text-orange-600">Jewlery</span>
          </h1>
        </div>
        {/* image */}
        <div>
          <img className="hidden md:block px-8" src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
