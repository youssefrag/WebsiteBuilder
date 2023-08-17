import { Heading, Text, Image } from "../canvas/canvas.types";

export interface Component {
  type: string;
  details: Heading | Text | Image;
  componentId: string;
}

export interface PlaygroundSliceState {
  playground: Component[];
}
