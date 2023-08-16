import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../../../store/canvas/canvasSlice";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Heading, Text } from "../../../../store/canvas/canvas.types";

const ChooseHeadingSize = () => {
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  function isHeading(canvas: Heading | Text | null): canvas is Heading {
    return (canvas as Heading).fontSize !== undefined;
  }

  const typeCheckedValue = () => {
    if (isHeading(canvas)) {
      return canvas.fontSize;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (canvas !== null) {
      dispatch(
        editCanvas({
          ...canvas,
          fontSize: (event.target as HTMLInputElement).value,
        })
      );
    }
  };

  return (
    <FormControl sx={{ "& .MuiFormControl-root": { width: "40%" } }}>
      <FormLabel id="demo-controlled-radio-buttons-group">Font Size</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={typeCheckedValue() || "s,all"}
        onChange={handleChange}
      >
        <FormControlLabel value="small" control={<Radio />} label="Small" />
        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="large" control={<Radio />} label="Large" />
      </RadioGroup>
    </FormControl>
  );
};

export default ChooseHeadingSize;
