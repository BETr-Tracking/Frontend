import React, { useState } from "react";
import AuthBase from "./components/AuthBase";
import { Alert, Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [status, setStatus] = useState(false);
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const navigate = useNavigate();

  const validate = (name, value) => {
    let isvalid = true;

    if (value.length === 0) {
      setErr("Please enter Email");
      isvalid = false;
    } else if (!value.match(validRegex)) {
      setErr("Please enter valid Email");
      isvalid = false;
    } else {
      setErr("");
      isvalid = true;
    }

    return isvalid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
    validate(name, value);
  };

  const handleSubmit = () => {
    const valid = validate("email", email);
    if (valid) {
      // call custom hook function here
      setStatus(true);
    }
  };
  return (
    <AuthBase>
      <div className="auth-form-section">
        <div className="auth-form-heading">Forgot Password</div>
        <div className="auth-form-subheading">
          Enter the Email you have registered with
        </div>
        {status ? (
          <div className="auth-form-main">
            <Alert severity="success">
              Updation link sent to the email. Please check email.
            </Alert>
          </div>
        ) : (
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
                name="email"
                label="Email"
                placeholder="Enter Email"
                value={email}
                error={err.length > 0}
                helperText={err}
                onChange={handleChange}
              />
            </Box>
            <div className="form-submit-section">
              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate("/login")}
              >
                Back to Sign In
              </Button>
              <Button variant="contained" size="small" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </AuthBase>
  );
};

export default ForgotPassword;
