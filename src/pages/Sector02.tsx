import { Macroblock, SectorCanvas } from "../components/Macroblock";
import useStore from "../store";

export default function Sector02() {
  const pillars = useStore((state) => state.sector02Pillars);
  return (
    <Macroblock title="Sector 02">
      <SectorCanvas
        backgroundImage="/macrobloques/sec2.png"
        pillars={pillars}
      />
    </Macroblock>
  );
}
