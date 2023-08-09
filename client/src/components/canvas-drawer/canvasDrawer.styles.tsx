import { styled } from "@mui/material/styles";
import { Box, Button, Skeleton } from "@mui/material";

export const Root = styled("div")(() => ({
  height: "100%",
  marginTop: "2rem",
}));

export const StyledBox = styled(Box)(() => ({
  backgroundColor: "#fdf2e9",
  // paddingTop: "2rem",
  height: "100%",
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
  backgroundColor: "#45260a",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export const StyledSkeleton = styled(Skeleton)(() => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
  padding: "4rem",
}));

export const ChooseElement = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  // marginTop: "1.5rem",
}));
