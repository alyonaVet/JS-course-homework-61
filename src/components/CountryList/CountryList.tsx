import React from 'react';
import {List} from '@mui/material';
import CountryItem from './CountryItem/CountryItem';
import {CountryItemType} from '../../types';

interface CountryListProps {
  countries: CountryItemType[];
  getCountryInfo: (country: CountryItemType) => void;
}
const CountryList: React.FC<CountryListProps> = ({countries, getCountryInfo}) => {

  return (
    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {countries.map((country, index) => (
        <CountryItem key={index} name={country.name} onClick={() => getCountryInfo(country)}/>
      ))}
    </List>
  );
};

export default CountryList;

