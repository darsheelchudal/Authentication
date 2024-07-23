import React, { useEffect } from "react";
import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useUpdateMutation } from "../../services/usersApi";
import { toast } from "react-toastify";
import { setCredentials } from "../../features/slices/authSlice";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [tab, setTab] = useState("display");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [update, { isLoading }] = useUpdateMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    setFormData({
      name: userInfo.name || "",
      email: userInfo.email || "",
    });
  }, []);

  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await update(formData).unwrap();
      dispatch(setCredentials({ ...res }));
      setFormData({ name: "", email: "", password: "" });
      toast.success("Updated successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.data?.message);
    }
  };
  return (
    <>
      <FormContainer>
        {tab == "display" ? (
          <>
            {" "}
            <div className="p-2 space-y-4">
              <ul className="gap-y-4 flex flex-col font-semibold">
                <li>{`Name : ${userInfo.name}`}</li>
                <li>{`Email : ${userInfo.email}`}</li>
              </ul>
            </div>
            <p className="font-medium text-red-900">
              <span
                className=" hover:cursor-pointer"
                onClick={() => setTab("edit")}
              >
                Click here to update Profile
              </span>
            </p>
          </>
        ) : (
          <>
            {isLoading && (
              <>
                <h2 className="text-center text-lg font-medium">
                  Loading ...{" "}
                </h2>
              </>
            )}
            <h1 className="text-2xl font-bold">Update Profile</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4">
                <div className="form-item">
                  {" "}
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
                    placeholder="Password can't be shown"
                    id="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="btn">
                  <button className="bg-blue-600 p-2 text-white rounded-lg">
                    Update Profile
                  </button>
                </div>
              </div>
              <p className="font-medium text-red-900 my-4">
                <span
                  className=" hover:cursor-pointer"
                  onClick={() => setTab("display")}
                >
                  Click here to view Profile
                </span>
              </p>
            </form>
          </>
        )}
      </FormContainer>
    </>
  );
};

export default ProfileScreen;
