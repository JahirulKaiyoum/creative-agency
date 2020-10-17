import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Order.css";
const Order = () => {
  const { loggedInUser, serviceOrder } = useContext(UserContext);

  const history = useHistory();

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  console.log(info);
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  console.log(file);

  const handleSubmit = (e, data) => {
    const formData = new FormData();
    e.preventDefault();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("service", info.service);
    formData.append("description", info.description);
    formData.append("price", info.price);
    fetch("https://mysterious-ocean-37435.herokuapp.com/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        history.push("/customerDashboard/orderlist");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h1>Order</h1>
          </div>
        </div>
        <div className="row form-row">
          <div className="col-md-6 ">
            <form className="p-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="service"
                  placeholder=""
                  className="form-control"
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group">
                <textarea
                  type="text"
                  name="description"
                  placeholder="description"
                  className="form-control"
                  style={{ height: "100px" }}
                  onBlur={handleBlur}
                ></textarea>
              </div>
              <div className="form-group row">
                <div className="col">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="form-control"
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col">
                  <input
                    type="file"
                    name="file"
                    placeholder=""
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
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

export default Order;
