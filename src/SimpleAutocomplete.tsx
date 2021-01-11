import {makeStyles, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import {AutocompleteProps} from '@material-ui/lab/Autocomplete/Autocomplete';
import {PartialBy} from './typeUtils';

const useStyles = makeStyles(() => ({
  inputRoot: {
    paddingRight: '23px !important',
  },
  endAdornment: {
    right: '5px !important',
    top: 'calc(50% - 12px)',
  },
  option: {
    '&[aria-selected="true"]': {
      backgroundColor: 'rgb(38, 132, 255)',
      color: 'white',
    },
  },
  clearIndicator: {
    display: 'none',
  },
}));

export function SimpleAutocomplete<T>(
  params: PartialBy<AutocompleteProps<T, false, false, false>, 'renderInput'> & { label: string }
): JSX.Element {
  const {
    size = 'small',
    openOnFocus = true,
    renderInput = (inputParams) => <TextField {...inputParams} label={params.label} variant="outlined"/>,
    ...restParams
  } = params;

  const classes = useStyles();
  return (
    <Autocomplete classes={classes} size={size} openOnFocus={openOnFocus} renderInput={renderInput} {...restParams} />
  );
}
