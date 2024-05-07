import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../actions/user";

import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormControl,
  FormHelperText,
  Paper,
} from "@mui/material";
import LinkM from "@mui/material/Link";
import { Link } from "react-router-dom";
import TermsModal from "./TermsModal";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <LinkM component={Link} color="inherit" to="">
        Bitnine
      </LinkM>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const initialErrorState = {
  firstname: false,
  lastname: false,
  email: false,
  password: false,
  confirmPassword: false,
  check: false,
};
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialErrorState);
  const [checked, setChecked] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
    setError({ ...error, check: false });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstname.length === 0 ||
      formData.lastname.length === 0 ||
      !formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) ||
      !formData.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i) ||
      formData.confirmPassword !== formData.password ||
      !checked
    ) {
      setError({
        firstname: formData.firstname.length === 0,
        lastname: formData.lastname.length === 0,
        email: !formData.email.match(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        ),
        password: !formData.password.match(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i
        ),
        confirmPassword: formData.confirmPassword !== formData.password,
        check: !checked,
      });
    } else {
      dispatch(signUp(formData, navigate));
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      name: `${formData.firstname} ${formData.lastname}`,
    });
    setError({ ...error, [e.target.name]: false });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="form"
      noValidate
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: "sm",
          borderRadius: 4,
          p: 3,
          "@media only screen and (max-width: 600px)": { m: 1 },
        }}
      >
        <Grid container>
          <Grid display="flex" justifyContent="center" item xs={12}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid pt={2} item xs={12}>
            <Typography textAlign="center" variant="h4">
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid
              sx={{ "@media only screen and (min-width: 600px)": { pr: 1 } }}
              pt={2}
              xs={12}
              sm={6}
              item
            >
              <TextField
                name="firstname"
                variant="outlined"
                label="First Name"
                helperText={
                  error.firstname ? "Please enter your first name." : false
                }
                value={formData.firstname}
                required
                inputProps={{ maxLength: 20 }}
                error={error.firstname}
                autoFocus
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid
              pt={2}
              sx={{ "@media only screen and (min-width: 600px)": { pl: 1 } }}
              xs={12}
              sm={6}
              item
            >
              <TextField
                name="lastname"
                value={formData.lastname}
                variant="outlined"
                inputProps={{ maxLength: 20 }}
                label="Last Name"
                helperText={
                  error.lastname ? "Please enter your last name." : false
                }
                error={error.lastname}
                required
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <TextField
            name="name"
            value={`${formData.firstname} ${formData.lastname}`}
            sx={{ display: "none" }}
          />
          <Grid pt={2} item xs={12}>
            <TextField
              type="email"
              name="email"
              value={formData.email}
              required
              error={error.email}
              variant="outlined"
              label="Email Address"
              helperText={
                error.email ? "Please enter your email correctly." : false
              }
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid pt={2} item xs={12}>
            <FormControl
              error={error.password}
              required
              fullWidth
              variant="outlined"
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                name="password"
                value={formData.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText>
                {error.password
                  ? "Password must be at least 8 chars long and contain a number."
                  : false}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid pt={2} item xs={12}>
            <FormControl
              error={error.confirmPassword}
              required
              fullWidth
              variant="outlined"
            >
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput
                type="password"
                onChange={handleChange}
                value={formData.confirmPassword}
                name="confirmPassword"
                label="Confirm Password"
              />
              <FormHelperText>
                {error.confirmPassword ? "Passwords don't match." : false}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid pt={2} item xs={12}>
            <FormControl required error={error.check}>
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckBox} checked={checked} />
                }
                label={
                  <Box display={"flex"}>
                    <Typography display={"flex"} alignItems={"center"}>
                      Accept
                    </Typography>
                    <TermsModal>terms</TermsModal>
                  </Box>
                }
              />
              {error.check && (
                <FormHelperText>
                  You must accept the terms before signing up.
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid pt={2} item xs={12}>
            <Button
              className="button-submit"
              variant="contained"
              type="submit"
              fullWidth
            >
              <Typography fontWeight={600}>Sign Up</Typography>
            </Button>
          </Grid>

          <Grid pt={2} display="flex" justifyContent="end" item xs={12}>
            <Typography fontSize={13} color="primary" component={Link} to="/">
              Already have an account? Sign in
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
};

export default SignUp;
