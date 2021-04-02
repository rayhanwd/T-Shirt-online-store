import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    AdminPage:{
        display: 'flex',
    },
    Dashboard:{
        margin: 'auto',
    },
    AdminInfo:{
        backgroundColor: '#3f51b5',
        width: '20%',
        height: '100vh',
        color: 'white',
    },
    AdminTitle:{
        textAlign: 'center',
        paddingBottom:20,
    },
   
    adminLink:{
        textDecoration:'none',
        color: '#ffff',
        margin: '50px',
        '&:hover': {
            color: "white",           
            cursor:"pointer",
         },
    },
}));
const Admin = () => {
    const classes = useStyles();
    return (
        <div className={classes.AdminPage}>
        <div className={classes.AdminInfo}>
        <Typography className={classes.AdminTitle}  variant="h5" >Admin</Typography>
                <Link className={classes.adminLink} to='/addproduct'>Add Product</Link>
                <br></br><br></br>
                <Link className={classes.adminLink} to='/manageproduct'>Manage Product</Link>
        </div>
              <div className={classes.Dashboard}>
                  <Typography className={classes.AdminTitle} variant="h5">World small! Online Shopping Store</Typography>
                  <img src="https://i.ibb.co/2hFy8cm/Adobe-Stock-222904305-e1609956194500.jpg" alt="" srcset=""/>
              </div>
        </div>
    );
};

export default Admin;