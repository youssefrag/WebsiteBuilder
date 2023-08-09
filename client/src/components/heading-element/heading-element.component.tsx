import { useState } from "react";

import {
  HeadingElementContainer,
  StyledTextfield,
} from "./heading-element.styles";

import ChooseHeadingSize from "./heading-element-customization/choose-heading-size/choose-heading-size.component";
import ChooseHeadingColor from "./heading-element-customization/choose-heading-color/choose-heading-color.component";

const HeadingElement = () => {
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
      />
      <ChooseHeadingSize />
      <ChooseHeadingColor />
    </HeadingElementContainer>
  );
};

export default HeadingElement;
