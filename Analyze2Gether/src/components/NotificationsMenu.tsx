import React from 'react';
import Menu from '@mui/material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

interface NotificationsMenuProps {
    anchorElement: HTMLElement | null;
    onClosed: () => void;
}

export default function NotificationsMenu(props: NotificationsMenuProps) {
    return (
        <Menu
            id="header-notification-menu"
            data-testid="header-notifications-menu"
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
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar alt="Profile picture" src="https://thispersondoesnotexist.com" />
                </ListItemAvatar>
                <ListItemText primary="Sia annotated" secondary="on VLE vs Grades > courses" />
            </ListItemButton>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar alt="Profile picture" src="https://thispersondoesnotexist.com" />
                </ListItemAvatar>
                <ListItemText primary="Will annotated" secondary="on VLE vs Grades > courses" />
            </ListItemButton>
        </Menu>
    );
}
