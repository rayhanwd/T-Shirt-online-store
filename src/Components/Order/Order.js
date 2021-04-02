
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  SpinnerL: {
    marginTop: '160px',
    marginLeft: '50%',
  },
  ThankYouMessage: {
    textAlign: 'center',
    marginTop: 100,
  },
  OrderedItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 'auto',
    marginTop: 40,
    border: '1px solid #e6e4e4',
    maxWidth: '70%',
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
const Order = () => {
  const classes = useStyles();
  const [logInUser, setLogInUser] = useContext(UserContext);
  const [ordered, setOrders] = useState([])

  useEffect(() => {
    fetch('https://cryptic-retreat-59113.herokuapp.com/ordered?email=' + logInUser.email)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  return (
    <>
      { ordered.length === 0 ? <Typography className={classes.ThankYouMessage} variant="h6" color="textSecondary">
      You have no order submitted
      </Typography> : <Typography className={classes.ThankYouMessage} variant="h6" color="textSecondary">
      Thank you for order! You product will be soon delivered to your home
      </Typography>}
      {ordered.length === 0 && <CircularProgress className={classes.SpinnerL} />}
      {
        ordered.map(order => <Card className={classes.OrderedItem}>
          <div className={classes.details}>
            <CardMedia>
              <img className={classes.cover} src={order.products.imageURL} alt="" srcset="" />
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography variant="subtitle1" color="textSecondary">
                {order.products.name}
              </Typography>
              <Typography className={classes.spacing} variant="subtitle1" color="textSecondary">
                Product code: {order.products.code}
              </Typography>
              <Typography className={classes.spacing} variant="subtitle1" color="textSecondary">
                Price: ${order.products.price}
              </Typography>
              <Typography className={classes.spacing} variant="subtitle1" color="textSecondary">
                Ordered time: {(new Date(order.orderTime).toDateString('dd/mm/yyyy'))}
              </Typography>
            </CardContent>
          </div>
        </Card>)
      }
    </>
  );
};

export default Order;