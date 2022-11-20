import { useEffect, useState } from "react";
import { Image } from "react-konva";

interface BackgroundImageProps {
  url: string;
  width: number;
}

export default function BackgroundImage({ url, width }: BackgroundImageProps) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  function loadImage() {
    const img = new window.Image();
    img.src = url;

    function handleImage() {
      const ratio = (width - 5) / img.width;
      img.width = Math.floor(img.width * ratio);
      img.height = Math.floor(img.height * ratio);
      setImage(img);
    }

    img.addEventListener("load", handleImage);

    return function () {
      img.removeEventListener("load", handleImage);
    };
  }

  useEffect(loadImage, [width]);

  if (image) {
    return <Image image={image} />;
  }
  return null;
}
