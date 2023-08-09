import {
  HeadingElementContainer,
  StyledTextfield,
} from "./heading-element.styles";

import ChooseHeadingSize from "./heading-element-customization/choose-heading-size/choose-heading-size.component";
import ChooseHeadingColor from "./heading-element-customization/choose-heading-color/choose-heading-color.component";

const HeadingElement = () => {
  return (
    <HeadingElementContainer>
      <StyledTextfield />
      <ChooseHeadingSize />
      <ChooseHeadingColor />
    </HeadingElementContainer>
  );
};

export default HeadingElement;
