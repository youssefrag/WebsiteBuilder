import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ChooseLineHeight = () => {
  return (
    <FormControl sx={{ "& .MuiFormControl-root": { width: "40%" } }}>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Line Height
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={canvas?.fontSize}
        // onChange={handleChange}
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
