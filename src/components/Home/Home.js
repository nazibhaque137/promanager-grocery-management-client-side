import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import Chart from '../Chart/Chart';


const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://young-eyrie-17132.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])



    return (
        <div className='home-container'>
            <h1 className='text-primary text-center m-5'>Home</h1>
            <Banner></Banner>
            <div className='container'>
                <div className="row">
                    <h1 className='text-primary text-center m-5'>Our Items</h1>
                    <div className="items-container">
            {
                items.slice(0,6).map(item => <Item
                    key={item._id}
                    item={item}
                >
                </Item>
                )
            }
            </div>
            </div>
            </div>
            <Link to="/manage-inventory" className="btn btn-primary m-5">Manage Inventories</Link>
            <h1 className='text-primary text-center mt-5'>Item Chart</h1>
            <Chart></Chart>
            <Reviews></Reviews>
           </div>
    );
};

export default Home;