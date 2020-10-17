import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './service.css'

const ServiceContent = ({ service, handleService }) => {
    
    const { serviceOrder, setServcieOrder } = useContext(UserContext);

    return (
        <div className='col-md-4 text-center mt-5 card-cntnt' onClick={() =>handleService(service) }>
            <div className="card text-center" style={{ width: "18rem" }}>
                
                {
                    service.image ? <img alt='' src={`data:image/jpeg;base64,${service.image.img}`} className="card-img-top service-img" style={{width: "74px", height: "74px"}} /> : <img src= {service.img} className="card-img-top service-img" alt="" style={{width: "74px", height: "74px"}} />
               } 
                
            
            
            <div class="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
            </div>
      </div>
        </div>
    );
};

export default ServiceContent;