import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, TextField, Typography, Snackbar, Alert, Modal, Checkbox, FormControlLabel, Link } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PrivacyNotice from './Integritetsmeddelande';

const CustomFormspreeForm = () => {
  const [state, handleSubmit] = useForm('xyyrygee'); // Replace 'your-form-id' with your actual Formspree form ID
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const isFormValid = () => {
    return state.submitting || state.succeeded;
  };

  return (
    <Box
      component="form"
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
      <Typography variant="h5" sx={{ color: 'text.primary', mb: 2 }}>
        Contact Us
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        required
        fullWidth
        sx={{ bgcolor: 'background.default' }}
      />
      <ValidationError field="name" prefix="Name" errors={state.errors} />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        required
        fullWidth
        sx={{ bgcolor: 'background.default' }}
      />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <TextField
        label="Message"
        variant="outlined"
        name="message"
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
          Message sent successfully!
        </Alert>
      </Snackbar>
     <Snackbar
  open={state.errors && state.errors.length > 0}
  autoHideDuration={6000}
  onClose={() => {}}
>
  <Alert severity="error" sx={{ width: '100%' }}>
    An error occurred. Please try again.
  </Alert>
</Snackbar>

    </Box>
  );
};

export default CustomFormspreeForm;
