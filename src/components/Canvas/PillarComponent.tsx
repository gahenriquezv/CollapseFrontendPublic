import Pillar from "../../Pillar";
import useStore from "../../store";
import Rhomboid from "./Rhomboid";

interface PillarComponentProps {
  pillar: Pillar;
  stageWidth: number;
  stageHeight: number;
}

/**
 * Renders a Pillar (as a Rhomboid) given the data of the instance by calling
 * the Pillar.getJsxData method. Handles position, size, angle and color.
 * Must be used in a Layer of a React-Konva canvas.
 * @param {Pillar} props.pillar Pillar object instance
 * @param {number} props.stageHeight Height of the canvas (px)
 * @param {number} props.stageWidth Width of the canvas (px)
 * @returns A rendered pillar.
 */
function PillarComponent({
  pillar,
  stageHeight,
  stageWidth,
}: PillarComponentProps) {
  const setSelectedPillar = useStore((state) => state.setSelectedPillar);

  const { x, y, height, width, angle, color } = pillar.getJsxData();
  const xPos = x * stageWidth;
  const yPos = y * stageHeight;
  const pillarHeight = height * stageHeight;
  const pillarWidth = width * stageWidth;

  const clickHandler = () => {
    setSelectedPillar(pillar);
  };

  return (
    <Rhomboid
      x={xPos}
      y={yPos}
      height={pillarHeight}
      width={pillarWidth}
      angle={angle}
      color={color}
      onClick={clickHandler}
    />
  );
}

export default PillarComponent;
