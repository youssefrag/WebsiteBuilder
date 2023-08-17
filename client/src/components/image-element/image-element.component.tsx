import { useState, ChangeEvent } from "react";

import { ImageElementContainer, StyledButton } from "./image-element.styles";

import { ImageElementPropsType } from "./image-element.types";

type ImageFile = {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const ImageElement = (props: ImageElementPropsType) => {
  const [image, setImage] = useState<any>(null);

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const files = (event.target as HTMLInputElement).files;
    if (files !== null) {
      setImage(files[0]);
    }
  };

  const handleAddToPlayground = async () => {
    // get secure url from server

    let resonse = await fetch("http://localhost:8000/s3Url", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { url } = await resonse.json();

    console.log(url);

    // post the image directly to the s3 bucket

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: image,
    });

    const imageUrl = url.split("?")[0];
    const imageName = image.name;
    console.log(imageUrl);
    console.log(imageName);

    props.closeDrawer();
  };

  return (
    <ImageElementContainer>
      <input type="file" name="image" onChange={handleImageUpload} />
      <StyledButton onClick={handleAddToPlayground}>
        Add to Website
      </StyledButton>
    </ImageElementContainer>
  );
};

export default ImageElement;
