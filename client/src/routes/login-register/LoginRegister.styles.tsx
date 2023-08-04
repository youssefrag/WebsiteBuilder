import { styled } from "@mui/material/styles";

import { Box, Button, TextField, Typography } from "@mui/material";

export const PageContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "84vh",
}));

export const LoginRegisterContainer = styled(Box)(() => ({
  backgroundColor: "#eb984e",
  width: "80%",
  height: "80%",
  borderRadius: "11px",
  boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)",
  padding: "3rem 5rem",
}));

export const StyledTitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontSize: "3rem",
  fontWeight: "700",
  color: "#45260a",
}));

export const Styledtitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontSize: "3rem",
  fontWeight: "700",
  color: "#45260a",
}));

export const SwitchText = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontSize: "1rem",
  fontWeight: "700",
  color: "#45260a",
  "&:hover": {
    color: "#fff",
  },
}));

export const TextfieldContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  marginTop: "2rem",
  rowGap: "2rem",
}));

export const StyledTextfield = styled(TextField)(() => ({
  width: "80%",
  "& .MuiOutlinedInput-root": {
    background: "#fff",
  },
  "& .MuiInputBase-input": {
    fontSize: "1.2rem",
    fontWeight: 700,
  },
}));

export const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontFamily: "Rubik",
  fontSize: "1.3rem",
  width: "80%",
  height: "3.2rem",
  backgroundColor: "#45260a",
  textTransform: "capitalize",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#45260a",
  },
}));

export const SwitchContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
