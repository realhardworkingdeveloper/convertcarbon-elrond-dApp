import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import NavigationDrawer from "../../shared/components/NavigationDrawer";
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';

const styles = theme => ({
  logo: {
    paddingLeft: 40,
    height: 75,
    marginTop: 3,
  },
  appBar: {
    backgroundColor: 'rgba(17, 24, 39, 0.5)',
    boxShadow: 'none'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    color: '#fff',
    margin: "0 12px",
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  
  const location = useLocation();
  const loginPath = {pathname: '/unlock', state: { callbackUrl: location.pathname }};

  const { address } = useGetAccountInfo();
  const isLoggedIn = Boolean(address);

  const menuItems = [
    {
      link: "/",
      name: "TOKEN SALE",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/whitepaper",
      name: "WHITEPAPER",
      icon: <BookIcon className="text-white" />
    },
    {
      link: "/terms",
      name: "TERMS & CONDITIONS",
      icon: <BookIcon className="text-white" />
    },
    {
      link: "/community",
      name: "COMMUNITY",
      icon: <BookIcon className="text-white" />
    },
    {
      link: "/faq",
      name: "FAQ",
      icon: <BookIcon className="text-white" />
    },
    {
      link: "/collection",
      name: "MY COLLECTION",
      icon: <BookIcon className="text-white" />
    },
    {
      link: "/unlock",
      name: "Connect",
      icon: <LockOpenIcon className="text-white" />
    }
  ];

  const handleLogout = () => {
    logout(`${window.location.origin}/`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img src="assets/images/logo.png" className={classes.logo}/>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large">
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {menuItems.map(element => {
                if (element.link) {
                  if (element.link == '/unlock' && isLoggedIn == false) {
                    return (
                      <Link
                        key={element.name}
                        to={loginPath}
                        className={classes.noDecoration}
                        onClick={handleMobileDrawerClose}
                      >
                        <Button
                          color="secondary"
                          size="large"
                          classes={{ text: classes.menuButtonText }}
                        >
                          {element.name}
                        </Button>
                      </Link>
                    );
                  } 
                  else if(element.link == '/unlock' && isLoggedIn == true) {
                    return (
                      <Link
                        key={element.name}
                        to={'#'}
                        className={classes.noDecoration}
                        onClick={() => {
                          alert("");
                          handleLogout();
                          handleMobileDrawerClose();
                        }}
                      >
                        <Button
                          color="secondary"
                          size="large"
                          className={selectedTab === element.name ? 'selected' : null}
                          classes={{ text: classes.menuButtonText }}
                        >
                          Disconnect
                        </Button>
                      </Link>
                    )
                  }
                }
                return (
                  <Link
                    key={element.name}
                    to={element.link}
                    className={classes.noDecoration}
                    onClick={handleMobileDrawerClose}
                  >
                    <Button
                      color="secondary"
                      size="large"
                      className={selectedTab === element.name ? 'selected' : null}
                      classes={{ text: classes.menuButtonText }}
                    >
                      {element.name}
                    </Button>
                  </Link>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
