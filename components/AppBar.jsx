import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Tooltip from '@material-ui/core/Tooltip';

import { useThemeContextProvider } from './Providers/Theme';
import Menu from './MenuDrawer';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: 5,
    flexGrow: 1,
  },
  icon: {
    marginRight: 15,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Navigation(props) {
  const { clipped = false, rightToolbar = <></>, menuItems, open, handleDrawerToggle } = props;
  const classes = useStyles();
  const { toggleType, getType } = useThemeContextProvider();
  return (
    <>
    <AppBar position="fixed" color="default" className={ clipped ? classes.appBar: ''}>
      <Toolbar>
        <MenuIcon onClick={handleDrawerToggle}/>
        <Typography variant="h6" className={classes.title}>
          Theme generator
        </Typography>
        <Tooltip title="Toggle dark/light theme">
          {getType() ?
            <Brightness7Icon className={classes.icon} onClick={() => toggleType()} /> :
            <Brightness4Icon className={classes.icon} onClick={() => toggleType()} />
          }
        </Tooltip>
        {rightToolbar}
      </Toolbar>
    </AppBar>
    <Menu menuItems={menuItems} open={open} handleDrawerToggle={handleDrawerToggle}/>
    </>
  );
}
