import React from 'react';
import { useNavigate } from "react-router-dom";
import './service.css'

const Service = ({service}) => {
    const{id, name, description, price, img} = service
    const navigate = useNavigate()
    const goToDetails=(id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-card mt-4 '>
            <img className='w-100' src={img} alt="" />
            <h3 className='text-primary'>{name}</h3>
            <h4>Price: {price}$</h4>
            <p>{description}</p>
            <button onClick={()=>goToDetails(id)} className='btn-warning '>Details of {name}</button>
        </div>
    );
};

export default Service;