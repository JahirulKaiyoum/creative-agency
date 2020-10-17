import React from 'react';
import './client.css'

const ClientFeedBack = ({feedback}) => {
    return (
        <div className='col-md-4 mt-5 ' style={{border:'1px solid grey', borderRadius:'5px',padding:'20px'}}>
            <div>
            <div className='row ' style={{padding:'10px'}}>
                <div className="col-md-3">
                    <img src={feedback.img} className='img-fluid feed-img' alt=""/>
                </div>
                <div className="col-md-9 ">
                    <h6 style={{fontWeight:'bold'}}>{feedback.name}</h6>
                    <p  style={{fontWeight:'bold'}}>{feedback.designation}</p>
                </div>

            </div>
            <div className='row'>
                <div className='text-center'>
                    <p className="text-secondary">{feedback.description}</p>
                </div>

            </div>
            
            </div>
            
        </div>
    );
};

export default ClientFeedBack;