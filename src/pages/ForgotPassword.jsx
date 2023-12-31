import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import LinkM from "@mui/material/Link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../actions/user";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ userEmail: email }, navigate, setSent));
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
      onSubmit={handleSubmit}
      component="form"
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: "sm",
          borderRadius: 4,
          p: 3,
          "@media only screen and (max-width: 600px)": { m: 1 },
        }}
      >
        <Grid container>
          {!sent && (<>
            <Grid pt={2} item xs={12}>
              <Typography textAlign="center" variant="h4">
                Enter your email
              </Typography>
            </Grid>
         

         
            <Grid pt={2} item xs={12}>
              <TextField
                type="email"
                name="email"
                variant="outlined"
                value={email}
                label="Email Address"
                required
                fullWidth
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          

          <Grid pt={2} item xs={12}>
            <Button variant="outlined" type="submit" fullWidth>
              <Typography fontWeight={600}>Send reset link</Typography>
            </Button>
          </Grid></>)}
          {sent&&<Grid pt={2} item xs={12}>
              <Typography textAlign="center" variant="h4">
                Password reset email sent successfully, please check your mailbox.
              </Typography>
            </Grid>}
          <Grid pt={2} item xs={12} display={"flex"} justifyContent={"end"}>
            <LinkM component={Link} to={"/"}>
              Go back to sign in
            </LinkM>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
