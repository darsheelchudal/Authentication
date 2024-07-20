import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";
import { setCredentials } from "../features/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/usersApi";
import { toast } from "react-toastify";

function LoginScreen() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, isLoading, error] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      dispatch(setCredentials({ ...res }));
      setFormData({ email: "", password: "" });
      toast.success("Success");

      navigate("/");
    } catch (err) {
      toast.error(err.data.message);
    }
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
