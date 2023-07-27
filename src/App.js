import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/ScrollTop";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/SignIn";
import Confirm from "./pages/Confirm";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { getUser } from "./actions/user";
import Loading from "./pages/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [kor, setKor] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.token?.token);
  const user = useSelector((state) => state?.user);
  const active = user?.active;

  useEffect(() => {
    if (token) {
      dispatch(getUser(setLoading));
    } else {
      setLoading(false);
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />

        <Container sx={{ minHeight: "100vh" }} maxWidth={false} disableGutters>
          {active && <Header setKor={setKor} kor={kor} />}
          <Routes>
            <Route
              index
              element={
                loading ? (
                  <Loading />
                ) : user && active ? (
                  <Home kor={kor} />
                ) : user ? (
                  <Confirm />
                ) : (
                  <SignIn />
                )
              }
            />
            <Route path="/signup" element={!user && <SignUp />} />
            <Route path="/confirm" element={!active && <Confirm />} />
            <Route path="/confirm/:token" element={!active && <Confirm />} />
            <Route
              path="/forgotpassword"
              element={!user ? <ForgotPassword /> : <Navigate to="/" />}
            />
            <Route
              path="/resetpassword/:token"
              element={<ResetPassword />}
            />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
          {active && <Footer kor={kor} />}
          {active && <ScrollTop />}
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
