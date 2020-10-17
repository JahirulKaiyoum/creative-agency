import React from 'react';
import ServiceList from '../../Admin/ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const AllServicesList = () => {
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
                  <ServiceList></ServiceList>
                </div>
            </div>
        </section>
    );
};

export default AllServicesList;