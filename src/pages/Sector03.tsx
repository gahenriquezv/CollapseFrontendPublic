import { Macroblock, SectorCanvas } from "../components/Macroblock";
import useStore from "../store";

export default function Sector03() {
  const pillars = useStore((state) => state.sector03Pillars);
  return (
    <Macroblock title="Sector 03">
      <SectorCanvas
        backgroundImage="/macrobloques/sec3.png"
        pillars={pillars}
      />
    </Macroblock>
  );
}
