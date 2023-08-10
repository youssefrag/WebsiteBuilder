import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const DeleteButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  color: "#fff",
  backgroundColor: "#f03e3e",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#ffff",
    color: "#f03e3e",
  },
}));
export const SaveButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  color: "#fff",
  backgroundColor: "#37b24d",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#ffff",
    color: "#37b24d",
  },
}));

export const SaveDeleteContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "3rem",
  gap: "2rem",
}));
