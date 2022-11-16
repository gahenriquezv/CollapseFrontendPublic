import Pillar from "../Pillar";
import WaterfallChart from "./WaterfallChart";

interface SelectedPillarProps {
  pillar: Pillar;
}

function PillarDetails({ pillar }: SelectedPillarProps) {
  if (pillar === null || pillar === undefined) {
    return null;
  }

  return (
    <>
      <p className="lead">{`Probabilidad del ${(pillar.data.chance * 100).toPrecision(3)}% de colapso`}</p>
      <WaterfallChart instance={pillar} />
    </>
  );
}

export default PillarDetails;