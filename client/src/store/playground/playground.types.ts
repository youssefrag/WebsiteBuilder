import { Heading, Text } from "../canvas/canvas.types";

export interface Component {
  type: string;
  details: Heading | Text;
  componentId: string;
}

export interface PlaygroundSliceState {
  playground: Component[];
}
