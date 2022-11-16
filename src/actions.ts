import Pillar from "./Pillar";

const CHANGE_WIDTH = "CHANGE_WIDTH";
const CHANGE_HEIGHT = "CHANGE_HEIGHT";
const SELECT_PILLAR = "SELLECT_PILLAR";

export interface ChangeWidthAction {
  type: typeof CHANGE_WIDTH;
  payload: number;
}

export interface ChangeHeightAction {
  type: typeof CHANGE_HEIGHT;
  payload: number;
}

export interface SelectPillarAction {
  type: typeof SELECT_PILLAR;
  payload: Pillar | null;
}

export type Action =
  | ChangeHeightAction
  | ChangeWidthAction
  | SelectPillarAction;

export const changeWidthAction = (width: number): ChangeWidthAction => {
  return {
    type: CHANGE_WIDTH,
    payload: width,
  };
};

export const changeHeightAction = (height: number): ChangeHeightAction => {
  return {
    type: CHANGE_HEIGHT,
    payload: height,
  };
};

export const selectPillarAction = (
  pillar: Pillar | null
): SelectPillarAction => {
  return {
    type: SELECT_PILLAR,
    payload: pillar,
  };
};
