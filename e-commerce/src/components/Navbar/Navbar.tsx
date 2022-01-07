import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';

import logo from '../../assets/commerce.png';
import { getCartModuleSelector } from '../../store/cart/selectors';
import { PUBLIC_ROUTE } from '../../routes';

const PrimarySearchAppBar: FC = (): JSX.Element => {
  const { carts } = useSelector(getCartModuleSelector);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const renderMobileMenu: JSX.Element = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to={PUBLIC_ROUTE.CART}
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={carts?.total_items} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to={PUBLIC_ROUTE.HOME}
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
          </Typography>
          <div className={classes.grow} />
          <IconButton
            component={Link}
            to={PUBLIC_ROUTE.CART}
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={carts?.total_items} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
