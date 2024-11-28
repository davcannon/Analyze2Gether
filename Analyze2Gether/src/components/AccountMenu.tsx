import React from 'react';
import Menu from '@mui/material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';

interface AccountMenuProps {
    anchorElement: HTMLElement | null;
    onClosed: () => void;
}

export default function AccountMenu(props: AccountMenuProps) {
    function onSignOutButtonClicked() {
        props.onClosed();
        // Doesn't do anything at this stage - just closes account menu
    }

    return (
        <Menu
            id="header-account-menu"
            data-testid="header-account-menu"
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
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="Profile picture" src="https://thispersondoesnotexist.com" />
                </ListItemAvatar>
                <ListItemText primary="Logan Rutherford" secondary="lrutherford@datalabs.com" />
            </ListItem>
            <Divider />
            <MenuItem onClick={onSignOutButtonClicked} sx={{ paddingBlock: "0.75em" }}>
                <Logout sx={{ mr: 2 }} />
                Sign out
            </MenuItem>
        </Menu>
    );
}
