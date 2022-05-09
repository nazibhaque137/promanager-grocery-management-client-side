import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {

    
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const url = 'https://young-eyrie-17132.herokuapp.com/item';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Item added!');
                console.log(result);
            })
        reset();
    };




    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary text-center m-5'>Add Items</h1>
   
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='Stock Quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-2' placeholder='Supplier name' {...register("supplierName", { required: true, maxLength: 20 })} />
                
                <input type="submit" value="Add New Item" className="btn btn-primary m-5"/>
            </form>
 

        </div>
    );
};

export default AddItem;