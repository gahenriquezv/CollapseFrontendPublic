import shallow from "zustand/shallow";

import useStore from "../../../store";
import PillarDetails from "../../PillarDetails";
import Sector01Canvas from "./canvas";

function Sector01() {
  const { pillar } = useStore(
    (state) => ({ pillar: state.selectedPillar }),
    shallow
  );

  return (
    <>
      <h1 className="display-5">Sector 01</h1>
      <hr />
      <Sector01Canvas />
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

export default Sector01;
