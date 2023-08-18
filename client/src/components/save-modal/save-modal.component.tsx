import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectUser } from "../../store/user/userSlice";

import { Box, Modal } from "@mui/material";

import {
  SaveButton,
  StyledTextfield,
  StyledButton,
  style,
} from "./save-modal.styles";

const SaveModal = () => {
  let navigate = useNavigate();

  const currentUser = useSelector(selectUser);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [websiteName, setWebsiteName] = useState<string>("");

  const handleWebsiteNameChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    const name = element.name;
    setWebsiteName(value);
  };

  const [authorEmail, setAuthorEmail] = useState<string>("");

  const handleAuthorEmailChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    setAuthorEmail(value);
  };

  const handleSave = async () => {};

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
          <StyledTextfield
            value={websiteName}
            placeholder="Enter website name"
            name="email"
            onChange={handleWebsiteNameChange}
          />
          {!currentUser && (
            <StyledTextfield
              value={authorEmail}
              placeholder="Enter user email"
              name="email"
              onChange={handleAuthorEmailChange}
            />
          )}
          <StyledButton>Save</StyledButton>
        </Box>
      </Modal>
    </div>
  );
};

export default SaveModal;
