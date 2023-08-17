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

export interface Image {
  imageName: string;
  imageUrl: string;
  width: string;
}

export interface CanvasSliceState {
  canvas: Heading | Text | Image | null;
}
