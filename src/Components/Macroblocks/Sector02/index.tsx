import shallow from "zustand/shallow";

import useStore from "../../../store";
import PillarDetails from "../../PillarDetails";
import Sector02Canvas from "./canvas";

function Sector02() {
  const { pillar } = useStore(
    (state) => ({ pillar: state.selectedPillar }),
    shallow
  );

  return (
    <>
      <h1 className="display-5">Sector 02</h1>
      <hr />
      <Sector02Canvas />
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

export default Sector02;
