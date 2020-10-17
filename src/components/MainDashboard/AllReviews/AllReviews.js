import React from 'react';
import Review from '../../Customer/Review/Review';
import Sidebar from '../Sidebar/Sidebar';

const AllReviews = () => {
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
                  <Review></Review>
                </div>
            </div>
        </section>
    );
};

export default AllReviews;