import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectCanvas } from "../../store/canvas/canvasSlice";

import { addComponent } from "../../store/playground/playgroundSlice";

import ElementPicker from "../element-picker/element-picker.component";
import HeadingElement from "../heading-element/heading-element.component";

import { CanvasContainer, StyledButton } from "./canvas.styles";

const Canvas = () => {
  const [element, setElement] = useState<string>("heading");

  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  const handlePickElement = (
    event: React.MouseEvent<HTMLElement>,
    pickedElement: string
  ) => {
    setElement(pickedElement);
  };

  const handleAddToPlayground = () => {
    if (canvas !== null) {
      if (element === "heading") {
        if (!canvas.content) {
          alert("Content cannot be empty!");
          return;
        }
        dispatch(addComponent({ details: canvas, type: "heading" }));
        console.log(canvas);
      }
    }
  };

  return (
    <CanvasContainer>
      <ElementPicker
        element={element}
        handlePickElement={handlePickElement}
      ></ElementPicker>
      {element === "heading" && <HeadingElement />}
      <StyledButton onClick={handleAddToPlayground}>
        Add to website
      </StyledButton>
    </CanvasContainer>
  );
};

export default Canvas;
