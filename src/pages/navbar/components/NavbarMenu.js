import { useState } from "react";

export function NavbarMenu() {
  const [activeItem, setActiveItem] = useState("bosh_sahifa");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="font-inter h-auto md:h-[100px] flex flex-col md:flex-row justify-center md:justify-between items-center w-full bg-purple-800 shadow-md px-4 md:px-10 py-4">
      {/* <h1 className="text-3xl md:text-5xl text-yellow-500 font-bold mb-4 md:mb-0">
        Dream Edu
      </h1> */}
      <img style={{borderRadius:'50%'}} width={70} height={70} src="/images/logo-black.png" alt=""/>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <a
          href="#main"
          onClick={() => handleItemClick("bosh_sahifa")}
          className={`text-white font-semibold text-lg cursor-pointer transition-all duration-300 
          ${
            activeItem === "bosh_sahifa"
              ? "border-b-4 border-white pb-1"
              : "hover:text-purple-200"
          }`}
        >
          Bosh sahifa
        </a>
        <a
          href="#about-us"
          onClick={() => handleItemClick("biz_haqimizda")}
          className={`text-white font-semibold text-lg cursor-pointer transition-all duration-300 
          ${
            activeItem === "biz_haqimizda"
              ? "border-b-4 border-white pb-1"
              : "hover:text-purple-200"
          }`}
        >
          Biz haqimizda
        </a>
        <p
          onClick={() => handleItemClick("kurslar")}
          className={`text-white font-semibold text-lg cursor-pointer transition-all duration-300 
          ${
            activeItem === "kurslar"
              ? "border-b-4 border-white pb-1"
              : "hover:text-purple-200"
          }`}
        >
          Kurslar
        </p>
        <a
          href="#contact"
          onClick={() => handleItemClick("kontakt")}
          className={`text-white font-semibold text-lg cursor-pointer transition-all duration-300 
          ${
            activeItem === "kontakt"
              ? "border-b-4 border-white pb-1"
              : "hover:text-purple-200"
          }`}
        >
          Kontakt
        </a>
      </div>
    </div>
  );
}
