import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const SaveButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  backgroundColor: "#37b24d",
  color: "#fff",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    color: "#37b24d",
    backgroundColor: "#fff",
  },
}));
