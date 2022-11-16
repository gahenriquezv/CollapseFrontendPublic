import { connect, ConnectedProps, Provider } from "react-redux";
import { RootState } from "../../../reducers";
import store from "../../../store";
import MineCanvas from "../../Canvas";
import PillarComponent from "../../Canvas/PillarComponent";

const mapState = (state: RootState) => {
  return {
    stageWidth: state.width,
    stageHeight: state.height,
    pillars: state.n2n3Pillars,
  };
};

const connector = connect(mapState);

type Sector03Props = ConnectedProps<typeof connector>;

function Sector03Base(props: Sector03Props) {
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
    <MineCanvas backgroundImage={"/macrobloques/sec3.png"}>
      <Provider store={store}>{pillars()}</Provider>
    </MineCanvas>
  );
}

const Sector03Canvas = connector(Sector03Base);

export default Sector03Canvas;
