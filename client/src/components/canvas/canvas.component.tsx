import { useState } from "react";

import ElementPicker from "../element-picker/element-picker.component";
import HeadingElement from "../heading-element/heading-element.component";

import { CanvasContainer } from "./canvas.styles";

const Canvas = () => {
  const [element, setElement] = useState<string>("heading");

  const handlePickElement = (
    event: React.MouseEvent<HTMLElement>,
    pickedElement: string
  ) => {
    setElement(pickedElement);
  };
  return (
    <CanvasContainer>
      <ElementPicker
        element={element}
        handlePickElement={handlePickElement}
      ></ElementPicker>
      {element === "heading" && <HeadingElement />}
    </CanvasContainer>
  );
};

export default Canvas;
