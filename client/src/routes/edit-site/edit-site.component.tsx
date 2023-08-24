import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { createHtmlElements } from "../../utils/createElements";

import SaveModal from "../../components/save-modal/save-modal.component";

import {
  resetPlayground,
  selectPlayground,
  deleteComponent,
  setPlayground,
} from "../../store/playground/playgroundSlice";

import CanvasDrawer from "../../components/canvas-drawer/canvas-drawer.component";

import {
  SaveDeleteContainer,
  DeleteButton,
  PageContainer,
  ComponentsContainer,
  SingleComponentContainer,
  StyledDeleteIcon,
  SaveButton,
  StyledCta,
} from "./edit-site.styles";

const EditSite = () => {
  const { websiteId } = useParams();

  const dispatch = useDispatch();

  const getSiteComponents = async () => {
    let response = await fetch(
      `http://localhost:8000/websites/components/${websiteId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();

    if (res.message === "Components succesfully fetched") {
      dispatch(setPlayground(res.components));
    }
  };

  useEffect(() => {
    getSiteComponents();
  }, []);

  const playground = useSelector(selectPlayground);

  const handleDeleteComponent = (componentId: string) => {
    dispatch(deleteComponent(componentId));
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
    <PageContainer>
      <ComponentsContainer>{renderComponents}</ComponentsContainer>

      <CanvasDrawer />
      <SaveDeleteContainer>
        <SaveButton>Save Changes</SaveButton>

        <DeleteButton>
          {/* <DeleteButton onClick={handleDeleteWebsite}> */}
          Delete Website
        </DeleteButton>
      </SaveDeleteContainer>
    </PageContainer>
  );
};

export default EditSite;
