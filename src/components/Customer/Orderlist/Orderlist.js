import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Allorders from "../AllOrders/Allorders";

const Orderlist = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-ocean-37435.herokuapp.com/showOrders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          {orders.map((order) => (
            <Allorders order={order}></Allorders>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orderlist;
