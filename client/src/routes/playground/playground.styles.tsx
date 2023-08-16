import { styled } from "@mui/material/styles";
import { Box, Button, Stack } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export const PlaygroundContainer = styled(Box)(() => ({
  padding: "4rem",
}));

export const ComponentsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
}));

export const SingleComponentContainer = styled(Stack)(() => ({}));

export const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  cursor: "pointer",
  marginLeft: "5rem",
}));

export const DeleteButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  backgroundColor: "#fff",
  color: "#f03e3e",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    color: "#ffff",
    backgroundColor: "#f03e3e",
  },
}));
export const SaveButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  backgroundColor: "#ffff",
  color: "#37b24d",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#37b24d",
  },
}));

export const SaveDeleteContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "3rem",
  gap: "2rem",
}));
