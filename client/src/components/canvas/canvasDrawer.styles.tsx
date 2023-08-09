import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const Root = styled("div")(() => ({
  height: "100%",
  // backgroundColor: "#fdf2e9",
}));

export const StyledBox = styled(Box)(() => ({
  backgroundColor: "#aaa",
}));

export const StyledButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  color: "#fff",
  backgroundColor: "#e67e22",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#cf711f",
  },
}));

export const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: "#aaa",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));
