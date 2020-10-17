import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ServiceList from '../ServiceList/ServiceList';
import SplitPane from 'react-split-pane';

const styles = {
    background: '#blue',
    width: '2px',
    cursor: 'fixed',
    margin: '0 5px',
    height: '100%',
  };

const AdminDashboard = () => {
    return (
        <Router>
        <SplitPane
          split="vertical"
          minSize={100}
          defaultSize={100}
          resizerStyle={styles}
        >
          <menu>
            <div style={{padding:'10px', }}><Link to="/adminDashboard/serviceList">Service List</Link></div>
                    <div style={{padding:'10px', }}><Link to="/adminDashboard/addService">Add Service</Link></div>
                    <div style={{padding:'10px', }}><Link to="/adminDashboard/makeAdmin">Make Admin</Link></div>
          </menu>
          <div>
                    <Route exact path="/adminDashboard/serviceList" component={ServiceList} />
                    <Route exact path="/adminDashboard/addService" component={AddService} />
                    <Route exact path="/adminDasboard/makeAdmin" component={MakeAdmin} />
            
          </div>
        </SplitPane>
      </Router>
    );
};

export default AdminDashboard;