import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import logo from '../../assets/images/scriba/logoInverted.png';
import {
    ProfileText,
    MyaccountText,
    NotificationText,
    MessagesText,
    SignOutText,
    HomePageName,
    ReportName,
    GraphicsName,
    AttendanceSName,
    ClientText,
} from '../../assets/strings';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [
        mobileMoreAnchorEl,
        setMobileMoreAnchorEl,
    ] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleAppClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>{ProfileText}</MenuItem>
            <MenuItem onClick={handleMenuClose}>{MyaccountText}</MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Link style={{ textDecoration: 'none', color: 'red' }} to="/">
                    {SignOutText}
                </Link>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 0 new mails" color="inherit">
                    <Badge badgeContent={1} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>{MessagesText}</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label="show 3 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={3} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>{NotificationText}</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>{ProfileText}</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.logoIcon}
                    >
                        <img
                            src={logo}
                            className={classes.logoImg}
                            alt="Logo"
                        />
                    </IconButton>
                    <Link to="/dashboard" className={classes.navLinks}>
                        {HomePageName}
                    </Link>
                    <Link to="/atendimentos" className={classes.navLinks}>
                        {AttendanceSName}
                    </Link>
                    <Link to="/clientes" className={classes.navLinks}>
                        {ClientText}
                    </Link>
                    <Link to="/relatorios" className={classes.navLinks}>
                        {ReportName}
                    </Link>
                    <Link to="/graficos" className={classes.navLinks}>
                        {GraphicsName}
                    </Link>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="show 1 new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={1} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="show 7 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={7} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
