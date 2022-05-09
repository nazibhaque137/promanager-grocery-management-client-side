import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useItemInfo from '../../hooks/useItemInfo';

const ItemInfo = () => {
    const { itemId } = useParams();
    const [itemInfo] = useItemInfo(itemId);



    const handleItemDelivered = (event) => {
        event.preventDefault();
        const newQuantity = itemInfo.quantity - 1;
        console.log(newQuantity);
        const { itemQuantity } = newQuantity;
        console.log(parseInt(newQuantity));
        const url = `https://young-eyrie-17132.herokuapp.com/item/${itemId}`;

        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemQuantity),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Updated Item added successfully");
                event.target.reset();
          });
        }


    const handleItemRestocked = (event) => {
        event.preventDefault();
        const newQuantity = itemInfo.quantity + parseInt(event.target.restockQuantity.value);
        console.log(newQuantity);
        const { itemQuantity } = newQuantity;
        console.log(parseInt(newQuantity));
        const url = `https://young-eyrie-17132.herokuapp.com/item/${itemId}`;

        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemQuantity),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Updated Item added successfully");
                event.target.reset();
            });
    }

    return (
        <div>
            <h1 className='text-primary text-center m-5'>Item Information</h1>
            <img className='item-img' src={itemInfo.img} alt="" />
            <h5><span className="text-primary">Item ID:</span> {itemInfo._id}</h5>
            <h5><span className="text-primary">Item Name:</span> {itemInfo.name}</h5>
            <h5><span className="text-primary">Item Description:</span> {itemInfo.description}</h5>
            <h5><span className="text-primary">Item Price:</span> {itemInfo.price}</h5>
            <h5><span className="text-primary">Item Available Quantity:</span> {itemInfo.quantity}</h5>
            <h5><span className="text-primary">Item Supplier Name:</span> {itemInfo.supplierName}</h5>

            <div className='text-center'>
                <button onClick={handleItemDelivered} className='btn btn-primary m-5'>Delivered</button>
            </div>

            <form onSubmit={handleItemRestocked}>
                <input type="number" id="restockQuantity" name="restockQuantity" placeholder="Enter no. of item quantity to restock" required/>
                <br />
                <input type="submit" value="Update Stock" className='btn btn-primary m-2' />        
            </form>
            <Link to="/manage-inventory" className="btn btn-primary m-5">Manage Inventories</Link>

        </div>
    );
};

    export default ItemInfo;