import { PillarData } from "./fixed";

import { sector01Coordinates } from "./fixed";
import { sector02Coordinates } from "./fixed";
import { sector03Coordinates } from "./fixed";

type Point = { x: number; y: number };
type Dimension = { height: number; width: number };
type Angle = { angle: number };
type Color = { color: string };

type PillarJSXData = Point & Dimension & Angle & Color;

/**
 * Represents a Pillar object, helps creating the JSX data for rendering the PillarComponent.
 */
export default class Pillar {
  /**
   *
   * @param data Data for the Pillar object, satisfies the PillarData interface
   */
  constructor(public data: PillarData) {}

  get id() {
    return this.data.id;
  }

  /**
   * Generates a key to help rendering the object in the PillarComponent
   */
  get key() {
    return `${this.data.zone}_${this.id}`;
  }

  /**
   * Calculates the point in the canvas where the PillarComponent should be rendered.
   * Uses fixed data.
   * @returns Point in where the PillarComponent should be rendered
   */
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

  /**
   * Calculates the size of the pillar depending on the sector. Uses fixed data.
   * @returns Dimensions of the PillarComponent depending on the sector of the Pillar
   */
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

  /**
   * Calculates the angle of the pillar to help rendering the PillarComponent. Uses fixed data.
   * @returns Angle (in radians) of the pillar
   */
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

  /**
   * Calculates a rgb color (in string format) depending of the collapse chance. Uses fixed data.
   * @returns Color of the collapse chance.
   */
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

  /**
   * Calculates the coordinates, dimension, angle and color to be used in the PillarComponent.
   * Uses a lot of fixed data.
   * @returns Object with all the necesary data for the PillarComponent to be rendered.
   */
  public getJsxData = (): PillarJSXData => {
    return {
      ...this.getCoordinates(),
      ...this.getDimension(),
      ...this.getAngle(),
      ...this.getColor(),
    };
  };
}
