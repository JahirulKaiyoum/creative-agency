import React from 'react';

const Form = () => {
    return (
        <section className="form" style={{backgroundColor:'#FBD062' ,paddingBottom:'100px',paddingTop:'130px'}}>
            <div className="container">
            <div className="row">
                    <div className="col-md-6" style={{paddingTop:'60px'}}>
                        <h1>Let us handle your <br /> project ,professionally</h1>
                        <p style={{marginTop:'50px'}}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general. </p>
                </div>
                    <div className="col-md-6">
                    <form class="contact-form">
                    <div class="form-group">
                                <input type="text" name="" placeholder="Name" className="form-control" style={{ height: '50px' }} />
                    </div>

                    <div class="form-group">
                                <input type="email" name="" placeholder="Email-address" className="form-control" style={{ height: '50px' }} />
                    </div>

                    <div class="form-group">
                            <textarea type="text" placeholder="Your text" class="message" className="form-control" style={{height:'200px'}}></textarea>
                    </div>
                    
                    <div class="row">
                       

                        <div class="col-md msg-button" >

                                <button type="button" class="btn btn-outline-primary custm-btn" style={{width:'170px' ,backgroundColor:'black',color:'white'}}>Send</button>

                        </div>
                    </div>
                    
                </form>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Form;