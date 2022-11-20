import { useCallback, useEffect, useRef } from "react";
import { Layer, Stage } from "react-konva";
import shallow from "zustand/shallow";

import useStore from "../../store";
import BackgroundImage from "./BackgroundImage";

interface MineCanvasProps {
  backgroundImage: string;
  children: JSX.Element | JSX.Element[];
}

const canvasStyle = {
  border: "1px solid black",
};

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
