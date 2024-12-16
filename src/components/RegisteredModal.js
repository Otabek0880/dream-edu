import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api";

const RegisterDialogComponent = ({ open, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required("Ism kiritilishi shart")
      .min(2, "Kamida 2 ta harf bo'lishi kerak"),
    phone: Yup.string()
      .required("Telefon raqam kiritilishi shart")
      .matches(/^\+?[0-9]+$/, "Telefon raqam formati noto‘g‘ri")
      .min(9, "Kamida 9 ta raqam bo'lishi kerak"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      first_name: "",
      phone: "",
      application_answer: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        const response = await api.post(
          "/leads/forms/answer/c974b3ed-ebb7-4fa8-8b31-34ef9cf92e8b/",
          {
            ...values,
            application_answer: "",
          }
        );
        
        
        if (response.status == 201) {
          toast.success("Muvaffaqiyatli yuborildi!", {
            position: "top-center",
          });
          resetForm();
          handleClose();
        }
      } catch (error) {
        if (error.response) {
          formik.setErrors(error.response.data);
          toast.error("Xatolik yuz berdi: " + error.response.data.message);
        } else {
          toast.error("Tarmoq xatoligi: " + error.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleCancel = () => {
    formik.resetForm();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="register-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="register-dialog-title" align="center">
        Register
      </DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <Typography gutterBottom align="center">
            Please fill out the form to register.
          </Typography>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            margin="normal"
            required
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            margin="normal"
            required
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            type="tel"
            inputProps={{
              maxLength: 13,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleCancel}
            aria-label="Cancel registration"
          >
            Bekor qilish
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            aria-label="Submit registration"
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? "Yuklanmoqda..." : "Tasdiqlash"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default RegisterDialogComponent;
