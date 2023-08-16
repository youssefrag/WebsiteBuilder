import { useState } from "react";
import { Global } from "@emotion/react";

import Canvas from "../canvas/canvas.component";

import { Box, CssBaseline, SwipeableDrawer } from "@mui/material";

import { Puller, Root, StyledBox, StyledButton } from "./canvas-drawer.styles";

interface Props {
  window?: () => Window;
}

const CanvasDrawer = (props: Props) => {
  const { window } = props;
  const [open, setOpen] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (open) {
      setTopPosition(30);
    } else {
      setTopPosition(0);
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
            // height: `calc(50%)`,
            height: `calc(90%)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <StyledButton onClick={toggleDrawer(true)}>+</StyledButton>
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
            // visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller onClick={toggleDrawer(!open)} />

          {open && <Canvas closeDrawer={toggleDrawer(false)} />}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default CanvasDrawer;
