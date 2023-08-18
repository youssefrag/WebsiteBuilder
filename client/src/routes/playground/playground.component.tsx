import { useSelector, useDispatch } from "react-redux";

import { createHtmlElements } from "../../utils/createElements";

import {
  resetPlayground,
  selectPlayground,
  deleteComponent,
} from "../../store/playground/playgroundSlice";

import {
  SaveDeleteContainer,
  SaveButton,
  DeleteButton,
  PlaygroundContainer,
  ComponentsContainer,
  SingleComponentContainer,
  StyledDeleteIcon,
  PreviewButton,
} from "./playground.styles";

import CanvasDrawer from "../../components/canvas-drawer/canvas-drawer.component";

const Playground = () => {
  const playground = useSelector(selectPlayground);

  const dispatch = useDispatch();

  const handleDeleteWebsite = () => {
    dispatch(resetPlayground());
  };

  const handleDeleteComponent = (componentId: string) => {
    dispatch(deleteComponent(componentId));
  };

  const handleOpenPreview = () => {
    window.open("/preview", "_blank", "noopener,noreferrer");
  };

  const renderComponents = playground.map((component) => {
    return (
      <SingleComponentContainer
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        key={component.componentId}
      >
        {createHtmlElements(component)}
        <StyledDeleteIcon
          onClick={() => handleDeleteComponent(component.componentId)}
        />
      </SingleComponentContainer>
    );
  });

  return (
    <PlaygroundContainer>
      <ComponentsContainer>{renderComponents}</ComponentsContainer>
      <CanvasDrawer></CanvasDrawer>
      <SaveDeleteContainer>
        <SaveButton>Save website</SaveButton>
        <PreviewButton onClick={handleOpenPreview}>
          Preview Website
        </PreviewButton>
        <DeleteButton onClick={handleDeleteWebsite}>
          Delete website
        </DeleteButton>
      </SaveDeleteContainer>
    </PlaygroundContainer>
  );
};

export default Playground;
