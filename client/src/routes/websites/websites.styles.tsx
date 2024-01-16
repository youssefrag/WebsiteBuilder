import { styled } from "@mui/material/styles";

import { Button, Box, Typography } from "@mui/material";

export const PageContainer = styled(Box)(() => ({
  margin: "4rem 6rem",
}));

export const PageTitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontSize: "2rem",
  fontWeight: "700",
  letterSpacing: "-0.5px",
  lineHeight: "1.2",
  marginBottom: "3.2rem",
  color: "#333",
}));

export const SitesContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  columnGap: "3rem",
  rowGap: "3rem",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CreateNew = styled(Button)(() => ({
  height: "14rem",
  width: "14rem",
  backgroundColor: "#e67e22",
  borderRadius: "50%",
  fontFamily: "Rubik",
  color: "#fff",
  fontSize: "1.5rem",
  "&:hover": {
    backgroundColor: "#fdf2e9",
    color: "#e67e22",
  },
}));
