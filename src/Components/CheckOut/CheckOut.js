import { useState, useContext } from 'react';
import Order from '../Order/Order';
import { UserContext } from './../../App';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  addOrder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 'auto',
    marginTop: '100px',
    border: '1px solid #e6e4e4',
    maxWidth: '60%',
  },
  details: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cover: {
    maxWidth: '100px',
    display: 'flex',
    padding: 10,
    borderRadius: 14,
  },
  spacing: {
    marginLeft: '10px',
  },
}));

const CheckOut = (props) => {
  const classes = useStyles();
  const [logInUser, setLogInUser] = useContext(UserContext);
  const [Orders, setOrders] = useState();
  const { name, imageURL, price, category } = props.pd;

  const onSubmit = data => {

    const orderDetails = { ...logInUser, products: props.pd, shipment: data, orderTime: new Date() }

    fetch('https://cryptic-retreat-59113.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {

          alert('order successfully submitted!')
          setOrders(data)
        }
      })
  }
  return (
    <div>
      {
        Orders ? <>
          <Order></Order>
        </>
          : <Card className={classes.addOrder}>
            <div className={classes.details}>
              <CardMedia>
                <img className={classes.cover} src={imageURL} alt="" srcset="" />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography variant="subtitle1" color="textSecondary">
                  {name}
                </Typography>
                <Typography className={classes.spacing} variant="subtitle1" color="textSecondary">
                  Price: ${price}
                </Typography>
                <Typography className={classes.spacing} variant="subtitle1" color="textSecondary">
                  Category: {category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" onClick={() => onSubmit()}>Checkout</Button>
              </CardActions>
            </div>

          </Card>
      }
    </div>
  );
};

export default CheckOut;