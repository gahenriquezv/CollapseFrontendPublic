import create from "zustand";
import Pillar from "./Pillar";

// Initial State Data

const initialHeight = 0;
const initialWidth = 0;

// Zustand Store

interface State {
  height: number;
  setHeight: (newHeight: number) => void;
  width: number;
  setWidth: (newWidth: number) => void;
  selectedPillar: Pillar | null;
  setSelectedPillar: (newPillar: Pillar | null) => void;
}

const useStore = create<State>((set) => ({
  // Canvas size state
  height: initialHeight,
  setHeight: (newHeight) => set({ height: newHeight }),
  width: initialWidth,
  setWidth: (newWidth) => set({ width: newWidth }),

  // Selected Pillar
  selectedPillar: null,
  setSelectedPillar: (newPillar) => set({ selectedPillar: newPillar }),
}));

export default useStore;
