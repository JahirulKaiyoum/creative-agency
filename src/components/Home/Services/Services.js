import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import ServiceContent from "../ServiceContent/ServiceContent";

const Services = () => {
  const history = useHistory();
  const { setServcieOrder, loggedInUser } = useContext(UserContext);
  const [services, setServices] = useState([]);


  useEffect(() => {
    fetch("https://mysterious-ocean-37435.herokuapp.com/getServices")
      .then((response) => response.json())
      .then((data) => {
     
        setServices(data);
      });
  }, []);

  const handleService = (service) => {
    setServcieOrder(service);

    
      loggedInUser.checkAdmin ?  history.push("/dashboard/serviceeess") : history.push("/dashboard/order")
    
   
  };
  return (
    <section className="services" style={{ paddingBottom: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center">
              Provide Awsome <span style={{ color: "#7AB259" }}>Services</span>{" "}
            </h1>
          </div>
        </div>

        <div className="row " style={{ paddingTop: "80px" }}>
          {services.map((service) => (
            <ServiceContent
              service={service}
              handleService={handleService}
            ></ServiceContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


