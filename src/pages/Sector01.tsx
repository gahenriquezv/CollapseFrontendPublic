import { Macroblock, SectorCanvas } from "../components/Macroblock";
import Pillar from "../Pillar";
import { sector01Data } from "../Pillar/fixed";

const pillars = sector01Data.map((data) => new Pillar(data));

export default function Sector01() {
  return (
    <Macroblock title="Sector 01">
      <SectorCanvas
        backgroundImage="/macrobloques/sec1.png"
        pillars={pillars}
      />
    </Macroblock>
  );
}
