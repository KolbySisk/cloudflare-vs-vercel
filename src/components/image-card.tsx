"use client";

import { useState } from "react";
import Image from "next/image";

export type Image = {
  id: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export default function ImageCard({
  image,
  priority,
}: {
  image: Image;
  priority: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${
        hovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={image.download_url}
        alt=""
        className="w-full h-60 object-cover transition-opacity duration-500 group-hover:opacity-90"
        width={image.width}
        height={image.height}
        priority={priority}
      />
    </div>
  );
}
