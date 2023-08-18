import { useState, ChangeEvent, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { editCanvas, selectCanvas } from "../../store/canvas/canvasSlice";

import ImageElementWidth from "./image-element-width/image-element-width-component";

import { addComponent } from "../../store/playground/playgroundSlice";

import {
  ImageElementContainer,
  StyledButton,
  RootContainer,
} from "./image-element.styles";

import { ImageElementPropsType } from "./image-element.types";

import { isImage } from "../../utils/typeCheckers";

const ImageElement = (props: ImageElementPropsType) => {
  const [image, setImage] = useState<any>(null);

  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  useEffect(() => {
    if (canvas !== null && isImage(canvas))
      dispatch(
        editCanvas({
          imageName: "",
          imageUrl: "",
          width: "100%",
        })
      );
  }, []);

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

    if (canvas !== null && isImage(canvas)) {
      dispatch(editCanvas({ ...canvas, imageName, imageUrl }));

      dispatch(
        addComponent({
          details: canvas,
          type: "image",
          componentId: uuidv4(),
        })
      );
    }

    props.closeDrawer();
  };

  return (
    <RootContainer>
      <ImageElementContainer>
        <input type="file" name="image" onChange={handleImageUpload} />
        <ImageElementWidth />
      </ImageElementContainer>
      <StyledButton onClick={handleAddToPlayground}>
        Add to Website
      </StyledButton>
    </RootContainer>
  );
};

export default ImageElement;
