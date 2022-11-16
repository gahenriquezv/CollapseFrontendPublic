import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../reducers";
import PillarDetails from "../../PillarDetails";
import Sector03Canvas from "./canvas";

const mapState = (state: RootState) => {
  return {
    pillar: state.selectedPillar,
  };
};

const connector = connect(mapState);

function Sector03Base(props: ConnectedProps<typeof connector>) {
  const checkIfPillar = () => {
    if (props.pillar) {
      return <PillarDetails pillar={props.pillar} />;
    }
    return null;
  };

  return (
    <>
      <h1 className="display-5">Sector 03</h1>
      <hr />
      <Sector03Canvas />
      <hr />
      <ul>{checkIfPillar()} </ul>
    </>
  );
}

const Sector03 = connector(Sector03Base);

export default Sector03;
