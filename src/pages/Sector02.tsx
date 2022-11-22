import { Macroblock, SectorCanvas } from "../components/Macroblock";
import Pillar from "../Pillar";
import { sector02Data } from "../Pillar/fixed";

const pillars = sector02Data.map((data) => new Pillar(data));

export default function Sector02() {
  return (
    <Macroblock title="Sector 02">
      <SectorCanvas
        backgroundImage="/macrobloques/sec2.png"
        pillars={pillars}
      />
    </Macroblock>
  );
}
