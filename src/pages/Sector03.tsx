import { Macroblock, SectorCanvas } from "../components/Macroblock";
import Pillar from "../Pillar";
import { sector03Data } from "../Pillar/fixed";

const pillars = sector03Data.map((data) => new Pillar(data));

export default function Sector03() {
  return (
    <Macroblock title="Sector 03">
      <SectorCanvas
        backgroundImage="/macrobloques/sec3.png"
        pillars={pillars}
      />
    </Macroblock>
  );
}
