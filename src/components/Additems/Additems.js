import React from 'react';
import { useForm } from "react-hook-form";
const Additems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:4000/phones`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className="container-form text-center form-all">
                <div className="form-title">Add Phones</div>
                <div className="inputs-form">
                    <label className='form-label'>Phone Name</label>
                    <input className="form-input" type="text" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />

                    <label className='form-label'>Quantity</label>
                    <input placeholder='Quantity' {...register("quantity")} className="form-input" type="text" />

                    <label className='form-label'>Supplier Name</label>
                    <input placeholder='supplier name' {...register("Supply")} className="form-input" type="text" />

                    <label className='form-label'>Description</label>
                    <input placeholder='Description' {...register("description")} className="form-input" type="text" />

                    <label className='form-label'>Img Link</label>
                    <input placeholder='Img Url' {...register("imageLink")} className="form-input" type="text" />

                    <button className='form-btn' type="submit">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default Additems;

