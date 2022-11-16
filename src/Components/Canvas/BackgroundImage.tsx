import { useEffect, useState } from "react";
import { Image } from "react-konva";

interface BackgroundImageProps {
  url: string;
  width: number;
}

export default function BackgroundImage(props: BackgroundImageProps) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const loadImage = () => {
    const img = new window.Image();
    img.src = props.url;

    const handleImage = () => {
      const ratio = (props.width - 5) / img.width;
      img.width = Math.floor(img.width * ratio);
      img.height = Math.floor(img.height * ratio);
      setImage(img);
    };

    img.addEventListener("load", handleImage);

    return () => {
      img.removeEventListener("load", handleImage);
    };
  };

  useEffect(loadImage, [props.url, props.width]);

  if (image) {
    return <Image image={image} />;
  }
  return null;
}
