import { useState } from "react";

import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

const ChooseHeadingFont = () => {
  const [font, setFont] = useState("Rubik");

  const handleChange = (event: SelectChangeEvent) => {
    setFont(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Font</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={font}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Rubik"}>Rubik</MenuItem>
          <MenuItem value={"Times New Roman"}>Times New Roman</MenuItem>
          <MenuItem value={"Helvetica"}>Helvetica</MenuItem>
          <MenuItem value={"Futura"}>Futura</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChooseHeadingFont;
