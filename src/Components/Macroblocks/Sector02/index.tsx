import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../reducers";
import PillarDetails from "../../PillarDetails";

import Sector02Canvas from "./canvas";

const mapState = (state: RootState) => {
  return {
    pillar: state.selectedPillar,
  };
};

const connector = connect(mapState);

function Sector02Base(props: ConnectedProps<typeof connector>) {
  const checkIfPillar = () => {
    if (props.pillar) {
      return <PillarDetails pillar={props.pillar} />;
    }
    return null;
  };

  return (
    <>
      <h1 className="display-5">Sector 02</h1>
      <hr />
      <Sector02Canvas />
      <hr />
      <ul>{checkIfPillar()}</ul>
    </>
  );
}

const Sector02 = connector(Sector02Base);

export default Sector02;
