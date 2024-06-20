import {Box, Container, Stack, Typography} from '@mui/material';
import React from 'react';
import {CountryInfoType} from '../../types';

interface CountryInfoProps {
  country: CountryInfoType;
}


const CountryInfo: React.FC<CountryInfoProps> = ({country}) => {

  return (
    <Container
      sx={{
        width: '100%',
        height: 500,
        bgcolor: 'background.paper',
        border: '1px solid lightgrey',
        borderRadius: 1,
        padding: '1rem',
      }}>
      <Stack direction="row" sx={{justifyContent: 'space-between'}}>
        <Box>
          <Typography variant="h4" component="h4" sx={{marginBottom: '1.5rem'}}>{country.name}</Typography>
          <Typography variant="h6" component="p">Capital: {country.capital}</Typography>
          <Typography variant="h6" component="p">Population: {country.population} people</Typography>
        </Box>
        <Box
          component="img"
          src={country.flag}
          alt={`${country.name} flag`}
          sx={{width: '200px', height: 'auto'}}
        />
      </Stack>

      <Box>
        <Typography variant="h5" component="p">Borders with:</Typography>
        {country.borders.map((border, index) => (
          <Typography key={index} variant="h6" component="p">{border}</Typography>
        ))}

      </Box>

    </Container>
  );
};

export default CountryInfo;