import {
  CreateNew,
  PageContainer,
  PageTitle,
  SitesContainer,
} from "./websites.styles";

const Websites = () => {
  return (
    <PageContainer>
      <PageTitle>My Websites</PageTitle>
      <SitesContainer>
        <CreateNew>Create new site!</CreateNew>
      </SitesContainer>
    </PageContainer>
  );
};

export default Websites;
