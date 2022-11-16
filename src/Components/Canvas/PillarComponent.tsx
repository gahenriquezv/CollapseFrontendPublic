import { connect, ConnectedProps } from "react-redux";
import { selectPillarAction } from "../../actions";
import Pillar from "../../Pillar";
import { RootState } from "../../reducers";
import Rhomboid from "./Rhomboid";

const mapState = (state: RootState) => {
  return {
    selectedPillar: state.selectedPillar,
  };
};

const mapDispatch = {
  setSelectedPillar: selectPillarAction,
};

const connector = connect(mapState, mapDispatch);

interface PillarComponentProps extends ConnectedProps<typeof connector> {
  pillar: Pillar;
  stageWidth: number;
  stageHeight: number;
}

function PillarComponentBase(props: PillarComponentProps) {
  const { x, y, height, width, angle, color } = props.pillar.getJsxData();
  const xPos = x * props.stageWidth;
  const yPos = y * props.stageHeight;
  const pillarHeight = height * props.stageHeight;
  const pillarWidth = width * props.stageWidth;

  const clickHandler = () => {
    props.setSelectedPillar(props.pillar);
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

const PillarComponent = connector(PillarComponentBase);
export default PillarComponent;
