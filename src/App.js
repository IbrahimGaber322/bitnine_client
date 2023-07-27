import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container,CssBaseline } from "@mui/material";
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
import { getUser } from "./actions/user";

const App = () => {
 const dispatch = useDispatch();
 const token = useSelector((state)=>state?.token?.token);
 const user = useSelector((state)=>state?.user);
 const active = user?.active;


useEffect(()=>{
   if(token ){
    dispatch(getUser());
   }
  
},[token, dispatch])



  return (
    <BrowserRouter>
   
   <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
       
          <Container sx={{minHeight:"100vh"}} maxWidth={false} disableGutters >
            {active &&<Header />}
            <Routes>
              <Route index element={(user&&active)?<Home />:(user?<Confirm />:<SignIn />)} />
              <Route path="/signup" element={!user&&<SignUp />} />
              <Route path="/confirm" element={!user&&<Confirm />} />
              <Route path="/confirm/:token" element={<Confirm />} />
            </Routes>
            {active&& <Footer />}
            {active &&<ScrollTop />}
            </Container>
          
       
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;




