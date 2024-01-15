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
      <PictureContainer>
        <img
          alt="home=image"
          src="https://websitebuilder-bucket.s3.amazonaws.com/2cebe784226cb349db2ea728df8d9245"
          style={{ width: "24rem" }}
        />
      </PictureContainer>
    </HomeContainer>
  );
};

export default Home;
