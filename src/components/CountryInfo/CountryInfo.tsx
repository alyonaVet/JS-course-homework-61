import {Box, Container, List, ListItem, ListItemText, Stack, Typography} from '@mui/material';
import React from 'react';
import {CountryInfoType, NeighbourType} from '../../types';

interface CountryInfoProps {
  country: CountryInfoType;
  neighbours: NeighbourType[];
}

const CountryInfo: React.FC<CountryInfoProps> = ({country, neighbours}) => {

  if (!country || !country.name) {
    return (
      <Container
        sx={{
          width: '100%',
          height: 'auto',
          bgcolor: 'background.paper',
          border: '1px solid lightgrey',
          borderRadius: 1,
          padding: '1rem',
        }}
      >
        <Typography variant="h5" align="center">Select a country to get information about it!</Typography>
      </Container>
    );
  }
  return (
    <Container
      sx={{
        width: '100%',
        height: 'auto',
        bgcolor: 'background.paper',
        overflowY: 'auto',
        border: '1px solid lightgrey',
        borderRadius: 1,
        padding: '1rem',
      }}>
      <Stack direction="row" sx={{justifyContent: 'space-between'}}>
        <Box>
          <Typography variant="h4" component="h4" sx={{marginBottom: '1.5rem'}}>{country.name}</Typography>
          <Typography variant="h6" component="p">Capital: {country.capital}</Typography>
          <Typography variant="h6" component="p">Population: {country.population} people</Typography>
          <Typography variant="h6" component="p">Region: {country.region}</Typography>
        </Box>
        <Box
          component="img"
          src={country.flag}
          alt={`${country.name} flag`}
          sx={{width: 'auto', height: '150px'}}
        />
      </Stack>

      <Box>
        <Typography variant="h5" component="p" marginTop={2}>Borders with:</Typography>
        <List sx={{marginLeft: '100px'}}>
          {neighbours.length > 0 && (
            neighbours.map((neighbour, index) => (
              <ListItem key={index}>
                <ListItemText primary={`- ${neighbour.name}`} />
              </ListItem>
            ))
          )}
          {neighbours.length === 0 && (
            <ListItem>
              <ListItemText primary={'No borders'} />
            </ListItem>)}
        </List>
      </Box>
    </Container>
  );
};

export default CountryInfo;