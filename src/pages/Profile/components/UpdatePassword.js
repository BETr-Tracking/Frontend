import React, {  useState } from "react";
import Popup from "../../../components/CustomPopup";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

const UpdatePassword = ({ open, setOpen, updatePassword }) => {
  const initialState = {
    password: "",
    rpassword: "",
  };
  const initialErrState = {
    password: "",
    rpassword: "",
  };
  const [data, setData] = useState(initialState);
  const [errs, setErrs] = useState(initialErrState);

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
        if (data.password.length > 0 && value.length === 0) {
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
    console.log(name,value)
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    validate(name, value);
  };

  const handleSubmit = () => {
    const valid = submitValidate();
    if (valid) {
      // call custom hook function here
      const res = updatePassword(data.password);
      res && handleClose();
    }
  };

  const handleClose = () => {
    setData(initialState);
    setErrs(initialErrState);
    setOpen(false);
  };

  return (
    <Popup title={"Update Password"} open={open} handleClose={handleClose}>
      <DialogContent style={{ minWidth: "450px" }}>
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
            label="New Password"
            placeholder="Enter New Password"
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" size="small">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="small"
          onClick={handleSubmit}
        >
          Update
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default UpdatePassword;
