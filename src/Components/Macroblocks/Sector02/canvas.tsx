import { connect, ConnectedProps, Provider } from "react-redux";
import { RootState } from "../../../reducers";
import store from "../../../store";
import MineCanvas from "../../Canvas";
import PillarComponent from "../../Canvas/PillarComponent";

const mapState = (state: RootState) => {
  return {
    stageWidth: state.width,
    stageHeight: state.height,
    pillars: state.s2s3Pillars,
  };
};

const connector = connect(mapState);

type Sector02Props = ConnectedProps<typeof connector>;

function Sector02Base(props: Sector02Props) {
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
    <MineCanvas backgroundImage={"/macrobloques/sec2.png"}>
      <Provider store={store}>{pillars()}</Provider>
    </MineCanvas>
  );
}

const Sector02Canvas = connector(Sector02Base);
export default Sector02Canvas;
