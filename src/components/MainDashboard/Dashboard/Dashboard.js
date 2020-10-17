import React from 'react';
import Order from '../../Customer/Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {


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
                   <Order></Order>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;