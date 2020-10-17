import React, { useEffect, useState } from "react";
import AllServices from "../AllServices/AllServices";

const ServiceList = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-ocean-37435.herokuapp.com/allServices")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setServiceList(data);
      });
  }, []);

  return (
    <div>
      <h3>Service List</h3>
      <AllServices serviceList={serviceList}></AllServices>
    </div>
  );
};

export default ServiceList;
