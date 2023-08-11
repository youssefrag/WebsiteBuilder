import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { selectCanvas } from "../../store/canvas/canvasSlice";

import { addComponent } from "../../store/playground/playgroundSlice";

import ElementPicker from "../element-picker/element-picker.component";
import HeadingElement from "../heading-element/heading-element.component";
import TextElement from "../text-element/text-element.component";

import { CanvasContainer, StyledButton } from "./canvas.styles";

import { CanvasPropsType } from "./canvas.types";

const Canvas = (props: CanvasPropsType) => {
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
        dispatch(
          addComponent({
            details: canvas,
            type: "heading",
            componentId: uuidv4(),
          })
        );
        props.closeDrawer();
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
      {element === "text" && <TextElement />}
      <StyledButton onClick={handleAddToPlayground}>
        Add to website
      </StyledButton>
    </CanvasContainer>
  );
};

export default Canvas;
