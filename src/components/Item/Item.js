import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const { _id, name, img, description, price, quantity, supplierName, sold } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }

    return (
        <div className='item-container'>
            <img className='w-100 item-img' src={img} alt="" />

            <h2>{name}</h2>
            <p>BDT {price}</p>
            <p><small>{description}</small></p>
            <p>Available Quantity: {quantity}</p>
            <p>Supplier Name: {supplierName}</p>

            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary update-btn'>Manage: {name}</button>
        </div>
    );
};

export default Item;