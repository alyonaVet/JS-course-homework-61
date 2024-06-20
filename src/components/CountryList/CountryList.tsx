import {List} from '@mui/material';
import CountryItem from './CountryItem/CountryItem';
import {useCallback, useEffect, useState} from 'react';
import {ApiCountry, CountryItemType} from '../../types';
import axios from 'axios';
import {NAMES_URL} from '../../constans';

const CountryList = () => {
  const [countries, setCountries] = useState<CountryItemType[]>([]);

  const fetchCountries = useCallback(async () => {
    const { data: countries } = await axios.get<ApiCountry[]>(NAMES_URL);
    console.log(countries);

    const allCountries = countries.map(country => ({
      name: country.name,
    }));

    setCountries(allCountries);
  }, []);

  useEffect(() => {
    void fetchCountries();
  }, [fetchCountries]);


  return (
    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {countries.map((country, index) => (
        <CountryItem key={index} name={country.name} />
      ))}
    </List>
  );
};

export default CountryList;

