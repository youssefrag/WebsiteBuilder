import { useNavigate } from "react-router-dom";

import {
  CardContainer,
  SiteName,
  PreviewButton,
  EditButton,
} from "./website-card.styles";

interface WebsiteCardPropTypes {
  name: string;
  websiteId: string;
}

const WebsiteCard = (props: WebsiteCardPropTypes) => {
  const navigate = useNavigate();

  const handleOpenPreview = () => {
    window.open(
      `/#/preview-website/${websiteId}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const { name, websiteId } = props;
  return (
    <CardContainer>
      <SiteName>{name}</SiteName>
      <EditButton onClick={() => navigate(`/edit-website/${websiteId}`)}>
        Edit Site
      </EditButton>
      <PreviewButton onClick={handleOpenPreview}>Preview</PreviewButton>
    </CardContainer>
  );
};

export default WebsiteCard;
