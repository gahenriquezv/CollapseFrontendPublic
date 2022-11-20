import useStore from "../store";
import WaterfallChart from "./WaterfallChart";

function PillarDetails() {
  const selectedPillar = useStore((state) => state.selectedPillar);

  if (selectedPillar === null) {
    return null;
  }

  return (
    <>
      <p className="lead">{`Probabilidad del ${(
        selectedPillar.data.chance * 100
      ).toPrecision(3)}% de colapso`}</p>
      <WaterfallChart instance={selectedPillar} />
    </>
  );
}

export default PillarDetails;
