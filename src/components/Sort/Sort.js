import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputValue, handleSortingValue } from '../../redux/slicers/homeSlice'
import { sorting } from '../../utils/constants';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Sort = () => {
    const dispatch = useDispatch()
    const { sortingValue } = useSelector(state => state.home)

    const sortingItems = sorting.map((el, index) => {
        return <MenuItem color="warning" key={index} value={el}
        >{el}</MenuItem>
    })

    const handleSortingValueUI = (e) => {
        dispatch(handleSortingValue(e.target.value))
        dispatch(handleInputValue(''))
    }

    return (
        <div style={{ margin: '0px 10px 10px 10px', width: '20%' }}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel color="warning" id="demo-simple-select-label">Sorting</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortingValue}
                        label="Sorting"
                        color="warning"
                        onChange={handleSortingValueUI}
                    >
                        {sortingItems}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default Sort;