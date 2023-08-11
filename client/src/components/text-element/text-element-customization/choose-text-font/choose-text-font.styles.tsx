import { styled } from "@mui/material/styles";

import { FormControl } from "@mui/material";

export const StyledFormControl = styled(FormControl)(() => ({
  "& .MuiFormLabel-root": {
    top: "-15px",
    fontSize: "1.4rem",
  },
  "& .MuiInputBase-root": {
    fontSize: "1.4rem",
    fontFamily: "Rubik",
    backgroundColor: "#fff",
    color: "#333",
  },
}));
