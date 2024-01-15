import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, TextField, Typography, Snackbar, Alert, Modal, Checkbox, FormControlLabel, Link } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PrivacyNotice from './Integritetsmeddelande';

const CustomFormspreeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    message: '',
    consent: false,
  });
  const [state, handleSubmit] = useForm('xyyrygee'); // Replace 'your-form-id' with your actual Formspree form ID
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, consent: event.target.checked });
  };

  const isFormValid = () => {
    // Use formData to check if the form is valid
    return formData.name && formData.email && formData.message && formData.consent;
  };

  // Adjusted handleSubmit function to use formData
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      handleSubmit(formData);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit} // Use adjusted handleFormSubmit function
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

          <Typography variant="body1" sx={{ color: 'text.primary', mb: 2 }}>
             Kontakta Annika
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.primary', mb: 2 }}>Svarar vanligtvis inom 1-3 dagar. Gäller det förfrågningar om Akutdoula - vänligen skriv i Akutdoula-formuläret istället</Typography>
     <TextField
        label="Name"
        variant="outlined"
        name="name"
              value={formData.name}
              required
                fullWidth
        onChange={handleChange}
        sx={{ bgcolor: 'background.default' }}
      />
      <ValidationError field="name" prefix="Name" errors={state.errors} />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
              type="email"
              value={formData.email}
                onChange={handleChange}
        required
        fullWidth
        sx={{ bgcolor: 'background.default' }}
      />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
         <TextField
        label="Phone Number"
        variant="outlined"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        sx={{ bgcolor: 'background.default' }}
      />
      <ValidationError field="phone" prefix="Phone" errors={state.errors} />
      <TextField
        label="Message"
        variant="outlined"
              name="message"
                value={formData.message}
                    onChange={handleChange}
        multiline
        rows={4}
        required
        fullWidth
        sx={{ bgcolor: 'background.default' }}
      />
      <ValidationError field="message" prefix="Message" errors={state.errors} />
      <FormControlLabel
        control={
          <Checkbox
            required
                      name="consent"
                      checked={formData.consent}
                        onChange={handleCheckboxChange}
          />
        }
        label={
          <Typography variant="body2">
            Jag godkänner{' '}
           <Link href="#" onClick={handleOpenModal} sx={{ color: '#D32F2F' }}> Integritetspolicy
            </Link>
          </Typography>
        }
      />
     <LoadingButton
  type="submit"
  loading={state.submitting}
  variant="contained"
  color="primary"
  disabled={!isFormValid()}
  sx={{ mt: 2, fontWeight: 'bold' }}
>
  SKICKA
</LoadingButton>

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
          bgcolor: 'background.solidPaper',
          p: 4,
          borderRadius: 2,
          maxWidth: '80%',
          maxHeight: '80%',
          overflow: 'auto',
        }}>
          <PrivacyNotice />
        </Box>
      </Modal>

      <Snackbar
        open={state.succeeded}
        autoHideDuration={6000}
        onClose={() => {}}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Tack för att du kontaktar oss! Vi återkommer så snart vi kan.
        </Alert>
      </Snackbar>
     <Snackbar
  open={state.errors && state.errors.length > 0}
  autoHideDuration={6000}
  onClose={() => {}}
>
  <Alert severity="error" sx={{ width: '100%' }}>
    Oj, något gick fel. Försök igen!
  </Alert>
          </Snackbar>
            

      </Box>
      
  );
};

export default CustomFormspreeForm;
