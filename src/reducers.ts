import { combineReducers } from "redux";
import { Action } from "./actions";
import Pillar from "./Pillar";
import { sector01Data, sector02Data, sector03Data } from "./Pillar/fixedData";

const initialHeight = 0;
const initialWidth = 0;

const n1s1Pillars = sector01Data.map((data) => new Pillar(data));
const n2n3Pillars = sector02Data.map((data) => new Pillar(data));
const s2s3Pillars = sector03Data.map((data) => new Pillar(data));

export const heightReducer = (state: number = initialHeight, action: Action): number => {
  if (action.type === "CHANGE_HEIGHT") {
    return action.payload;
  }
  return state;
};

export const widthReducer = (state: number = initialWidth, action: Action): number => {
  if (action.type === "CHANGE_WIDTH") {
    return action.payload;
  }
  return state;
};

export const n1s1PillarsReducer = (state: Pillar[] = n1s1Pillars, action: Action): Pillar[] => {
  return state;
};

export const n2n3PillarsReducer = (state: Pillar[] = n2n3Pillars, action: Action): Pillar[] => {
  return state;
};

export const s2s3PillarsReducer = (state: Pillar[] = s2s3Pillars, action: Action): Pillar[] => {
  return state;
};

export const sellectedPillar = (state: Pillar | null = null, action: Action) => {
  if (action.type === "SELLECT_PILLAR") {
    return action.payload;
  }
  return null;
};

const reducers = combineReducers({
  height: heightReducer,
  width: widthReducer,
  n1s1Pillars: n1s1PillarsReducer,
  n2n3Pillars: n2n3PillarsReducer,
  s2s3Pillars: s2s3PillarsReducer,
  selectedPillar: sellectedPillar,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
