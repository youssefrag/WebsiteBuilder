import { useState } from "react";
import { Global } from "@emotion/react";

import Canvas from "../canvas/canvas.component";

import { Box, CssBaseline, SwipeableDrawer, Typography } from "@mui/material";

import {
  ChooseElement,
  Puller,
  Root,
  StyledBox,
  StyledButton,
  StyledSkeleton,
} from "./canvasDrawer.styles";

interface Props {
  window?: () => Window;
}

const drawerBleeding = 30;

const CanvasDrawer = (props: Props) => {
  const { window } = props;
  const [open, setOpen] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (topPosition === 30) {
      setTopPosition(0);
    } else if (topPosition === 0) {
      setTopPosition(30);
    }
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50%)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <StyledButton onClick={toggleDrawer(true)}>+ New element</StyledButton>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={0}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -topPosition,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />

          {open && <Canvas />}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default CanvasDrawer;
