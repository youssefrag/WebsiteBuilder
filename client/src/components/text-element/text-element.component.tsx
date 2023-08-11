import { StyledTextfield, TextElementContainer } from "./text-element.styles";

import ChooseTextColor from "./text-element-customization/choose-text-color/choose-text-color.component";

import ChooseLineHeight from "./text-element-customization/choose-line-height/choose-line-height.component";

import ChooseTextFont from "./text-element-customization/choose-text-font/choose-text-font.component";

const TextElement = () => {
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
