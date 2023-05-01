import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCategoryValue, handleInputValue } from '../../redux/slicers/homeSlice';
import { options } from '../../utils/constants';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Categories = () => {
    const { value } = useSelector(state => state.home)
    const categoriesItems = options.map((el, index) =>
        <MenuItem color="warning" key={index} value={el}
        >{el}</MenuItem>
    )
    const dispatch = useDispatch()

    const handleCategoryValueUI = (e) => {
        dispatch(handleCategoryValue(e.target.value))
        dispatch(handleInputValue(''))
    }

    return (
        <div style={{ display: 'flex', width: '200%' }} className='select'>
            <Box sx={{ minWidth: 120 }}>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        border="none"
                        value={value}
                        color="warning"
                        onChange={handleCategoryValueUI}
                    >
                        {categoriesItems}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default Categories;