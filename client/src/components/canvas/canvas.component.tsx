import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { selectCanvas } from "../../store/canvas/canvasSlice";

import { addComponent } from "../../store/playground/playgroundSlice";

import ElementPicker from "../element-picker/element-picker.component";
import HeadingElement from "../heading-element/heading-element.component";
import TextElement from "../text-element/text-element.component";
import ImageElement from "../image-element/image-element.component";

import { CanvasContainer, StyledButton } from "./canvas.styles";

import { CanvasPropsType } from "./canvas.types";

import { Heading, Text } from "../../store/canvas/canvas.types";

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

  function isHeading(canvas: Heading | Text | null): canvas is Heading {
    return (canvas as Heading).fontSize !== undefined;
  }

  function isText(canvas: Heading | Text | null): canvas is Text {
    return (canvas as Text).lineHeight !== undefined;
  }

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
      } else if (element === "image") {
        // get secure url from server
        const { url } = await fetch("http://localhost:8000/s3Url");
        console.log(url);

        // let resonse = await fetch("http://localhost:8000/s3Url", {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });

        // console.log(resonse.json());

        // let response = await fetch("http://localhost:8000/users/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(userLogin),
        // });
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
      {element === "image" && <ImageElement />}
      {element && (
        <StyledButton onClick={handleAddToPlayground}>
          Add to website
        </StyledButton>
      )}
    </CanvasContainer>
  );
};

export default Canvas;
