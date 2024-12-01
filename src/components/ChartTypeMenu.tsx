import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface ChartTypeMenuProps {
    anchorElement: HTMLElement | null;
    onClosed: () => void;
}

export default function ChartTypeMenu(props: ChartTypeMenuProps) {
    return (
        <Menu
            id="chart-type-menu"
            anchorEl={props.anchorElement}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(props.anchorElement)}
            onClose={props.onClosed}
        >
            <MenuItem onClick={props.onClosed}>Scatter plot</MenuItem>
            <MenuItem onClick={props.onClosed}>Box plot</MenuItem>
            <MenuItem onClick={props.onClosed}>Bar chart</MenuItem>
        </Menu>
    );
}
