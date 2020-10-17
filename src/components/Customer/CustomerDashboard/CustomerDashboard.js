import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import AddService from '../../Admin/AddService/AddService';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import ServiceList from '../../Admin/ServiceList/ServiceList';
import Order from '../Order/Order';
import Orderlist from '../Orderlist/Orderlist';
import Review from '../Review/Review';
import './Dashboard.css'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faServer,faCheckSquare,faPlusSquare,faUserFriends} from '@fortawesome/free-solid-svg-icons'


const styles = {
  background: '#blue',
  width: '2px',
  cursor: 'fixed',
  margin: '0 5px',
  height: '100%',
};

const CustomerDashboard = () => {
    return (
        <Router>
        <SplitPane
          split="vertical"
          minSize={100}
          defaultSize={100}
          resizerStyle={styles}
        >
          <menu>
            <div><img src={logo} className="img-fluid"  alt=""/></div>
            <div style={{padding:'10px',  } } className="d-flex"><Link to="/customerDashboard/order"><FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span></Link></div>
                <div style={{padding:'10px', }}><Link to="/customerDashboard/orderlist"> <FontAwesomeIcon icon={faServer} /><span>Order list</span></Link></div>
                <div style={{ padding: '10px', }}><Link to="/customerDashboard/review"><FontAwesomeIcon icon={faCheckSquare} /> <span> Review</span></Link></div>
                <div style={{padding:'10px', }}><Link to="/adminDashboard/serviceList"><FontAwesomeIcon icon={faServer} /> <span>Service List</span></Link></div>
                <div style={{padding:'10px', }}><Link to="/adminDashboard/addService"><FontAwesomeIcon icon={faShoppingCart} /><span>Add Service</span> </Link></div>
                <div style={{padding:'10px', }}><Link to="/adminDashboard/makeAdmin"><FontAwesomeIcon icon={faUserFriends} /><span>Make Admin</span> </Link></div>
          </menu>
          <div>
                    <Route exact path="/customerDashboard/order" component={Order} />
                    <Route exact path="/customerDashboard/orderlist" component={Orderlist} />
                    <Route exact path="/customerDashboard/review" component={Review} />
                    <Route exact path="/adminDashboard/serviceList" component={ServiceList} />
                    <Route exact path="/adminDashboard/addService" component={AddService} />
                    <Route exact path="/adminDashboard/makeAdmin" component={MakeAdmin} />
            
          </div>
        </SplitPane>
      </Router>
    );
};

export default CustomerDashboard;