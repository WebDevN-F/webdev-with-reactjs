import React from 'react'
import { TextField, Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import DebouncedInput from './DebouncedInput';

const DebouncedTextField = DebouncedInput(TextField, { timeout: 500 })

const Search = ({ query, handleChange }) => {
    return (
        <>
            <DebouncedTextField name="searchText" value={query.searchText || ''} label="Search" variant="outlined" onChange={handleChange} />
            <FormControl fullWidth>
                <InputLabel id="amount-label">Amount</InputLabel>
                <Select
                    name="amount"
                    labelId="amount-label"
                    value={query.amount}
                    label="Amount"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default Search