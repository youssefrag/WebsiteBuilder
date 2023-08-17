import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const ImageElementContainer = styled(Box)(() => ({
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  gap: "10rem",
  alignItems: "center",
}));

export const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontFamily: "Rubik",
  fontSize: "1.3rem",
  width: "200%",
  height: "3.2rem",
  backgroundColor: "#45260a",
  textTransform: "capitalize",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#45260a",
  },
}));
