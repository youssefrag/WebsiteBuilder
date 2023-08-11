import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ChooseTextColor = () => {
  const [color, setColor] = useState("#e67e22");
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ChooseTextColor;
