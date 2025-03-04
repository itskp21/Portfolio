"use client";

import React from "react";

interface CertificationProps {
  name: string;
  image: string;
  url: string;
}

const Certification: React.FC<CertificationProps> = ({ name, image, url }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md text-center bg-white">
      <img src={image} alt={name} className="w-40 h-40 mx-auto rounded-lg object-cover" />
      <h3 className="text-lg font-bold mt-3">{name}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline block mt-2"
      >
        View Certification
      </a>
    </div>
  );
};

export default Certification;