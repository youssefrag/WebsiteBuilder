import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../../store/canvas/canvasSlice";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { isImage } from "../../../utils/typeCheckers";

const ImageElementWidth = () => {
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  const typeCheckedValue = () => {
    if (isImage(canvas)) {
      return canvas.width;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (canvas !== null && isImage(canvas)) {
      dispatch(
        editCanvas({
          ...canvas,
          width: (event.target as HTMLInputElement).value,
        })
      );
    }
  };

  return (
    <FormControl sx={{ "& .MuiFormControl-root": { width: "40%" } }}>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Image Width
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={typeCheckedValue() || ""}
        onChange={handleChange}
      >
        <FormControlLabel value="50%" control={<Radio />} label="50%" />
        <FormControlLabel value="75%" control={<Radio />} label="75%" />
        <FormControlLabel value="100%" control={<Radio />} label="100%" />
      </RadioGroup>
    </FormControl>
  );
};

export default ImageElementWidth;
