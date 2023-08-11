import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import { StyledFormControl } from "./choose-line-height.styles";

const ChooseLineHeight = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <StyledFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Line Height</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={canvas?.fontType}
          label="Age"
          //   onChange={handleChange}
        >
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"1.2"}>1.2</MenuItem>
          <MenuItem value={"1.4"}>1.4</MenuItem>
          <MenuItem value={"1.6"}>1.6</MenuItem>
        </Select>
      </StyledFormControl>
    </Box>
  );
};

export default ChooseLineHeight;
