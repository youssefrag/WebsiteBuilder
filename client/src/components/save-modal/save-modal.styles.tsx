import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

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

export const StyledTextfield = styled(TextField)(() => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    background: "#fff",
  },
  "& .MuiInputBase-input": {
    color: "#666",
    fontFamily: "Rubik",
    fontSize: "1.2rem",
    fontWeight: 700,
  },
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

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#eea564",
  boxShadow: 10,
  borderRadius: "20px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
};
