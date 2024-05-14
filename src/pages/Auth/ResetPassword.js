import React, { Fragment, useEffect, useState } from "react";
import AuthBase from "./components/AuthBase";
import { Alert, Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    rpassword: "",
  });
  const [errs, setErrs] = useState({
    password: "",
    rpassword: "",
  });
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const { token } = useParams();

  const validate = (name, value) => {
    let isvalid = true;
    switch (name) {
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
    }
  };

  const checkTokenValidity = () => {
    console.log(token);
    const res = "active";
    // make backend request to check token
    setStatus(res);
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <AuthBase>
      <div className="auth-form-section">
        <div className="auth-form-heading">Reset Password</div>
        <div className="auth-form-subheading">
          Update password of your account
        </div>
        {status === "active" ? (
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
                Submit
              </Button>
            </div>
          </div>
        ) : status === "used" ? (
          <div className="auth-form-main">
            <Alert severity="error">
              Sorry!! The Link is not available to reset password. Please
              request for new link.
            </Alert>
            <div className="form-submit-section">
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate("/password/request")}
              >
                Request Link
              </Button>
            </div>
          </div>
        ) : status === "expired" ? (
          <div className="auth-form-main">
            <Alert severity="error">
              Sorry!! The Link is not available to reset password. Please
              request for new link.
            </Alert>
            <div className="form-submit-section">
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate("/password/request")}
              >
                Request Link
              </Button>
            </div>
          </div>
        ) : status === "updated" ? (
          <div className="auth-form-main">
            <Alert severity="success">
              Password updated Successfully. Please Sign In.
            </Alert>
            <div className="form-submit-section">
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            </div>
          </div>
        ) : (
          <Fragment />
        )}
      </div>
    </AuthBase>
  );
};

export default ResetPassword;
