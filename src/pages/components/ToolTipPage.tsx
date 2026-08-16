import React from "react";
import { useNavigate } from "react-router";

const ToolTipPage = () => {
  const navigate = useNavigate();

  const items = [
    { name: "Input", path: "/components/input", color: "bg-blue-600" },
    { name: "Button", path: "/components/button", color: "bg-yellow-600" },
    { name: "Card", path: "/components/card", color: "bg-pink-600" },
    { name: "Modal", path: "/components/modal", color: "bg-red-500" },
    { name: "Navbar", path: "/components/navbar", color: "bg-green-700" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-200">
      
      <div className="bg-yellow-50 p-10 rounded-2xl shadow-xl w-[420px] text-center">
        
        <h1 className="text-2xl font-bold mb-2">Tooltip Navigation</h1>
        <p className="text-gray-500 mb-8">
          Hover & click to explore components
        </p>

        <div className="flex flex-col gap-6 items-center">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              
              <button
                onClick={() => navigate(item.path)}
                className={`mt-2 px-6 py-2 text-white rounded-lg cursor-pointer 
                ${item.color} hover:scale-110 transition duration-200`}
              >
                {item.name}
              </button>

       
              <span
                className="
                absolute top-full left-1/2 -translate-x-1/2 mt-2
                opacity-0 group-hover:opacity-100
                bg-black text-white text-xs px-3 py-1
                rounded-md shadow-md transition
              "
              >
                 {item.name}
              </span>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ToolTipPage;