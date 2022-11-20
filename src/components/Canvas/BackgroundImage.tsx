import { useEffect, useState } from "react";
import { Image } from "react-konva";

interface BackgroundImageProps {
  url: string;
  width: number;
}

/**
 * ReactKonva Layer. Renders the image (with the correct size) on the canvas.
 * @param {string} props.url URL of the background image
 * @param {number} props.width Width of the canvas where the image will be rendered
 * @returns ReactKonva Image component.
 */
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
