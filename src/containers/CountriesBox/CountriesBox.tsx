import {Box} from '@mui/material';
import CountryList from '../../components/CountryList/CountryList';

const CountriesBox = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 500,
        maxWidth: 360,
        bgcolor: 'background.paper',
        overflowY: 'auto',
        border: '1px solid lightgrey',
        borderRadius: 1,
      }}>
      <CountryList />
    </Box>
  );
};

export default CountriesBox;