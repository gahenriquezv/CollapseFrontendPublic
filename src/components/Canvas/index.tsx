import { useCallback, useEffect, useRef } from "react";
import { Layer, Stage } from "react-konva";
import shallow from "zustand/shallow";

import useStore from "../../store";
import BackgroundImage from "./BackgroundImage";

interface MineCanvasProps {
  backgroundImage: string;
  children: JSX.Element | JSX.Element[];
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
 * @returns The base canvas of the Macroblock.
 */
function MineCanvas({ backgroundImage, children }: MineCanvasProps) {
  const { setStageHeight, setStageWidth, stageWidth, stageHeight } = useStore(
    (state) => ({
      stageHeight: state.height,
      stageWidth: state.width,
      setStageWidth: state.setWidth,
      setStageHeight: state.setHeight,
    }),
    shallow
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
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
