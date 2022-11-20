import useStore from "../store";
import WaterfallChart from "./WaterfallChart";

/**
 * Renders the text with the collapse probability plus a waterfall diagram with the causes, given a selected
 * pillar from the store.
 * @returns The details of the selected pillar, null if the is no selected pillar.
 */
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
