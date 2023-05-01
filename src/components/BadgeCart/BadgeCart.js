import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 5,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const BadgeCart = ({ handleToggle }) => {

    const { cartData } = useSelector(state => state.cart)

    const badgeSum = cartData.reduce((acc, rec) => acc + rec.quantity, 0);

    return (
        <div onClick={handleToggle}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={badgeSum} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </div>
    );
}
export default BadgeCart