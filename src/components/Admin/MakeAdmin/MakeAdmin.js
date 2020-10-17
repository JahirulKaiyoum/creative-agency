import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    fetch("https://mysterious-ocean-37435.herokuapp.com/addAdmin", {
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
          <div className="col-md-6">
            <h1>Make new Admin</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" style={{ border: "1px solid gray" }}>
            <form className="p-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  onBlur={handleBlur}
                  required="true"
                />
              </div>

              <div className="form-group text-center">
                <button
                  type="submit"
                  className="mt-4"
                  style={{
                    width: "170px",
                    backgroundColor: "#111430",
                    color: "#FFFFFF",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;

// <div className='d-flex'></div>
// </div>
