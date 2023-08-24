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

import {
  SaveDeleteContainer,
  DeleteButton,
  PageContainer,
  ComponentsContainer,
  SingleComponentContainer,
  StyledDeleteIcon,
  PreviewButton,
  StyledCta,
} from "./edit-site.styles";

const EditSite = () => {
  const { websiteId } = useParams();

  const dispatch = useDispatch();
  //   console.log(websiteId);

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

    console.log(res.components);
    console.log(res.message);

    if (res.message === "Components succesfully fetched") {
      dispatch(setPlayground(res.components));
    }
  };

  useEffect(() => {
    getSiteComponents();
  }, []);

  return <div>EditSite</div>;
};

export default EditSite;
