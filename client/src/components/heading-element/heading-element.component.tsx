import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../store/canvas/canvasSlice";

import {
  HeadingElementContainer,
  StyledTextfield,
} from "./heading-element.styles";

import ChooseHeadingColor from "./heading-element-customization/choose-heading-color/choose-heading-color.component";
import ChooseHeadingFont from "./heading-element-customization/choose-heading-font/choose-heading-font.component";
import ChooseHeadingSize from "./heading-element-customization/choose-heading-size/choose-heading-size.component";

import { isHeading } from "../../utils/typeCheckers";

const HeadingElement = () => {
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      editCanvas({
        content: "",
        fontSize: "small",
        fontType: "Rubik",
        color: "#e67e22",
      })
    );
  }, []);

  const handleContentChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    if (canvas !== null && isHeading(canvas)) {
      dispatch(editCanvas({ ...canvas, content: value }));
    }
  };

  const typeCheckedValue = () => {
    if (canvas !== null && isHeading(canvas)) {
      return canvas.content;
    }
  };

  return (
    <HeadingElementContainer>
      <StyledTextfield
        required
        value={typeCheckedValue()}
        onChange={handleContentChange}
        placeholder="Heading Content"
      />
      <ChooseHeadingSize />
      <ChooseHeadingFont />
      <ChooseHeadingColor />
    </HeadingElementContainer>
  );
};

export default HeadingElement;
