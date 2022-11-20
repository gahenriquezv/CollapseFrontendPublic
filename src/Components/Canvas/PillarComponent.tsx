import shallow from "zustand/shallow";

import Pillar from "../../Pillar";
import useStore from "../../store";
import Rhomboid from "./Rhomboid";

interface PillarComponentProps {
  pillar: Pillar;
  stageWidth: number;
  stageHeight: number;
}

function PillarComponent(props: PillarComponentProps) {
  const { setSelectedPillar } = useStore(
    (state) => ({
      setSelectedPillar: state.setSelectedPillar,
    }),
    shallow
  );

  const { x, y, height, width, angle, color } = props.pillar.getJsxData();
  const xPos = x * props.stageWidth;
  const yPos = y * props.stageHeight;
  const pillarHeight = height * props.stageHeight;
  const pillarWidth = width * props.stageWidth;

  const clickHandler = () => {
    setSelectedPillar(props.pillar);
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
