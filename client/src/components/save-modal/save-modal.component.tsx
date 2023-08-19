import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectUser } from "../../store/user/userSlice";
import { selectPlayground } from "../../store/playground/playgroundSlice";

import { Box, Modal } from "@mui/material";

import {
  SaveButton,
  StyledTextfield,
  StyledButton,
  style,
} from "./save-modal.styles";

const SaveModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (playground.length === 0) {
      alert("Please add components before saving");
      return;
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const currentUser = useSelector(selectUser);

  const playground = useSelector(selectPlayground);

  const [websiteName, setWebsiteName] = useState<string>("");

  const handleWebsiteNameChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    setWebsiteName(value);
  };

  const [authorEmail, setAuthorEmail] = useState<string>("");

  useEffect(() => {
    if (currentUser) {
      setAuthorEmail(currentUser.email);
    }
  }, []);

  const handleAuthorEmailChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    setAuthorEmail(value);
  };

  const handleSave = async () => {
    if (playground.length === 0) {
      alert("Please add components before preview");
      return;
    }
  };

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
