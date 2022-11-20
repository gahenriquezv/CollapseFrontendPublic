import Pillar from "../../Pillar";
import useStore from "../../store";
import Rhomboid from "./Rhomboid";

interface PillarComponentProps {
  pillar: Pillar;
  stageWidth: number;
  stageHeight: number;
}

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
