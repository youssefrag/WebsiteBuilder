import { useSelector } from "react-redux";

import { selectPlayground } from "../../store/playground/playgroundSlice";

import { createHtmlElements } from "../../utils/createElements";

import { PreviewContainer } from "./preview.styles";

const Preview = () => {
  const playground = useSelector(selectPlayground);

  const renderComponents = playground.map((component) => {
    return <div>{createHtmlElements(component)}</div>;
  });
  return <PreviewContainer>{renderComponents}</PreviewContainer>;
};

export default Preview;
