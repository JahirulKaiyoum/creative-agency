import React from 'react';
import { Button } from 'react-bootstrap';

const Allorders = ({order}) => {
    return (
        <div className="col-md-4  order-cntnt">
                    
          <div className="row">
              <div className="col-md-6">
                <h1>orders</h1>
                        {
                            <img src={`data:image/jpeg;base64,${order.image.img}`} className="img-fluid " alt="" style={{width: "74px", height: "74px"}}/>
                        }
              </div>
              <div className="col-md-6">
                <Button>Status</Button>
              </div>
              </div>
          <div className="row">
              <div className="col-md-6">
                <h6>{order.service}</h6>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolor qui dolores magnam mollitia, et quibusdam debitis amet.
                  Voluptates, laboriosam quaerat!
                </p>
              </div>
          </div>
      </div>
    );
};

export default Allorders;


