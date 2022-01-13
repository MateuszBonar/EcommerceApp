import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { getCartModuleSelector } from 'Store/cart/selectors';
import { PUBLIC_ROUTE } from '../../routes';
import logo from 'Assets/commerce.png';

import useStyles from './styles';

const PrimarySearchAppBar: FC = (): JSX.Element => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const { t } = useTranslation();
  const { carts } = useSelector(getCartModuleSelector);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const shoppingIcon: JSX.Element = (
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
  );

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
        {shoppingIcon}
        <p>{t('inf_cart_elem')}</p>
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
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
            {t('inf_nav_main')}
          </Typography>
          <div className={classes.grow} />
          {shoppingIcon}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
