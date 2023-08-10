import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../store/canvas/canvasSlice";

import {
  HeadingElementContainer,
  StyledTextfield,
} from "./heading-element.styles";

import ChooseHeadingColor from "./heading-element-customization/choose-heading-color/choose-heading-color.component";
import ChooseHeadingFont from "./heading-element-customization/choose-heading-font/choose-heading-font.component";
import ChooseHeadingSize from "./heading-element-customization/choose-heading-size/choose-heading-size.component";

const HeadingElement = () => {
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      editCanvas({ content: "", fontSize: "", fontType: "", color: "" })
    );
  }, []);

  const [headingContent, setHeadingContent] = useState("");

  const handleContentChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    setHeadingContent(value);
  };

  return (
    <HeadingElementContainer>
      <StyledTextfield
        required
        value={headingContent}
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
