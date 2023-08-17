import { useState, ChangeEvent } from "react";

type ImageFile = {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const ImageElement = () => {
  const [image, setImage] = useState<ImageFile | null>(null);

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const files = (event.target as HTMLInputElement).files;
    if (files !== null) {
      console.log(files[0]);
      setImage(files[0]);
    }
  };

  return (
    <div>
      <input type="file" name="image" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageElement;
