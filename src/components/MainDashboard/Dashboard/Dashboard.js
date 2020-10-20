import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Order from '../../Customer/Order/Order';
import AllOrderList from '../AllOrderList/AllOrderList';
import AllServicesList from '../AllServicesList/AllServicesList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const { loggedInUser } = useContext(UserContext);

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height:"100%"
    }
    return (
    
       
        <>
            {
                loggedInUser.checkAdmin ? <AllServicesList /> : <AllOrderList/>
            }
        </>

    );
};

export default Dashboard;

