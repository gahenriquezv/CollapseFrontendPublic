import { KonvaEventObject } from "konva/lib/Node";
import { Line } from "react-konva";

interface RhomboidProps {
  x: number;
  y: number;
  height: number;
  width: number;
  value?: number;
  angle?: number;
  color?: string;
  draggable?: boolean;
  onClick?: (evt: KonvaEventObject<MouseEvent>) => void;
}

function Rhomboid({
  x,
  y,
  height,
  width,
  color,
  draggable,
  onClick,
  angle,
}: RhomboidProps) {
  angle = angle || Math.PI / 3;

  const points = [
    -height / Math.tan(angle),
    height,
    width - height / Math.tan(angle),
    height,
    width,
    0,
    0,
    0,
  ];

  return (
    <>
      <Line
        x={x}
        y={y}
        points={points}
        closed={true}
        fill={color}
        stroke="black"
        draggable={draggable}
        onClick={onClick}
        onMouseEnter={(e) => {
          const container = e.target.getStage()?.container();
          if (container) container.style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          const container = e.target.getStage()?.container();
          if (container) container.style.cursor = "default";
        }}
      />
    </>
  );
}

export default Rhomboid;
