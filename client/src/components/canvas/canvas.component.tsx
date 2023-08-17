import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { selectCanvas, editCanvas } from "../../store/canvas/canvasSlice";

import { addComponent } from "../../store/playground/playgroundSlice";

import ElementPicker from "../element-picker/element-picker.component";
import HeadingElement from "../heading-element/heading-element.component";
import TextElement from "../text-element/text-element.component";
import ImageElement from "../image-element/image-element.component";

import { CanvasContainer, StyledButton } from "./canvas.styles";

import { CanvasPropsType } from "./canvas.types";

import { Heading, Text, Image } from "../../store/canvas/canvas.types";

import { isHeading, isText } from "../../utils/typeCheckers";

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

  useEffect(() => {
    if (element === "image") {
      dispatch(editCanvas({ imageName: "", imageUrl: "", width: "50%" }));
    }
  }, [element]);

  const handleAddToPlayground = async () => {
    if (canvas !== null) {
      if (element === "heading" && isHeading(canvas)) {
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
      } else if (element === "text" && isText(canvas)) {
        if (!canvas.content) {
          alert("Content cannot be empty!");
          return;
        }
        dispatch(
          addComponent({
            details: canvas,
            type: "text",
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
      {element === "image" && <ImageElement closeDrawer={props.closeDrawer} />}
      {element && element !== "image" && (
        <StyledButton onClick={handleAddToPlayground}>
          Add to website
        </StyledButton>
      )}
    </CanvasContainer>
  );
};

export default Canvas;
