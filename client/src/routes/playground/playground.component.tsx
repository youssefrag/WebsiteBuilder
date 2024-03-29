import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { createHtmlElements } from "../../utils/createElements";

import SaveModal from "../../components/save-modal/save-modal.component";

import {
  resetPlayground,
  selectPlayground,
  deleteComponent,
} from "../../store/playground/playgroundSlice";

import { editCanvas, selectCanvas } from "../../store/canvas/canvasSlice";

import {
  SaveDeleteContainer,
  DeleteButton,
  PlaygroundContainer,
  ComponentsContainer,
  SingleComponentContainer,
  StyledDeleteIcon,
  PreviewButton,
  StyledCta,
} from "./playground.styles";

import CanvasDrawer from "../../components/canvas-drawer/canvas-drawer.component";

const Playground = () => {
  const playground = useSelector(selectPlayground);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPlayground());
    dispatch(
      editCanvas({
        content: "",
        fontSize: "small",
        fontType: "Rubik",
        color: "#e67e22",
      })
    );
  }, []);

  const handleResetPlayground = () => {
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
    window.open("/preview-playground", "_blank", "noopener,noreferrer");
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

  if (playground.length === 0) {
    return (
      <PlaygroundContainer>
        <StyledCta>Start by adding components to your site</StyledCta>
        <CanvasDrawer />
      </PlaygroundContainer>
    );
  } else {
    return (
      <PlaygroundContainer>
        <ComponentsContainer>{renderComponents}</ComponentsContainer>

        <CanvasDrawer />
        <SaveDeleteContainer>
          <SaveModal />
          <PreviewButton onClick={handleOpenPreview}>
            Preview Website
          </PreviewButton>
          <DeleteButton onClick={handleResetPlayground}>
            reset playground
          </DeleteButton>
        </SaveDeleteContainer>
      </PlaygroundContainer>
    );
  }
};

export default Playground;
