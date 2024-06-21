import {Box, Stack} from '@mui/material';
import CountryList from '../../components/CountryList/CountryList';
import {useCallback, useEffect, useState} from 'react';
import {ApiCountry, ApiCountryInfo, CountryInfoType, CountryItemType, NeighbourType} from '../../types';
import axios from 'axios';
import {NAME_URL, NAMES_URL} from '../../constans';
import CountryInfo from '../../components/CountryInfo/CountryInfo';

const CountriesBox = () => {

  const [countries, setCountries] = useState<CountryItemType[]>([]);
  const [country, setCountry] = useState<CountryInfoType>(
    {
      name: '',
      capital: '',
      population: 0,
      borders: [''],
      flag: '',
      region: ''
    }
  );
  const [neighbours, setNeighbours] = useState<NeighbourType[]>([]);

  const fetchCountries = useCallback(async () => {
    const {data: countries} = await axios.get<ApiCountry[]>(NAMES_URL);

    const allCountries = countries.map(country => ({
      name: country.name,
      alpha3Code: country.alpha3Code,
    }));

    setCountries(allCountries);
  }, []);

  const fetchOneCountry = useCallback(async (alpha3Code: string) => {
    const {data: country} = await axios.get<ApiCountryInfo>(NAME_URL + alpha3Code);

    const countryInfo: CountryInfoType = {
      name: country.name,
      capital: country.capital,
      population: country.population,
      borders: country.borders || [],
      flag: country.flag,
      region: country.region,
    };
    setCountry(countryInfo);

    if (countryInfo.borders.length > 0) {
      const neighbourPromises = countryInfo.borders.map(border =>
        axios.get<NeighbourType>(NAME_URL + border)
      );
      const neighboursData = await Promise.all(neighbourPromises);
      setNeighbours(neighboursData.map(neighbour => neighbour.data));
    } else {
      setNeighbours([]);
    }
  }, []);


  useEffect(() => {
    void fetchCountries();
  }, [fetchCountries]);

  const getCountryInfo = async (country: CountryItemType) => {
    await fetchOneCountry(country.alpha3Code);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Box
        sx={{
          width: '100%',
          height: 550,
          maxWidth: 360,
          bgcolor: 'background.paper',
          overflowY: 'auto',
          border: '1px solid lightgrey',
          borderRadius: 1,
        }}>
        <CountryList countries={countries} getCountryInfo={getCountryInfo}/>
      </Box>
      <CountryInfo country={country} neighbours={neighbours}/>
    </Stack>
  );
};

export default CountriesBox;