/* import React from 'react';
import PresentationsCards from '../components/PresentationsCards';
import { Grid } from '@mui/material';
import {doulorArray} from '../components/DoulorArray';
import PageWrapper from '../components/PageWrapper';
import PageSpecificHero from '../components/PageSpecificHero';
import MyBreadcrumbs from '../components/BreadCrumbs';

const VilkaViÄr = () => {

 
   return (
     <PageWrapper >
        <MyBreadcrumbs />
       <PageSpecificHero title="Om DoulaSkapet"/>
    
       <Grid container spacing={4} justifyContent="center">
        {doulorArray.map((doula) => (
          <Grid item
            sx={{ mt: 3 }}
            xs={12}
            sm={6}
            md={6}
            key={doula.id}>
            <PresentationsCards
     
              name={doula.name}
              image={doula.image}
              pris={doula.pris}
              bor={doula.bor}
              description={doula.description}
              erbjuder={doula.erbjuder}
            
              
            />
            
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default VilkaViÄr; */