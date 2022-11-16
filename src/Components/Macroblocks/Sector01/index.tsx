import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../reducers";
import PillarDetails from "../../PillarDetails";
import Sector01Canvas from "./canvas";

const mapState = (state: RootState) => {
  return {
    pillar: state.selectedPillar,
  };
};

const connector = connect(mapState);

function Sector01Base(props: ConnectedProps<typeof connector>) {
  const checkIfPillar = () => {
    if (props.pillar) {
      return <PillarDetails pillar={props.pillar} />;
    }
    return null;
  };

  return (
    <>
      <h1 className="display-5">Sector 01</h1>
      <hr />
      <Sector01Canvas />
      <hr />
      {checkIfPillar()}
    </>
  );
}

const Sector01 = connector(Sector01Base);

export default Sector01;
