import React from 'react';
import {ListItem, ListItemButton, ListItemText} from '@mui/material';

interface CountryItemProps {
  name: string;
}

const CountryItem: React.FC<CountryItemProps> = ({name}) => {
  return (
    <ListItem  component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default CountryItem;