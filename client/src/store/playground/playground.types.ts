import { Heading } from "../canvas/canvas.types";

export interface Component {
  type: string;
  details: Heading;
}

export interface PlaygroundSliceState {
  playground: Component[];
}
