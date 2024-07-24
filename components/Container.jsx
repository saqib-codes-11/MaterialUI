import React from 'react';
import {makeStyles} from '@material-ui/styles'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }), 
        marginTop: 50,
        marginLeft: 0,
      },
      contentShift: {
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginTop: 50,
        marginLeft: drawerWidth,
      },
}));

export default function Container(props){
    const {open = false, children} = props;
    const classes = useStyles();
    return (
        <div className={open? classes.contentShift: classes.content}>
            {children}
        </div>
    );
} 