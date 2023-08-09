import { styled } from "@mui/material/styles";
import { ToggleButton, Typography } from "@mui/material";

export const StyledElementTitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: "500",
}));
export const SelectedElementTitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "#fff",
}));
export const StyledToggleButton = styled(ToggleButton)(() => ({
  "&.MuiToggleButton-root": {
    backgroundColor: "#eb984e",
  },
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "#8d5b2f",
  },
}));
