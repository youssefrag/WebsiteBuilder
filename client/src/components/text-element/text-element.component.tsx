import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../store/canvas/canvasSlice";

import { StyledTextfield, TextElementContainer } from "./text-element.styles";

import ChooseTextColor from "./text-element-customization/choose-text-color/choose-text-color.component";
import ChooseLineHeight from "./text-element-customization/choose-line-height/choose-line-height.component";
import ChooseTextFont from "./text-element-customization/choose-text-font/choose-text-font.component";

const TextElement = () => {
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      editCanvas({
        content: "",
        lineHeight: "1.2",
        fontType: "Rubik",
        color: "#e67e22",
      })
    );
  }, []);

  return (
    <TextElementContainer>
      <StyledTextfield multiline rows={6} />
      <ChooseTextFont />
      <ChooseLineHeight />
      <ChooseTextColor />
    </TextElementContainer>
  );
};

export default TextElement;
