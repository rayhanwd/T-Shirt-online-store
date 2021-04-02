import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    addProduct: {
        display: 'flex',
    },
    AdminTitle: {
        textAlign: 'center',
        paddingBottom: 20,
    },
    AdminInfo: {
        backgroundColor: '#3f51b5',
        width: '20%',
        height: '100vh',
        color: 'white',
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
    inputForm: {
        marginTop: 30,
        margin: '0 auto',
    },
    Form: {
        width: 600,
        display: 'flex',
        margin: '20px',
        paddingTop: 50,
        textAlign: 'center',
    },
    SubmitButton: {

        margin: '17px',
        backgroundColor: '#3f51b5',
        border: 'none',
        padding: '7px 38px',
        color: 'white',

    },
}));
const AddProducts = () => {

    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            category: data.category,
            code: data.code,
            imageURL: imageURL,
        };
        const url = `https://cryptic-retreat-59113.herokuapp.com/AddProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            // .then(res => console.log('server side response', res))
            .then(res => res.json())
            .then(data => {
                if (data) {

                    alert('Product successfully Added!')

                }
            })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '2cb6728a169bdab0acf628bc5d829c2b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {

            });

    }
    return (
        <div className={classes.addProduct}>
            <div className={classes.AdminInfo}>
                <Typography className={classes.AdminTitle} variant="h5" >Admin</Typography>
                <Link className={classes.adminLink} to='/addproduct'>Add Product</Link>
                <br></br><br></br>
                <Link className={classes.adminLink} to='/manageproduct'>Manage Product</Link>
            </div>
            <div className={classes.inputForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl className={classes.Form}>
                        <InputLabel htmlFor="standard-adornment-amount">Product name</InputLabel>
                        <input name="name" defaultValue="Half Sleeve T-shirt for Men" ref={register} />
                    </FormControl>
                    <FormControl className={classes.Form}>
                        <InputLabel htmlFor="standard-adornment-amount">Category</InputLabel>
                        <input name="category" defaultValue="T-Shirt" ref={register} />
                    </FormControl>
                    <FormControl className={classes.Form}>
                        <InputLabel htmlFor="standard-adornment-amount">Product code</InputLabel>
                        <input name="code" defaultValue="RDN001" ref={register} />
                    </FormControl>
                    <FormControl className={classes.Form}>
                        <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
                        <input name="price" defaultValue="13" ref={register} />
                    </FormControl>
                    <FormControl className={classes.Form}>
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    </FormControl>

                    <input className={classes.SubmitButton} type="submit" value="Add Product" />

                    {/* <Input name="name" defaultValue="Half Sleeve T-shirt for Men RDN028" ref={register} />
                <br />
                <Input name="category" defaultValue="T-Shirt" ref={register} />
                <br />
                <Input name="code" defaultValue="RDN028" ref={register} />
                <br />
                <Input name="price" defaultValue="13" ref={register} />
                <br />
                <Input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <Input type="submit" /> */}
                </form>


            </div>
        </div>
    );
};

export default AddProducts;