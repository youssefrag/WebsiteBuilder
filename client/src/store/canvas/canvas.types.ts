export interface Heading {
  content: string;
  fontSize: string;
  fontType: string;
  color: string;
}

export interface Text {
  content: string;
  lineHeight: string;
  fontType: string;
  color: string;
}

export interface CanvasSliceState {
  canvas: Heading | Text | null;
}
