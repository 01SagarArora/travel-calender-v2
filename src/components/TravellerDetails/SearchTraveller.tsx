import React from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import styles from './SearchTraveller.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface TravelSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
}

const TravelSearch: React.FC<TravelSearchProps> = ({ searchQuery, onSearchChange, onSearchSubmit }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === 'Backspace') {
      onSearchSubmit();
    }
  };

  const clearSearchQuery = () => {
    onSearchChange('');
    onSearchSubmit();
  };

  return (
    <div className={styles.searchContainer}>
      <TextField
        type="text"
        size='small'
        placeholder="Enter Trip ID"
        className={styles.searchInput}
        value={searchQuery}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchQuery && <CloseIcon onClick={clearSearchQuery} className={styles.close} />}
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          sx: { borderRadius: "4px 0 0 4px" },
        }}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={onSearchSubmit}
        className={styles.searchButton}
      >
        Search
      </Button>
    </div>
  );
};

export default TravelSearch;