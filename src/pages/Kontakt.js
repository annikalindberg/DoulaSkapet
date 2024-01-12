import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import PageSpecificHero from "../components/PageSpecificHero";
 import { doulorArray } from "../components/DoulorArray";
 import FormspreeForm from "../components/FormspreeForm";
import ContactCards from "../components/ContactCards";
import AkutDoulaForm from "../components/AkutDoulaForm";

const Kontakt = () => {
    const title = "Kontakt";
    const subtitle = "Vi finns här för dig, hör av dig till oss så berättar vi mer om hur vi kan hjälpa dig.";

    const image = "/optimized-images/belliespregnant-tablet.webp";

    

    return (
        <PageWrapper>
            <PageSpecificHero
                title={title}
                subtitle={subtitle}
                image={image}
            />

         
            <Grid container spacing={4} justifyContent="center">
                {doulorArray.map((doula) => (
                    <Grid item xs={12} sm={12} md={6} lg={6} key={doula.id}> {/* Adjusted grid sizes */}
                        <ContactCards
                            name={doula.name}
                            image={doula.image}
                            bor={doula.bor}
                            pris={doula.pris}
                            kontakt={doula.kontakt} 
                            showFormButton={doula.showFormButton}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box id="contact-form"
                maxWidth={600} sx={{ mx: 'auto', mt: 6, mb: 6, }}>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 9, }}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                        Kontakta Annika
                    </Typography>
                          <Typography variant="body1" sx={{ color: 'text.primary', mb: 2 }}>
        Detta formulär är för dig som är inresserad av Annikas doulatjänster såsom Doulapaketet eller Postpartumstöd. Vill du boka ett kostnadsfritt lära-känna-samtal med mig, varmt välkommen att skriva till mig här så kontaktar jag dig snarast och bokar. Ser fram emot att höras! 
      </Typography>
                    <FormspreeForm />
                </Grid>

                <Grid item xs={12} md={12}>
                    <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: '#d30f0f' }}>
                        Akutdoula-formulär
                    </Typography>
                     <Typography variant="body1" sx={{ color: '#d30f0f', mb: 2 }}>
    Detta formulär gäller ENDAST ärenden om Akutdoula-tjänster, för andra ärenden använd övriga kontaktvägar.
          </Typography>
                    <AkutDoulaForm />
                </Grid>
                </Grid>
            </Box>
        </PageWrapper>
    );
}
export default Kontakt;
