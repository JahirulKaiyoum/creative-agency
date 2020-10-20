import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faServer,
  faCheckSquare,
  faPlusSquare,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png";

import "./Sidebar.css";
import { useContext } from "react";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/home">
            <img src={logo} alt="" className="img-fluid" />
          </Link>
        </li>
           
        {
          loggedInUser.checkAdmin ? <div>
          
          <li>
              <Link to="/dashboard/serviceeess">
                <FontAwesomeIcon icon={faServer} />
                <span>Service List</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addService">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/makeAdmin">
                <FontAwesomeIcon icon={faUserFriends} />
                <span>Make Admin</span>
              </Link>
            </li>
          
                      </div> : <div>
                      <li>
                      <Link to="/dashboard/order">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/servicelist">
                        <FontAwesomeIcon icon={faServer} />
                        <span>Servicelist</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/review">
                        <FontAwesomeIcon icon={faCheckSquare} />
                        <span>Review</span>
                      </Link>
                    </li>
                        </div>
         } 

         </ul>
    </div>
  );
};

export default Sidebar;
