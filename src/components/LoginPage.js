import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { API_HOST } from "../API_HOST";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
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
      const response = await axios.post(API_HOST + `/api/accounts/login`, {
        email: formFields.email,
        password: formFields.password,
      });

      if (response.data.message === "Request failed with status code 401") {
        toast.error("Invalid email address or password");
        return;
      }
      if (response.data.token) {
        localStorage.setItem("loginToken", response.data.token.accessToken);
        navigate("/dashboard");
      } else {
        toast.error("Something Went wrong please try again !");
      }
    } catch (error) {
      toast.error(error.response.data.message || "something went wrong");
    }
  };

  return (
    <div>
      <main className="bg-info-subtle">
        <div className="container ">
          <div className="row justify-content-center align-items-center vh-100 py-5 ">
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card card-body rounded-3 p-4 p-sm-5 mb-5 ">
                <div className="text-center">
                  <h1 className="mb-2"> LOGIN</h1>
                  <span className="d-block">
                    Not registered yet? <Link to="/register">REGISTER NOW</Link>
                  </span>
                </div>
                <form className="mt-4" onSubmit={submitForm}>
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
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-outline-primary">
                      Login to book slot
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

export default LoginPage;
