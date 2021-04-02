import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Link 
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menu: {
        marginLeft: theme.spacing(2),

      },
      menuLink: {
        color: 'white',
        textDecoration: "none",
        paddingRight: theme.spacing(9),
        '&:hover': {
            color: "white",           
            cursor:"pointer",
         },
      },
      lastChild:{
        color: 'white',
        textDecoration: "none",
        paddingRight: theme.spacing(3),
        '&:hover': {
            color: "white",           
            cursor:"pointer",
         },
      },
      LogInLink:{
      color: 'white',
      textDecoration: "none",
      paddingRight: theme.spacing(1),
      '&:hover': {
          color: "white",           
          cursor:"pointer",
       },
    },
    userName:{
        marginBottom:'0',
        marginRight:'15px',
    }

  }));
const Header = () => {
const [logInUser, setLogInUser] = useContext(UserContext);
    const{name} = logInUser;
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              T shirt Collection
            </Typography>
            <Typography className={classes.menu}>
      <Link to="/home" className={classes.menuLink}>
        Home
      </Link>
      <Link to="/order" className={classes.menuLink}>
        Order
      </Link>
      <Link to="/admin" className={classes.menuLink}>
        Admin
      </Link>
      <Link to="/deals" className={classes.lastChild}>
        Deals
      </Link>
      </Typography>
        <p className={classes.userName}>{name}</p>     
            {name?<Button onClick={() => setLogInUser({})}  color="inherit"><Link className={classes.LogInLink} to="/login">Log Out</Link></Button> : <Button  color="inherit"><Link className={classes.LogInLink} to="/login">Log In</Link></Button>}
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default Header;