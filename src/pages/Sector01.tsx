import { Macroblock, SectorCanvas } from "../components/Macroblock";
import useStore from "../store";

export default function Sector01() {
  const pillars = useStore((state) => state.sector01Pillars);
  return (
    <Macroblock title="Sector 01">
      <SectorCanvas
        backgroundImage="/macrobloques/sec1.png"
        pillars={pillars}
      />
    </Macroblock>
  );
}
