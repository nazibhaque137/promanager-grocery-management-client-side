import React from 'react';
import Item from '../Item/Item';
import Items from '../Items/Items';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ManageInventory = () => {

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }

    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://young-eyrie-17132.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    return (
        
            <div className='container'>
            <h1 className='text-primary text-center m-5'>Manage Inventory</h1>

                <div className="row">
                <div className="items-container">

                    {
                        items.map(item => <div key={item._id}
                            item={item}
                            >
                            <div className='item-container'>
                                <img className='w-100 item-img' src={item.img} alt="" />

                                <h2>{item.name}</h2>
                                <p>BDT {item.price}</p>
                                <p><small>{item.description}</small></p>
                                <p>Available Quantity: {item.quantity}</p>
                                <p>Supplier Name: {item.supplierName}</p>

                                <button onClick={() => navigateToItemDetail(item._id)} className='btn btn-primary update-btn mx-2'>Update: {item.name}</button>
                                <button onClick={() => handleDelete(item._id)} className='btn btn-primary update-btn  m-2'>Delete: {item.name}</button>

                            </div>
                        </div>)
                    }
                </div>
                </div>
            <Link to="/add-item" className="btn btn-primary my-5 px-5 py-2">Add Item</Link>
            </div>
    );
};

export default ManageInventory;