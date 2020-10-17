import React from 'react';

const AllServices = ({serviceList}) => {
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Projecct Details</th>
                    <th className="text-secondary" scope="col">Status</th>
            
            </tr>
        </thead>
        <tbody>
            {
                serviceList.map((serviceList, index) => 
                    
                <tr>
                
                <td>{serviceList.name}</td>
                <td>{serviceList.email}</td>
                <td>{serviceList.service}</td>
                <td>{serviceList.description}KG</td>
                        <td>{serviceList.phone}</td>
                        
                </tr>
                )
            }
            </tbody>
            </table>
    );
};

export default AllServices;
