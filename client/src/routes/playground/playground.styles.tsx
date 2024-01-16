import { styled } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";

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
  backgroundColor: "#f03e3e",
  color: "#fff",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    color: "#f03e3e",
    backgroundColor: "#fff",
  },
}));
export const PreviewButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  backgroundColor: "#1971c2",
  color: "#fff",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    color: "#1971c2",
    backgroundColor: "#fff",
  },
}));

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

export const SaveDeleteContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "3rem",
  gap: "2rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const StyledCta = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontSize: "3rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.4rem",
  },
}));
