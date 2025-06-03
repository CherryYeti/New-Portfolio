import React from "react";

interface CardProps {
  imagePath: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imagePath, title, description }) => {
  return (
    <div className="overflow-hidden h-full">
      <img src={imagePath} alt={title} className="w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#2b2238]">{title}</h3>
        <p className="text-[#2b2238]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
