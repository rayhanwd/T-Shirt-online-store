import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    margin: theme.spacing(2),
    cursor: "default",
  },
  media: {
    height: 250,
    cursor: "default",
  },
  price:{
    margin:10,
  },
  LinkButton: {
    margin:10,
    marginLeft: 'auto !important',
  },
}));

const DisplayProducts = (props) => {
  const {name,price, imageURL,code} = props.product;

  const history = useHistory();
const showDetails = (code)=>{
  const url = `products/${code}`
  history.push(url);
}

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Grid container justify="center" spacing={2}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imageURL}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography className={classes.price} gutterBottom variant="p" component="p">
              $:{price}
            </Typography>
            <Button className={classes.LinkButton} onClick={()=>showDetails(code)} size="small" color="primary">
              Buy Now
        </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DisplayProducts;