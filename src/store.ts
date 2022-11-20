import create from "zustand";
import Pillar from "./Pillar";
import { sector01Data, sector02Data, sector03Data } from "./Pillar/fixedData";

// Initial State Data

const initialHeight = 0;
const initialWidth = 0;

const sector01Pillars = sector01Data.map((data) => new Pillar(data));
const sector02Pillars = sector03Data.map((data) => new Pillar(data)); // Oopsie
const sector03Pillars = sector02Data.map((data) => new Pillar(data)); // Whoopsie

// Zustand Store

interface State {
  height: number;
  setHeight: (newHeight: number) => void;
  width: number;
  setWidth: (newWidth: number) => void;
  sector01Pillars: Pillar[];
  sector02Pillars: Pillar[];
  sector03Pillars: Pillar[];
  selectedPillar: Pillar | null;
  setSelectedPillar: (newPillar: Pillar | null) => void;
}

const useStore = create<State>((set) => ({
  // Canvas size state
  height: initialHeight,
  setHeight: (newHeight) => set({ height: newHeight }),
  width: initialWidth,
  setWidth: (newWidth) => set({ width: newWidth }),

  // Pillars global state
  sector01Pillars,
  sector02Pillars,
  sector03Pillars,

  // Selected Pillar
  selectedPillar: null,
  setSelectedPillar: (newPillar) => set({ selectedPillar: newPillar }),
}));

export default useStore;
