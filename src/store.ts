import create from "zustand";
import Pillar from "./Pillar";

// Initial State Data

const initialHeight = 0;
const initialWidth = 0;

// Zustand Store

interface State {
  selectedPillar: Pillar | null;
  setSelectedPillar: (newPillar: Pillar | null) => void;
}

const useStore = create<State>((set) => ({
  // Selected Pillar
  selectedPillar: null,
  setSelectedPillar: (newPillar) => set({ selectedPillar: newPillar }),
}));

export default useStore;
