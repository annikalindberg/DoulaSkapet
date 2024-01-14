import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, TextField, Typography, Snackbar, Alert, Modal, Checkbox, FormControlLabel, Link } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PrivacyNotice from './Integritetsmeddelande';
import { Helmet } from 'react-helmet';

const AkutDoulaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
      email: '',
        phone: '', // Added phone number field

    message: '',
    consent: false,
  });
  const [state, handleSubmit] = useForm('myyrykwk'); // Replace 'your-form-id' with your actual Formspree form ID
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
        bgcolor: '#eee778', // Light red background
          borderRadius: 2,
        border: '4px solid #D32F2F', // Red border
      }}
    >
      <Helmet>
        <title>Akutdoula</title>
      <meta name="description" content="Akutdoula eller expressdoula är en tjänst för dig som behöver en doula snabbt och oplanerat. Vår akutdoulatjänst är anpassad efter de situationer när någonting oförutsätt inträffar, till exempel om din partner eller stödperson blir sjuk och inte kan vara med på förlossningen. Använd vårt Akutdoula-formulär så får du garanterat svar så snabbt vi kan, men senast inom 24 timmar."></meta>
      </Helmet>
                    <Typography variant="body1" sx={{ color: 'text.primary', mb: 2 }}>
            Akutdoula formulär
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.primary', mb: 2 }}>Här svarar jag så snart jag kan, men inte senare än 24 h. Vänligen skriv gärna ett telefonnummer jag kan nå dig/er på i meddelanderutan</Typography>
     <TextField
        label="Name"
        variant="outlined"
        name="name"
              value={formData.name}
              required
                fullWidth
        onChange={handleChange}
        sx={{ bgcolor: 'background.default', borderColor: 'text.primary' }}
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
/*         color="secondary" // Bold button color
 */  disabled={!isFormValid()}
  sx={{ mt: 2, fontWeight: 'bold', color: '#d30f0f' }}
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
          Tack för att du kontaktar mig! Jag återkommer så snart jag kan (senast inom 24 h).
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

export default AkutDoulaForm;
