import React from 'react';
import Orderlist from '../../Customer/Orderlist/Orderlist';
import Sidebar from '../Sidebar/Sidebar';

const AllOrderList = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height:"100%"
    }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
               
                <div className="col-md-10">
                 <Orderlist></Orderlist>
                </div>
            </div>
        </section>
    );
};

export default AllOrderList;