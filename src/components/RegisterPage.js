import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_HOST } from "../API_HOST";
const RegisterPage = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFormFields((values) => ({ ...values, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_HOST}/api/accounts/register`, {
        firstname: formFields.firstname,
        lastname: formFields.lastname,
        email: formFields.email,
        password: formFields.password,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
      toast.success("Account created Successfully");
    } catch (error) {
      console.error(error);
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-info-subtle">
      <main>
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100 py-5">
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card card-body rounded-3 p-4 p-sm-5 mb-5">
                <div className="text-center">
                  <h1 className="mb-2">Slot Booking Application</h1>
                  <span className="d-block">
                    Already have an account? <Link to="/">Login here</Link>
                  </span>
                </div>
                <form className="mt-4" onSubmit={submitForm}>
                  <div className="mb-3 input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter firstname"
                      name="firstname"
                      value={formFields.firstname || ""}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter lastname"
                      name="lastname"
                      value={formFields.lastname || ""}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 input-group-lg">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      value={formFields.email || ""}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 input-group-lg">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      value={formFields.password || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      onClick={submitForm}
                      className="btn btn-lg btn-primary"
                    >
                      Fill up and register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
