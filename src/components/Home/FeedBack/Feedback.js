import React, { useEffect, useState } from "react";
import customerOne from "../../../images/customerOne.png";
import customerTwo from "../../../images/customerTwo.png";
import customerThree from "../../../images/customerThree.png";
import ClientFeedBack from "../ClientFeedBack/ClientFeedBack";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-ocean-37435.herokuapp.com/getReview")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFeedbacks(data);
      });
  }, []);

  return (
    <section
      className=""
      style={{ paddingTop: "120px", paddingBottom: "200px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center">
              Clients <span style={{ color: "#7AB259" }}>Feedback</span>{" "}
            </h1>
          </div>
        </div>

        <div className="row " style={{ paddingTop: "80px" }}>
          {feedbacks.map((feedback) => (
            <ClientFeedBack feedback={feedback}></ClientFeedBack>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
