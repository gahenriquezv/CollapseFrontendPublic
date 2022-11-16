import { connect, ConnectedProps, Provider } from "react-redux";
import { RootState } from "../../../reducers";
import store from "../../../store";

import MineCanvas from "../../Canvas";
import PillarComponent from "../../Canvas/PillarComponent";

const mapState = (state: RootState) => {
  return {
    stageWidth: state.width,
    stageHeight: state.height,
    pillars: state.n1s1Pillars,
  };
};

const connector = connect(mapState);

type Sector01Props = ConnectedProps<typeof connector>;

function Sector01Base(props: Sector01Props) {
  function pillars() {
    return props.pillars.map((pillar) => {
      return (
        <PillarComponent
          stageHeight={props.stageHeight}
          stageWidth={props.stageWidth}
          pillar={pillar}
          key={pillar.key}
        />
      );
    });
  }

  return (
    <MineCanvas backgroundImage={"/macrobloques/sec1.PNG"}>
      <Provider store={store}>{pillars()}</Provider>
    </MineCanvas>
  );
}

const Sector01Canvas = connector(Sector01Base);

export default Sector01Canvas;
