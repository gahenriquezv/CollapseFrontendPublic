import { useCallback, useEffect, useRef } from "react";
import { Layer, Stage } from "react-konva";

import BackgroundImage from "./BackgroundImage";

interface MineCanvasProps {
  backgroundImage: string;
  children: JSX.Element | JSX.Element[];
  stageWidth: number;
  stageHeight: number;
  setStageWidth?: (width: number) => void;
  setStageHeight?: (height: number) => void;
}

// CSS
const canvasStyle = {
  border: "1px solid black",
};

/**
 * Renders the base layer of the macroblock. Handles resizing and the background image.
 * Children must be compatible with React-Konva Layer
 * @param {string} props.backgroundImage URL to the canvas background image
 * @param {JSX.Element | JSX.Element[]} props.children Elements to add in a React-Konva canvas layer
 * @param {number} props.stageWidth width (px) of the canvas
 * @param {number} props.stageHeight height (px) of the canvas
 * @param {(number) => void} props.setStageWidth function to set the width (px) of the stage. Optional.
 * @param {(number) => void} props.setStageHeight function to set the height (px) of the stage. Optional.

 * @returns The base canvas of the Macroblock.
 */
function MineCanvas({
  backgroundImage,
  children,
  stageWidth,
  setStageWidth,
  stageHeight,
  setStageHeight,
}: MineCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (containerRef.current && setStageWidth && setStageHeight) {
      setStageWidth(containerRef.current.clientWidth);
      const height = stageWidth * (584 / 1041); // Ratio of the image
      setStageHeight(height);
    }
  }, [stageWidth]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div ref={containerRef}>
      <Stage width={stageWidth} height={stageHeight} style={canvasStyle}>
        <Layer>
          <BackgroundImage url={backgroundImage} width={stageWidth} />
        </Layer>
        <Layer>{children}</Layer>
      </Stage>
    </div>
  );
}

export default MineCanvas;
