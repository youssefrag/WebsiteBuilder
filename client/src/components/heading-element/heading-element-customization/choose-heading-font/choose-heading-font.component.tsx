import { useSelector, useDispatch } from "react-redux";

import { editCanvas, selectCanvas } from "../../../../store/canvas/canvasSlice";

import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import { StyledFormControl } from "./choose-heading-font.styles";

import { isHeading } from "../../../../utils/typeCheckers";

const ChooseHeadingFont = () => {
  const canvas = useSelector(selectCanvas);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    if (canvas !== null && isHeading(canvas)) {
      dispatch(
        editCanvas({
          ...canvas,
          fontType: event.target.value as string,
        })
      );
    }
  };

  const typeCheckedValue = () => {
    if (canvas !== null && isHeading(canvas)) {
      return canvas.fontType;
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <StyledFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Font</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeCheckedValue()}
          label="Font"
          onChange={handleChange}
        >
          <MenuItem value={"Rubik"}>Rubik</MenuItem>
          <MenuItem value={"Times New Roman"}>Times New Roman</MenuItem>
          <MenuItem value={"Helvetica"}>Helvetica</MenuItem>
          <MenuItem value={"Futura"}>Futura</MenuItem>
        </Select>
      </StyledFormControl>
    </Box>
  );
};

export default ChooseHeadingFont;
