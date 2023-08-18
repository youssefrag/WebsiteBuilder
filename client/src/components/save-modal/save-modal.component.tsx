import { useState } from "react";

import { Box, Button, Typography, Modal } from "@mui/material";

import {
  SaveButton,
  StyledTextfield,
  StyledButton,
  style,
} from "./save-modal.styles";

const SaveModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <SaveButton onClick={handleOpen}>Save Website</SaveButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledTextfield />
          <StyledTextfield />
          <StyledButton>Save</StyledButton>
        </Box>
      </Modal>
    </div>
  );
};

export default SaveModal;
