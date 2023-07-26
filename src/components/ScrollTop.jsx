import {React, useState, useEffect} from 'react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, IconButton } from '@mui/material';

function ScrollTop(){
    const [show,setShow] = useState({visibility:"hidden"});
    useEffect(() => {
        const showButton = () => {
          let pos = window.scrollY;
          if (typeof window !== "undefined") {
            if (pos < 400) {
              setShow({visibility:"hidden" });
            } else if (pos >= 400) {
              setShow({visibility:"visible" });
            }
          }
        }
        showButton();
          if (typeof window !== "undefined") {
            window.addEventListener("scroll", showButton);
            window.addEventListener("resize", showButton);
            return () => {
              window.removeEventListener("scroll", showButton);
              window.removeEventListener("resize", showButton);
            };
          }
          
        },[]);
    return (
      <>
      
          <Box ><IconButton sx={{...show, }} href='#home'  ><ExpandLessIcon sx={{color:"white", position:"fixed", bottom:0, right:0, bgcolor:"#1114186b", borderRadius:3, m:3}} fontSize="large" /></IconButton></Box>
       
      </>
    );
}

export default ScrollTop;



