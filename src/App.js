import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { Container,CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import "./App.css";


const App = () => {

 const user = useSelector((state)=>state.user);
 const [dark,setDark] = useState(JSON.parse(localStorage.getItem("dark")));
 useEffect(()=>{
  localStorage.setItem("dark",JSON.stringify(dark));
 },[dark]);
  return (
    <BrowserRouter>
   
      <ThemeProvider >
      <CssBaseline enableColorScheme/>
       
          <Container sx={{minHeight:"100vh"}} maxWidth={false} disableGutters >
           
            <Routes>
              <Route path="/" element={user?<Navigate to="/posts?page=1" />:<Navigate to="/signin" />} />
           
            </Routes>
            </Container>
       
      </ThemeProvider>

    </BrowserRouter>
  );
};

export default App;




