import { useCallback, useEffect, useRef } from "react";
import { Layer, Stage } from "react-konva";
import { connect, ConnectedProps } from "react-redux";
import { changeHeightAction, changeWidthAction } from "../../actions";
import { RootState } from "../../reducers";
import BackgroundImage from "./BackgroundImage";

const mapState = (state: RootState) => {
  return {
    stageHeight: state.height,
    stageWidth: state.width,
  };
};

const mapDispatch = {
  setStageHeight: changeHeightAction,
  setStageWidth: changeWidthAction,
};

const connector = connect(mapState, mapDispatch);

interface MineCanvasProps extends ConnectedProps<typeof connector> {
  backgroundImage: string;
  children: React.ReactNode;
}

const canvasStyle = {
  border: "1px solid black",
};

function MineCanvasBase(props: MineCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { stageWidth, setStageWidth, setStageHeight } = props;

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setStageWidth(containerRef.current.clientWidth);
      const height = stageWidth * (584 / 1041); // Ratio of the image
      setStageHeight(height);
    }
  }, [stageWidth, setStageHeight, setStageWidth]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // const dimensions = { stageWidth, stageHeight };

  return (
    <div ref={containerRef}>
      <Stage
        width={props.stageWidth}
        height={props.stageHeight}
        style={canvasStyle}
      >
        <Layer>
          <BackgroundImage
            url={props.backgroundImage}
            width={props.stageWidth}
          />
        </Layer>
        <Layer>{props.children}</Layer>
      </Stage>
    </div>
  );
}

const MineCanvas = connector(MineCanvasBase);

export default MineCanvas;
