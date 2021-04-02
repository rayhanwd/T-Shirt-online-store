import React, { useEffect, useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    overflow: 'hidden',
  },
  Spinner: {
    marginTop: '160px',
    margin: 'auto',
  },
}));
const Home = () => {

  const classes = useStyles();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://cryptic-retreat-59113.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <Grid container className={classes.root} spacing={2}>

      {Products.length === 0 && <CircularProgress className={classes.Spinner} />}
      {
        Products.map(product => <DisplayProducts key={product.code} product={product}></DisplayProducts>)
      }
    </Grid>
  );
};

export default Home;