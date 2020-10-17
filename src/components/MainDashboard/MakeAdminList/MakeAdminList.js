import React from 'react';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdminList = () => {
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
              <MakeAdmin></MakeAdmin>
            </div>
        </div>
    </section>
    );
};

export default MakeAdminList;