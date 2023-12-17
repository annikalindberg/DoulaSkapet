import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert, Modal, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PrivacyNotice from './Integritetsmeddelande';

const CustomNetlifyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  });
    const [submitStatus, setSubmitStatus] = useState({ success: false, error: false });
    const [openModal, setOpenModal] = useState(false);
    const theme = useTheme();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
    const handleCheckboxChange = (event) => {
        setFormData({ ...formData, consent: event.target.checked });
    };

    /* const isFOrmValid = () => {
        return formData.consent && formData.name && formData.email && formData.message;

    } */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.consent && formData.name && formData.email && formData.message) {
      setSubmitStatus({ success: true });
    } else {
      // Handle validation errors as needed
      setSubmitStatus({ error: true });
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus({ success: false, error: false });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const isFormValid = () => {
    // Check if form data is valid
    return formData.consent && formData.name && formData.email && formData.message;
  };



  return (
 <Box
      component="form"
      name="contact-form" // The form name
      netlify // Tell Netlify to handle this form submission
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
      }}
    >
      {/* Hidden field to specify the form name for Netlify */}
      <input type="hidden" name="form-name" value="contact-form" />
      <Typography variant="h5" sx={{ color: 'text.primary', mb: 2 }}>
        Contact Us
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        sx={{ bgcolor: 'background.default' }}
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        sx={{ bgcolor: 'background.default' }}
      />
      <TextField
        label="Message"
        variant="outlined"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        fullWidth
        sx={{ bgcolor: 'background.default' }}
          />
           <FormControlLabel
        control={
          <Checkbox
            checked={formData.consent}
            onChange={handleCheckboxChange}
            name="consent"
          />
        }
        label={
          <Typography variant="body2">
            Jag godkänner{' '}
            <Link href="#" onClick={handleOpenModal}>
              integritetspolicyn
            </Link>
          </Typography>
        }
      />
      
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isFormValid()} // Here is where you check if the form is valid before enabling the button
        sx={{ mt: 2, fontWeight: 'bold' }}
      >
        Submit
      </Button>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, fontWeight: 'bold' }}
      >
        Submit
      </Button>
          <Button
       
        variant="text"

        onClick={handleOpenModal}
              sx={{
                  mt: 1,
                  fontSize: '0.75rem',
                  bgcolor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
              }}
      >
        Read Privacy Notice
      </Button>

      {/* Privacy Notice Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="privacy-notice-title"
        aria-describedby="privacy-notice-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{
          bgcolor: theme.palette.background.solidPaper,
          p: 4,
          borderRadius: 2,
          maxWidth: '80%',
          maxHeight: '80%',
          overflow: 'auto',
        }}>
          <Typography id="privacy-notice-title" variant="h6" color="text.primary" gutterBottom>
            Privacy Notice for Contact Form
          </Typography>
          <Typography id="privacy-notice-description" variant="body1" color="text.secondary">
            <PrivacyNotice />
          </Typography>
        </Box>
      </Modal>

      <Snackbar
        open={submitStatus.success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={submitStatus.error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          An error occurred. Please try again.
        </Alert>
      </Snackbar>
      </Box>
    </Box>
  );
};

export default CustomNetlifyForm;
