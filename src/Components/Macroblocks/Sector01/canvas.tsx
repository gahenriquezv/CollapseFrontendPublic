import shallow from "zustand/shallow";

import useStore from "../../../store";
import MineCanvas from "../../Canvas";
import PillarComponent from "../../Canvas/PillarComponent";

function Sector01Canvas() {
  const { pillars, stageWidth, stageHeight } = useStore(
    (state) => ({
      pillars: state.sector01Pillars,
      stageWidth: state.width,
      stageHeight: state.height,
    }),
    shallow
  );

  return (
    <MineCanvas backgroundImage={"/macrobloques/sec1.PNG"}>
      {pillars.map((pillar) => {
        return (
          <PillarComponent
            stageHeight={stageHeight}
            stageWidth={stageWidth}
            pillar={pillar}
            key={pillar.key}
          />
        );
      })}
    </MineCanvas>
  );
}

export default Sector01Canvas;
