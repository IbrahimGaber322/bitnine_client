import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { Container,CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import "./App.css";

import Home from "./pages/Home";


const App = () => {

 const user = useSelector((state)=>state.user.user);
 const active = user?.active;
 console.log(user);

  return (
    <BrowserRouter>
   
   <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
       
          <Container sx={{minHeight:"100vh"}} maxWidth={false} disableGutters >
           
            <Routes>
              <Route path="/" element={active?<Home />:<Home />} />
           
            </Routes>
            </Container>
       
      
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;




