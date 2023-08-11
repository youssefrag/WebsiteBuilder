import { useSelector, useDispatch } from "react-redux";

import { createHtmlElements } from "../../utils/createElements";

import {
  resetPlayground,
  selectPlayground,
} from "../../store/playground/playgroundSlice";

import {
  SaveDeleteContainer,
  SaveButton,
  DeleteButton,
  PlaygroundContainer,
  ComponentsContainer,
} from "./playground.styles";

import CanvasDrawer from "../../components/canvas-drawer/canvas-drawer.component";

const Playground = () => {
  const playground = useSelector(selectPlayground);
  const dispatch = useDispatch();

  const handleDeleteWebsite = () => {
    dispatch(resetPlayground());
  };

  const renderComponents = playground.map((component) => {
    return createHtmlElements(component);
  });

  return (
    <PlaygroundContainer>
      <ComponentsContainer>{renderComponents}</ComponentsContainer>
      <CanvasDrawer></CanvasDrawer>
      <SaveDeleteContainer>
        <SaveButton>Save website</SaveButton>
        <DeleteButton onClick={handleDeleteWebsite}>
          Delete website
        </DeleteButton>
      </SaveDeleteContainer>
    </PlaygroundContainer>
  );
};

export default Playground;
