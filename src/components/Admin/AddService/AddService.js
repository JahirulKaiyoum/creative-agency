import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddService = () => {
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
  const handleSubmit = (e) => {
    const formData = new FormData();
    e.preventDefault();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("description", info.description);
    fetch("https://mysterious-ocean-37435.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
         history.push('/home');
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Add Services</h1>
          </div>
        </div>
        <div className="row form-row">
          <div className="col-md-6 ">
            <form className="p-5" onSubmit={handleSubmit}>
              <div className="form-group row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder=""
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
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="form-control"
                  onBlur={handleBlur}
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

export default AddService;
