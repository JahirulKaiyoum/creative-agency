import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CustomerDashboard from './components/Customer/CustomerDashboard/CustomerDashboard';
import Order from './components/Customer/Order/Order';
import Orderlist from './components/Customer/Orderlist/Orderlist';
import Review from './components/Customer/Review/Review';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AddService from './components/Admin/AddService/AddService';
import ServiceList from './components/Admin/ServiceList/ServiceList';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import Dashboard from './components/MainDashboard/Dashboard/Dashboard';
import AllOrderList from './components/MainDashboard/AllOrderList/AllOrderList';
import AllReviews from './components/MainDashboard/AllReviews/AllReviews';
import AllServicesList from './components/MainDashboard/AllServicesList/AllServicesList.js'
import AdminAddService from './components/MainDashboard/AdminAddService/AdminAddService';
import MakeAdminList from './components/MainDashboard/MakeAdminList/MakeAdminList'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceOrder, setServcieOrder] = useState({});

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser,serviceOrder, setServcieOrder}}>
      
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
          </Route>

          <Route exact path="/home">
        <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard/order">
             <Dashboard></Dashboard>
          </PrivateRoute>
          <Route  path="/dashboard/servicelist">
          <AllOrderList></AllOrderList>
          </Route>
          <Route  path="/dashboard/review">
            <AllReviews></AllReviews>
          </Route>
          <Route  path="/dashboard/serviceeess">
            <AllServicesList></AllServicesList>
          </Route>
          <Route  path="/dashboard/addService">
            <AdminAddService></AdminAddService>
          </Route>
          <Route  path="/dashboard/makeAdmin">
            <MakeAdminList></MakeAdminList>
          </Route>
          <Route path="/login">
        <Login></Login>
          </Route>

      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;

