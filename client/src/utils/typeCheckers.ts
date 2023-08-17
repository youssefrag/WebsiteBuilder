import { Heading, Text, Image } from "../store/canvas/canvas.types";

export function isHeading(
  canvas: Heading | Text | Image | null
): canvas is Heading {
  return (canvas as Heading).fontSize !== undefined;
}

export function isText(canvas: Heading | Text | Image | null): canvas is Text {
  return (canvas as Text).lineHeight !== undefined;
}

export function isImage(
  canvas: Heading | Text | Image | null
): canvas is Image {
  return (canvas as Image).imageName !== undefined;
}
