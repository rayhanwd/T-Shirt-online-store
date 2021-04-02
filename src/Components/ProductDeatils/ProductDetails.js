import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOut from './../CheckOut/CheckOut';

const ProductDetails = () => {
    const { code } = useParams();
    const [product, setProducts] = useState({});

    useEffect(() => {
        fetch(`https://cryptic-retreat-59113.herokuapp.com/products/${code}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [code])
    return (
        <div>
            <CheckOut pd={product}></CheckOut>
        </div>
    );
};

export default ProductDetails;