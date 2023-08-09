import { useState } from "react";

import { HexColorPicker } from "react-colorful";

const ChooseHeadingColor = () => {
  const [color, setColor] = useState("#fff");

  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ChooseHeadingColor;
