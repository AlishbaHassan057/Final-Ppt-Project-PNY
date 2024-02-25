import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/features/auth/authSlice";

const LogForm = ({ setOpen }) => {
  const { isError, message, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState({
    p_mail: "",
    password: "",
  });

  const { p_mail, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!p_mail || !password) {
      toast.error("Please enter all fields!");
    } else {
      if (isError) {
        toast.error(message);
      }
      const userData = {
        p_mail,
        password,
      };
      dispatch(login(userData));
    }
  };
  useEffect(() => {
    // If isSuccess is true, navigate to "/admin"
    if (isSuccess) {
      navigate("/admin");
    }
  }, [isSuccess]);

  return (
    <>
      <form className="w-75 rounded shadow p-3 py-4 bg-white ">
        <img
          width={"200px"}
          src="https://www.gpssultanpur.com/MSMS/Images/admin_login.gif"
        />

        <input
          className="form-control mt-3"
          type="email"
          name="p_mail"
          placeholder="Enter Your Email Address"
          value={p_mail}
          onChange={handleChange}
          required
        />

        <div>
          <input
            className="form-control mt-3"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn mt-4">
          LOGIN
        </button>

        <p className="forget mt-2 mb-0 text-secondary me-0">Forget Password?</p>
        <p className="mt-2 fw-normal">
          Are you a new Admin?{" "}
          <span>
            <a
              onClick={() => setOpen(true)}
              href="#"
              style={{ textDecoration: "none" }}
            >
              Sign Up
            </a>
          </span>
        </p>
      </form>
    </>
  );
};

export default LogForm;
