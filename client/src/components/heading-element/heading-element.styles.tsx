import { styled } from "@mui/material/styles";

import { Box, TextField } from "@mui/material";

export const HeadingElementContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 1fr",
  alignItems: "center",
  columnGap: "3rem",
}));

export const StyledTextfield = styled(TextField)(() => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    background: "#fff",
  },
  "& .MuiInputBase-input": {
    color: "#666",
    fontFamily: "Rubik",
    fontSize: "1.2rem",
    fontWeight: 700,
  },
}));
