import React, { useState } from "react";
import AuthBase from "./components/AuthBase";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "./hooks/useUser";

const Signup = () => {
  const { createUser } = useUser();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rpassword: "",
  });
  const [errs, setErrs] = useState({
    name: "",
    email: "",
    password: "",
    rpassword: "",
  });
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validate = (name, value) => {
    let isvalid = true;
    switch (name) {
      case "name":
        if (value.length === 0) {
          setErrs((prev) => {
            return { ...prev, [name]: "Please enter Name" };
          });
          isvalid = false;
        } else {
          setErrs((prev) => {
            return { ...prev, [name]: "" };
          });
          isvalid = true;
        }
        break;
      case "email":
        if (value.length === 0) {
          setErrs((prev) => {
            return { ...prev, [name]: "Please enter Email" };
          });
          isvalid = false;
        } else if (!value.match(validRegex)) {
          setErrs((prev) => {
            return { ...prev, [name]: "Please enter valid Email" };
          });
          isvalid = false;
        } else {
          setErrs((prev) => {
            return { ...prev, [name]: "" };
          });
          isvalid = true;
        }
        break;
      case "password":
        if (value.length === 0) {
          setErrs((prev) => {
            return { ...prev, [name]: "Please enter Password" };
          });
          isvalid = false;
        } else {
          setErrs((prev) => {
            return { ...prev, [name]: "" };
          });
          isvalid = true;
        }
        break;
      case "rpassword":
        if (value.length === 0) {
          setErrs((prev) => {
            return { ...prev, [name]: "Please re-enter Password" };
          });
          isvalid = false;
        } else if (value !== data.password) {
          setErrs((prev) => {
            return {
              ...prev,
              [name]: "Password and Confirm Password should be same",
            };
          });
          isvalid = false;
        } else {
          setErrs((prev) => {
            return { ...prev, [name]: "" };
          });
          isvalid = true;
        }
        break;
      default:
        isvalid = true;
        break;
    }
    return isvalid;
  };

  const submitValidate = () => {
    let valid = true;
    for (const name in data) {
      const tempvalid = validate(name, data[name]);
      if (!tempvalid) {
        valid = tempvalid;
      }
    }
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    validate(name, value);
  };

  const handleSubmit = () => {
    const valid = submitValidate();
    if (valid) {
      // call custom hook function here
      const reqData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      createUser(reqData);
    }
  };
  return (
    <AuthBase>
      <div className="auth-form-section">
        <div className="auth-form-heading">Welcome to BETr</div>
        <div className="auth-form-subheading">Signup for an account here</div>
        <div className="auth-form-main">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                maxWidth: "100%",
                marginLeft: "0",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              name="name"
              label="Name"
              placeholder="Enter Name"
              value={data.name}
              error={errs.name.length > 0}
              helperText={errs.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              placeholder="Enter Email"
              value={data.email}
              error={errs.email.length > 0}
              helperText={errs.email}
              onChange={handleChange}
            />
            <TextField
              type="password"
              fullWidth
              name="password"
              label="Password"
              placeholder="Enter Password"
              value={data.password}
              error={errs.password.length > 0}
              helperText={errs.password}
              onChange={handleChange}
            />
            <TextField
              type="password"
              fullWidth
              name="rpassword"
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              value={data.rpassword}
              error={errs.rpassword.length > 0}
              helperText={errs.rpassword}
              onChange={handleChange}
            />
          </Box>
          <div className="form-submit-section">
            <Button variant="contained" size="small" onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
        </div>
        <div className="switch-page-section">
          You have an account?<Link to="/login">Sign In</Link>
        </div>
      </div>
    </AuthBase>
  );
};

export default Signup;
