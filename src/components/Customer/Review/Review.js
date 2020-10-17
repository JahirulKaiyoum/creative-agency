import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Review.css";

const Review = () => {
  const { loggedInUser, serviceOrder } = useContext(UserContext);
  const history = useHistory();

  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const img = loggedInUser.image;
    const newInfo = { ...info, img };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);

    fetch("https://mysterious-ocean-37435.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        //  history.push("/activities")
      });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Review</h1>
          </div>
        </div>
        <div className="row form-row">
          <div className="col-md-4 ">
            <form className="p-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  onBlur={handleBlur}
                  required="true"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="designation"
                  placeholder="Company name , Designation"
                  className="form-control"
                  onBlur={handleBlur}
                  required="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="form-control"
                  style={{ height: "80px" }}
                  onBlur={handleBlur}
                  required="true"
                />
              </div>

              <div className="form-group text-left">
                <button
                  type="submit"
                  className=""
                  style={{
                    width: "170px",
                    backgroundColor: "#111430",
                    color: "#FFFFFF",
                  }}
                  onBlur={handleBlur}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

// const { register, handleSubmit, errors } = useForm();
// const onSubmit = ( data) => {

//     // e.preventDefault();
//     fetch("https://mysterious-ocean-37435.herokuapp.com/addReview", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: data,
//     })
//     .then((response) => response.json())
//         .then((data) => {

//             console.log(data);

//         //  history.push("/activities")
//         });
// }

// <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//             <input type="text"  name="name" placeholder="Your Name" className="form-control" />

//                 </div>

//              <div className="form-group">
//                 <input type="text"  name="Company" placeholder="Company name , Designation" className="form-control" />

//         </div>
//         <div className="form-group">
//             <input type="text"  name="Description" placeholder="Description" className="form-control" style={{ height: '80px' }}/>

//                 </div>

//                 <div className="form-group text-left">
//                 <button type="submit" className="" style={{width:"170px",backgroundColor:"#111430",color:"#FFFFFF"}}>Send</button>
//             </div>
//                 </form>
