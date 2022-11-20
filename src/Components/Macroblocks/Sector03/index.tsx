import shallow from "zustand/shallow";

import useStore from "../../../store";
import PillarDetails from "../../PillarDetails";
import Sector03Canvas from "./canvas";

function Sector03() {
  const { pillar } = useStore(
    (state) => ({ pillar: state.selectedPillar }),
    shallow
  );

  return (
    <>
      <h1 className="display-5">Sector 03</h1>
      <hr />
      <Sector03Canvas />
      <hr />
      {(() => {
        if (pillar) {
          return <PillarDetails pillar={pillar} />;
        }
        return null;
      })()}
    </>
  );
}

export default Sector03;
