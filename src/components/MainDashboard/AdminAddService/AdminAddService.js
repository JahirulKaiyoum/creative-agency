import React from 'react';
import AddService from '../../Admin/AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';
const AdminAddService = () => {
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
              <AddService></AddService>
            </div>
        </div>
    </section>
    );
};

export default AdminAddService;