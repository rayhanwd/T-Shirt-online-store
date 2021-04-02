import React, { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  TableWidth:{
    width:'700px',
  },
}));
const Product = (props) => {
const classes = useStyles();
const { name, category, price,code } = props.productInfo;

const delProduct =(code)=>{
        fetch(`https://cryptic-retreat-59113.herokuapp.com/delete/${code}`,{
          method:'DELETE',
        })
            .then(res => res.json())
            .then(result => {
              if(result){
                // event.target.parentNode.style.display = 'none';
                alert('Product Delete Successfully!')
              }
            })
    }
  return (
      <Table className={classes.TableWidth} striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td><Button onClick={() => delProduct(`${code}`)}variant="contained" color="secondary">Del</Button></td>
          </tr>
        </tbody>
      </Table>
  );
};

export default Product;