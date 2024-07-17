import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

function LoginScreen() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setFormData({ email: "", password: "" });
  };

  return (
    <>
      <FormContainer>
        <h1 className="text-3xl font-bold">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-4">
            <div className="form-item">
              <label htmlFor="email" className="font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="border rounded-lg w-full p-2 outline-none"
                placeholder="Enter email..."
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />{" "}
            </div>
            <div className="form-item">
              <label htmlFor="email" className="font-medium">
                Password
              </label>
              <input
                type="password"
                className="border rounded-lg w-full p-2 outline-none"
                placeholder="Enter password..."
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="btn">
              <button className="bg-blue-600 p-2 text-white rounded-lg">
                Sign In
              </button>
            </div>
            <p>
              New user?
              <Link to="/register">
                <span className="font-medium text-blue-600 hover:text-blue-800 hover:cursor-pointer hover:underline">
                  {" "}
                  Register
                </span>
              </Link>
            </p>
          </div>
        </form>
      </FormContainer>
    </>
  );
}

export default LoginScreen;