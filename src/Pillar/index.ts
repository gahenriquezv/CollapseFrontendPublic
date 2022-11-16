import { PillarData } from "./PillarDataType";

import { sector01Coordinates } from "./sector01/fixed";
import { sector03Coordinates } from "./sector03/fixed";
import { sector02Coordinates } from "./sector02/fixed";

type Point = { x: number; y: number };
type Dimension = { height: number; width: number };
type Angle = { angle: number };
type Color = { color: string };

type JsxData = Point & Dimension & Angle & Color;

export default class Pillar {
  constructor(public data: PillarData) {}

  get id() {
    return this.data.id;
  }

  get key() {
    return `${this.data.zone}_${this.id}`;
  }

  private getCoordinates = (): Point => {
    switch (this.data.zone) {
      case "sector01":
        return sector01Coordinates[this.id - 1];
      case "sector02":
        return sector02Coordinates[this.id - 123];
      case "sector03":
        return sector03Coordinates[this.id - 239];
      default:
        throw new Error("Invalid zone");
    }
  };

  private getDimension = (): Dimension => {
    switch (this.data.zone) {
      case "sector01":
        return { height: 0.08689854452054795, width: 0.0203125 };
      case "sector02":
        return { height: 0.08689854452054795, width: 0.0203125 };
      case "sector03":
        return { height: 0.08689854452054795, width: 0.0203125 };
      default:
        throw new Error("Invalid zone");
    }
  };

  private getAngle = (): Angle => {
    switch (this.data.zone) {
      case "sector01":
        return { angle: Math.PI / 3 };
      case "sector02":
        return { angle: Math.PI / 3 };
      case "sector03":
        return { angle: (2 * Math.PI) / 3 };
      default:
        throw new Error("Invalid zone");
    }
  };

  private getColor = (): Color => {
    if (this.data.chance < 0.1) return { color: "rgb(99, 190, 123)" };
    if (this.data.chance < 0.2) return { color: "rgb(255, 235, 132)" };
    if (this.data.chance < 0.3) return { color: "rgb(255, 219, 129)" };
    if (this.data.chance < 0.4) return { color: "rgb(253, 192, 124)" };
    if (this.data.chance < 0.5) return { color: "rgb(253, 187, 123)" };
    if (this.data.chance < 0.6) return { color: "rgb(252, 170, 120)" };
    if (this.data.chance < 0.7) return { color: "rgb(251, 154, 117)" };
    if (this.data.chance < 0.8) return { color: "rgb(250, 138, 114)" };
    if (this.data.chance < 0.9) return { color: "rgb(249, 122, 111)" };
    if (this.data.chance < 1) return { color: "rgb(248, 105, 107)" };
    throw new Error("Invalid chance");
  };

  public getJsxData = (): JsxData => {
    return {
      ...this.getCoordinates(),
      ...this.getDimension(),
      ...this.getAngle(),
      ...this.getColor(),
    };
  };
}
