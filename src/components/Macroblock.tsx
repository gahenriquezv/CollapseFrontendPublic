import { useEffect } from "react";

import Pillar from "../Pillar";
import useStore from "../store";
import MineCanvas from "./Canvas";
import PillarComponent from "./Canvas/PillarComponent";
import PillarDetails from "./PillarDetails";

interface MacroblockProps {
  title: string;
  children: JSX.Element;
}

interface SectorCanvasProps {
  backgroundImage: string;
  pillars: Pillar[];
}

/**
 * Renders the full canvas of the Macroblock.
 * @param {string} props.backgroundImage URL to the background image
 * @param {Pillar[]} props.pillars Array of Pillar instances to be rendered.
 * @returns Complete Canvas with every pillar included plus the background image.
 */
export function SectorCanvas({ backgroundImage, pillars }: SectorCanvasProps) {
  const stageWidth = useStore((state) => state.width);
  const stageHeight = useStore((state) => state.height);

  return (
    <MineCanvas backgroundImage={backgroundImage}>
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

/**
 * Component for the main Macroblock. Only includes the title and the details (if available).
 * @param {string} props.title Title of the canvas. Will be rendered as a heading element.
 * @param {JSX.Element} props.children A SectorCanvas component with the necesary data included.
 * @returns The main Macroblock component.
 */
export function Macroblock({ title, children }: MacroblockProps) {
  const setSelectedPillar = useStore((state) => state.setSelectedPillar);

  useEffect(function () {
    return function () {
      setSelectedPillar(null);
    };
  });

  return (
    <>
      <h1 className="display-5">{title}</h1>
      <hr />
      {children}
      <hr />
      <PillarDetails />
    </>
  );
}
