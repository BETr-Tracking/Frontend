import React, { useState } from "react";
import AuthBase from "./components/AuthBase";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useLoginUser } from "./hooks/useLoginUser";
import { useDisplayMsgs } from "../../hooks/useDisplayMsgs";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errs, setErrs] = useState({ email: "", password: "" });
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const { loginUser } = useLoginUser();
  const { handleErr } = useDisplayMsgs();

  const validate = (name, value) => {
    let isvalid = true;
    switch (name) {
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
      loginUser(data);
    } else {
      // addnotification msg:"Please clear all errors."
      handleErr("Please clear all errors.")
    }
  };
  return (
    <AuthBase>
      <div className="auth-form-section">
        <div className="auth-form-heading">Welcome to BETr</div>
        <div className="auth-form-subheading">Sign into your account</div>
        <div className="auth-form-main">
          <Box
            component="form"
            sx={{
              marginLeft: "0",
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
          </Box>
          <div className="signin-fp-section">
            <Link to="/password/request">Forgot Password?</Link>
          </div>
          <div className="form-submit-section">
            <Button variant="contained" size="small" onClick={handleSubmit}>
              Sign In
            </Button>
          </div>
        </div>
        <div className="switch-page-section">
          Not Registered Yet?<Link to="/signup">Sign Up Now</Link>
        </div>
      </div>
    </AuthBase>
  );
};

export default Login;
