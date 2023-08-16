import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const Root = styled("div")(() => ({
  height: "100%",
  marginTop: "2rem",
}));

export const StyledBox = styled(Box)(() => ({
  backgroundColor: "#fdf2e9",
  height: "100%",
}));

export const StyledButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  color: "#fff",
  backgroundColor: "#2e1907",
  borderRadius: "50%",
  width: "5rem",
  height: "5rem",
  position: "fixed",
  right: 50,
  bottom: 50,
  fontSize: "4rem",
  "&:hover": {
    backgroundColor: "#fdf2e9",
    color: "#2e1907",
  },
}));

export const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: "#e67e22",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  cursor: "pointer",
}));
