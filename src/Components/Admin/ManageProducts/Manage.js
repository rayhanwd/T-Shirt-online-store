import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Products';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Spinner: {
        marginTop: '160px',
        margin: 'auto',
    },
    manageProduct: {
        display: 'flex',
    },
    AdminTitle: {
        textAlign: 'center',
        paddingBottom: 20,
    },
    adminLink: {
        textDecoration: 'none',
        color: '#ffff',
        margin: '50px',
        '&:hover': {
            color: "white",
            cursor: "pointer",
        },
    },
    ManagePage: {
        background: '#3f51b5',
        width: '20%',
        color: 'white',
    },
    ManageTable: {
        marginTop: 30,
        margin: '0 auto',
    },
}));
const Manage = () => {
    const classes = useStyles();
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-retreat-59113.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className={classes.manageProduct}>
            <div className={classes.ManagePage}>
                <Typography className={classes.AdminTitle} variant="h5" >Admin</Typography>
                <Link className={classes.adminLink} to='/addproduct'>Add Product</Link>
                <br></br><br></br>
                <Link className={classes.adminLink} to='/manageproduct'>Manage Product</Link>
            </div>
            <div className={classes.ManageTable}>
                {Products.length === 0 && <CircularProgress className={classes.Spinner} />}
                {
                    Products.map(product => <Product productInfo={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Manage;