import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const RegisterModalComponent = ({ open, handleClose }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="register-modal"
      aria-describedby="register-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 400,
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="register-modal"
          variant="h6"
          component="h2"
          gutterBottom
          align="center"
        >
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            margin="normal"
            required
            aria-label="Full Name"
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin="normal"
            required
            aria-label="Phone Number"
            type="tel"
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button variant="outlined" onClick={handleClose} aria-label="Cancel registration">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default RegisterModalComponent;
