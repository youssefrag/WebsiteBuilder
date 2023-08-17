import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const RootContainer = styled(Box)(() => ({
  paddingTop: "5rem",
  display: "flex",
  flexDirection: "column",
  gap: "6rem",
}));

export const ImageElementContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  columnGap: "3rem",
}));

export const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontFamily: "Rubik",
  fontSize: "1.3rem",
  width: "100%",
  height: "3.2rem",
  backgroundColor: "#45260a",
  textTransform: "capitalize",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#45260a",
  },
}));
