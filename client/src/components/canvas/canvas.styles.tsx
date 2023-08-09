import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CanvasContainer = styled(Box)(() => ({
  padding: "3rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
}));
