import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({
  title = "Generative AI",
  tag = "New",
  link = "/",
  bgImage = ""
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="p-2 w-[270px] flex justify-center">
      <div
        onClick={handleClick}
        className="relative w-full h-72 rounded-xl overflow-hidden bg-cover bg-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 hover:bg-opacity-30" />

        {/* Title */}
        <div className="absolute bottom-4 left-4 z-10">
          <h2 className="text-white text-lg font-bold drop-shadow-lg">{title}</h2>
        </div>

        {/* Tag */}
        {tag && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {tag}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
