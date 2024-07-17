import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

function RegisterScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setFormData({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <>
      <FormContainer>
        <h1 className="text-3xl font-bold">Sign up</h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-4">
            <div className="form-item">
              <label htmlFor="email" className="font-medium">
                Name
              </label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 outline-none"
                placeholder="Enter name..."
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />{" "}
            </div>
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
                name="password"
                placeholder="Enter password..."
                id="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email" className="font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                className="border rounded-lg w-full p-2 outline-none"
                name="cpassword"
                placeholder="Enter confirm password..."
                id="cpassword"
                onChange={handleChange}
                value={formData.cpassword}
              />{" "}
            </div>
            <div className="btn">
              <button className="bg-blue-600 p-2 text-white rounded-lg">
                Sign In
              </button>
            </div>
            <p>
              Already have an account?
              <Link to="/login">
                <span className="font-medium text-blue-600 hover:text-blue-800 hover:cursor-pointer hover:underline">
                  {" "}
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </form>
      </FormContainer>
    </>
  );
}

export default RegisterScreen;