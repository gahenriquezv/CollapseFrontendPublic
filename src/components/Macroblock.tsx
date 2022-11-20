import { useEffect } from "react";

import Pillar from "../Pillar";
import useStore from "../store";
import MineCanvas from "./Canvas";
import PillarComponent from "./Canvas/PillarComponent";
import PillarDetails from "./PillarDetails";

interface MacroblockProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

interface SectorCanvasProps {
  backgroundImage: string;
  pillars: Pillar[];
}

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
