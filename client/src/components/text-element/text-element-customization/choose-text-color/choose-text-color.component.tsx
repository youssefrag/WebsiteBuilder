import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../../../store/canvas/canvasSlice";

import { HexColorPicker } from "react-colorful";

import { isText } from "../../../../utils/typeCheckers";

const ChooseTextColor = () => {
  const [color, setColor] = useState("#e67e22");
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  useEffect(() => {
    if (canvas !== null && isText(canvas)) {
      dispatch(editCanvas({ ...canvas, color: color }));
    }
  }, [color]);

  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ChooseTextColor;
