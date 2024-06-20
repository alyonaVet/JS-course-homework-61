import React from 'react';
import {ListItem, ListItemButton, ListItemText} from '@mui/material';

interface CountryItemProps {
  name: string;
  onClick: React.MouseEventHandler;
}

const CountryItem: React.FC<CountryItemProps> = ({name, onClick}) => {
  return (
    <ListItem  component="div" disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default CountryItem;