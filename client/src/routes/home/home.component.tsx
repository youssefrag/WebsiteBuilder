import { Box, Typography } from "@mui/material";

import {
  HomeContainer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  PictureContainer,
} from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <DescriptionContainer>
        <DescriptionTitle>
          Create websites with our custom components
        </DescriptionTitle>
        <DescriptionText>
          With WebsiteBuilder you can create and edit your website without
          writing a single line of code. Using our editor UI, you can change
          features and organize your components with only a couple of clicks!
        </DescriptionText>
      </DescriptionContainer>
      <PictureContainer></PictureContainer>
    </HomeContainer>
  );
};

export default Home;
