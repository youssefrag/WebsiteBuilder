import {
  HeadingElementContainer,
  StyledTextfield,
} from "./heading-element.styles";

import ChooseHeadingSize from "./heading-element-customization/choose-heading-size/choose-heading-size.component";

const HeadingElement = () => {
  return (
    <HeadingElementContainer>
      <StyledTextfield />
      <ChooseHeadingSize />
    </HeadingElementContainer>
  );
};

export default HeadingElement;
