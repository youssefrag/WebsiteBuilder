import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../../../store/canvas/canvasSlice";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select";

import { Heading, Text } from "../../../../store/canvas/canvas.types";

const ChooseLineHeight = () => {
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    if (canvas !== null) {
      dispatch(
        editCanvas({
          ...canvas,
          lineHeight: event.target.value as string,
        })
      );
    }
  };

  function isText(canvas: Heading | Text | null): canvas is Text {
    return (canvas as Text).lineHeight !== undefined;
  }

  const typeCheckedValue = () => {
    if (isText(canvas)) {
      return canvas.lineHeight;
    }
  };

  return (
    <FormControl sx={{ "& .MuiFormControl-root": { width: "40%" } }}>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Line Height
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={typeCheckedValue() || "1.2"}
        onChange={handleChange}
      >
        <FormControlLabel value="1.2" control={<Radio />} label="1.2" />
        <FormControlLabel value="1.4" control={<Radio />} label="1.4" />
        <FormControlLabel value="1.6" control={<Radio />} label="1.6" />
        <FormControlLabel value="1.8" control={<Radio />} label="1.8" />
      </RadioGroup>
    </FormControl>
  );
};

export default ChooseLineHeight;
