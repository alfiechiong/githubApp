import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IFilter {
  language: string;
  setLanguage: (filterLang: string) => void;
}

const Filter = ({ setLanguage, language }: IFilter) => {
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Language</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={language}
          label='Language'
          onChange={handleChange}
        >
          <MenuItem value={'javascript'}>Javascript</MenuItem>
          <MenuItem value={'java'}>Java</MenuItem>
          <MenuItem value={'php'}>Php</MenuItem>
          <MenuItem value={'assembly'}>Assembly</MenuItem>
          <MenuItem value={'rust'}>Rust</MenuItem>
          <MenuItem value={'phython'}>Phython</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
