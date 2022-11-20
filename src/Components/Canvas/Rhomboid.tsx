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

function Rhomboid(props: RhomboidProps) {
  const angle = props.angle || Math.PI / 3;

  const { x, y, height, width } = props;

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
        fill={props.color}
        stroke="black"
        draggable={props.draggable}
        onClick={props.onClick}
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
