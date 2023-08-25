import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { createHtmlElements } from "../../utils/createElements";

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
} from "./edit-site.styles";

const EditSite = () => {
  const { websiteId } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  const handleSaveChanges = async () => {
    if (playground.length === 0) {
      alert("Website needs at least one component to save");
      return;
    }

    let response = await fetch(
      `http://localhost:8000/websites/edit-website/${websiteId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playground),
      }
    );
    let result = await response.json();
    if (result.message === "Website edited succesfully") {
      dispatch(resetPlayground());
      navigate("/websites");
    }
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
        <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>

        <DeleteButton>
          {/* <DeleteButton onClick={handleDeleteWebsite}> */}
          Delete Website
        </DeleteButton>
      </SaveDeleteContainer>
    </PageContainer>
  );
};

export default EditSite;
