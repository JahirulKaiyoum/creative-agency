import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'
import './Partners.css'



const Partners = () => {
    return (
        <section className='partners'>
            <div className="container">
                <div className="row">
                    <div className="col-md text-center">
                    <img src={google} alt="" className="brand-img" />
                    </div>
                    <div className="col-md text-center">
                        <img src={netflix} alt="" className="brand-img" />
                    </div>
                    <div className="col-md text-center">
                    <img src={slack} alt="" className="brand-img" />
                    </div>
                    <div className="col-md text-center">
                    <img src={airbnb} alt="" className="brand-img" style={{}} />
                    </div>
                    <div className="col-md text-center">
                    <img src={uber} alt="" className="brand-img" />
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;