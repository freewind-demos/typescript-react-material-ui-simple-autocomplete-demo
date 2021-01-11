import React, {FC, useState} from 'react'
import {SimpleAutocomplete} from './SimpleAutocomplete';
import {CssBaseline} from '@material-ui/core';

type Option = { label: string, value: string }

const options: Option[] = [
  {label: 'aaa aaa aaa aaa', value: 'aaa'},
  {label: 'bbb bbb bbb bbb', value: 'bbb'},
  {label: 'ccc ccc ccc ccc', value: 'ccc'},
  {label: 'ddd ddd ddd ddd', value: 'ddd'},
]

export const Hello: FC = () => {
  // Notice: the initial value should be passed explicitly
  // if no initialState provided, it will be undefined and we will get error:
  // `Material-UI: A component is changing the uncontrolled value state of Autocomplete to be controlled.`
  const [selected, setSelected] = useState<Option | null>({label: 'aaa aaa aaa aaa', value: 'aaa'})

  return <div>
    <CssBaseline />
    <SimpleAutocomplete<Option>
      style={{width: 150}}
      options={options}
      getOptionLabel={(option) => option.label}
      value={selected}
      onChange={(_, value) => setSelected(value)}
      label={'Combo box'}
    />
  </div>
}
