import { KonvaEventObject } from "konva/lib/Node";
import { Line } from "react-konva";

interface RhomboidProps {
  x: number;
  y: number;
  height: number;
  width: number;
  color: string;
  onClick: (evt: KonvaEventObject<MouseEvent>) => void;
  angle: number;
}

/**
 * Renders a Rhomboid.
 * @param {number} props.x x position (px) of the rhomboid in the canvas.
 * @param {number} props.y y position (px) of the rhomboid in the canvas.
 * @param {number} props.height height (px) of the rhomboid.
 * @param {number} props.width width (px) if the rhomboid.
 * @param {string} props.color Color of the rhomboid (fill) in css format.
 * @param {function} props.onClick MouseEvent handler callback that will be called when clicking the rhomboid.
 * @param {number} props.angle Angle of the rhomboid (in radians).
 * @returns A React-Konva canvas layer with the shape of a Rhomboid
 */
function Rhomboid({
  x,
  y,
  height,
  width,
  color,
  onClick,
  angle,
}: RhomboidProps) {
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
    <Line
      x={x}
      y={y}
      points={points}
      closed={true}
      fill={color}
      stroke="black"
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
  );
}

export default Rhomboid;
