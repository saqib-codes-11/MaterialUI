import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';

import Theme from './Theme';
import AppBar from './AppBar';
import { useThemeContextProvider } from './Providers/Theme';
import Container from './Container';
import About from './About';

export default function Root(){
    const [open, setOpen] = React.useState(false);
    const {getTheme } = useThemeContextProvider();
    return (
        <ThemeProvider theme={getTheme()}>
        <Router>
            <Route render={p => (
                  <AppBar 
                  clipped 
                  rightToolbar={
                    <Tooltip title="Open in GitHub">
                      <GitHubIcon onClick={() => { window.location.href = "https://github.com/jagribble/MateralUITheme" }} />
                    </Tooltip>}
                    menuItems={[{title: 'Home', path: '/'}, {title: 'About', path: '/about'}]}
                    open={open}
                    handleDrawerToggle={() => setOpen(!open)}
                    {...p}
                  />
            )} />
            <Switch>
                <Route path="/" exact render={p => (<Container open={open}><Theme {...p}/></Container>)}/>
                <Route path="/about" exact render={p => (<Container open={open}><About {...p}/></Container>)}/>
            </Switch>
        </Router>
        </ThemeProvider>
    );
}