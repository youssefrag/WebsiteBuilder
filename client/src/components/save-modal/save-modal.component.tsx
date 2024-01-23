import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { selectUser } from "../../store/user/userSlice";
import {
  resetPlayground,
  selectPlayground,
} from "../../store/playground/playgroundSlice";

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
  const dispatch = useDispatch();

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
    setWebsiteName("");
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

    if (websiteName === "") {
      alert("Please enter a name for your website");
      return;
    }

    if (authorEmail === "") {
      alert("Please enter the email of the owner");
      return;
    }

    const websiteData = {
      name: websiteName,
      owner: authorEmail,
      websiteId: uuidv4(),
      components: playground,
    };

    let response = await fetch("/websites/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(websiteData),
    });
    let result = await response.json();

    if (result.message === "Website was created") {
      dispatch(resetPlayground());
      navigate("/websites");
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
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </Box>
      </Modal>
    </div>
  );
};

export default SaveModal;
