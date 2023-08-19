import { useSelector, useDispatch } from "react-redux";

import { createHtmlElements } from "../../utils/createElements";

import SaveModal from "../../components/save-modal/save-modal.component";

import {
  resetPlayground,
  selectPlayground,
  deleteComponent,
} from "../../store/playground/playgroundSlice";

import {
  SaveDeleteContainer,
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
    if (playground.length === 0) {
      alert("There are no components to remove");
      return;
    }
    dispatch(resetPlayground());
  };

  const handleDeleteComponent = (componentId: string) => {
    dispatch(deleteComponent(componentId));
  };

  const handleOpenPreview = () => {
    if (playground.length === 0) {
      alert("Please add components before preview");
      return;
    }
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
        <SaveModal />
        <PreviewButton onClick={handleOpenPreview}>
          Preview Website
        </PreviewButton>
        <DeleteButton onClick={handleDeleteWebsite}>
          reset playground
        </DeleteButton>
      </SaveDeleteContainer>
    </PlaygroundContainer>
  );
};

export default Playground;
