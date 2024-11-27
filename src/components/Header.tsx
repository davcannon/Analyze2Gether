import React, {useState, MouseEvent} from 'react';
import {Link} from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsMenu from "./NotificationsMenu";
import AccountMenu from './AccountMenu';
import {useTheme} from '@mui/material/styles';
import '../styles/Header.css';

const HEADER_SEARCH_BAR_BORDER_RADIUS = 8;

export default function Header() {
  const [notificationsMenuAnchorElement, setNotificationsMenuAnchorElement] = useState<null | HTMLElement>(null);
  const [accountMenuAnchorElement, setAccountMenuAnchorElement] = useState<null | HTMLElement>(null);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const theme = useTheme();

  function showSearchBar() {
    setIsSearchBarVisible(true);
  }

  function hideSearchBar() {
    setIsSearchBarVisible(false);
  }

  const openNotificationsMenu = (event: MouseEvent<HTMLElement>) => {
    setNotificationsMenuAnchorElement(event.currentTarget);
  };

  const closeNotificationsMenu = () => {
    setNotificationsMenuAnchorElement(null);
  };

  const openAccountMenu = (event: MouseEvent<HTMLElement>) => {
    setAccountMenuAnchorElement(event.currentTarget);
  };

  const closeAccountMenu = () => {
    setAccountMenuAnchorElement(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ width: "100%", maxWidth: "80rem", margin: "0 auto" }}>
          <Link className="header-title" data-testid="header-title" to="/">
            <Typography variant="h6">Analyze2Gether</Typography>
          </Link>
          {isSearchBarVisible ? <TextField
              autoFocus
              variant="outlined"
              type="search"
              color="secondary"
              placeholder="Search..."
              // When text field is defocused (e.g. user clicks away), hide search bar
              onBlur={hideSearchBar}
              slotProps={{
                input: {
                  endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                  ),
                  sx: {
                    // Input component renders the text field's focused border, so we need
                    // to apply the border radius again here to round the focused border
                    borderRadius: HEADER_SEARCH_BAR_BORDER_RADIUS
                  },
                },
              }}
              sx={{
                backgroundColor: theme.palette.secondary.light,
                borderRadius: HEADER_SEARCH_BAR_BORDER_RADIUS,
              }}
          /> : <IconButton
              size="large"
              aria-label="Search"
              onClick={showSearchBar}
              color="inherit"
          >
            <SearchIcon />
          </IconButton>}
          <IconButton
              size="large"
              color="inherit"
              aria-label="Open Notifications menu button"
              aria-controls="header-notifications-menu"
              aria-haspopup="true"
              onClick={openNotificationsMenu}
          >
            <Badge badgeContent="2" color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="Open Account menu button"
            aria-controls="header-account-menu"
            aria-haspopup="true"
            onClick={openAccountMenu}
          >
            <Avatar alt="Profile picture" src="https://thispersondoesnotexist.com" />
          </IconButton>
          <NotificationsMenu
              anchorElement={notificationsMenuAnchorElement}
              onClosed={closeNotificationsMenu}
          />
          <AccountMenu anchorElement={accountMenuAnchorElement} onClosed={closeAccountMenu} />
        </Toolbar>
      </AppBar>
    </>
  );
}
