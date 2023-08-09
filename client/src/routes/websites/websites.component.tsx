import { useNavigate } from "react-router-dom";

import {
  CreateNew,
  PageContainer,
  PageTitle,
  SitesContainer,
} from "./websites.styles";

const Websites = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageTitle>My Websites</PageTitle>
      <SitesContainer>
        <CreateNew onClick={() => navigate("/playground")}>
          Create new site!
        </CreateNew>
      </SitesContainer>
    </PageContainer>
  );
};

export default Websites;
