import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import LanguageMenu from "./components/LanguageMenu";
import Search from "./components/Search";
import SocialButtons from "../SocialButtons";
import clouds from "../../images/Clouds.jpg";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useEffect, useState } from "react";
const Header = () => {
  
  const [showClouds, setShowClouds] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      
      const threshold = 200;
      const scrollY = window.scrollY || window.pageYOffset;
      setShowClouds(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", position:"fixed", bgcolor:"white", zIndex:100 }}
      disableGutters
      maxWidth={false}
    >
       {showClouds && ( 
        <Box sx={{ width: "100%", height: "45px", backgroundImage: `url(${clouds})`, display:"flex", justifyContent:"center" }}>
          <Typography component="a" sx={{cursor:"pointer", width:"fit-content", fontSize:"18px", fontWeight:700, color:"white", ":hover":{color:"gold"}, p:0, my:"auto"}}>AG Cloud Express : Experience graph database in a cloud environment for FREE!</Typography>
        </Box>
      )}
      <Box
        width={"100%"}
        display={"flex"}
        mt={"5px"}
        justifyContent={"space-between"}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <Box sx={{position:"fixed", top:0, left:0}} ml={10}>
          <LanguageMenu />
        </Box>

        <Box display={"flex"} width={"100%"} justifyContent={"end"}>
          <Box display={"flex"} mr={8}>
            <Box>
              <Search />
            </Box>
            <Box>
              <Button
                size="large"
                color="info"
                sx={{ ":hover": { bgcolor: "inherit", fontWeight: 700 } }}
              >
                CONTACT
              </Button>
            </Box>
          </Box>
          <Box mr={2}>
            <SocialButtons IconBoxSx={{p:1}} medium="18px" fontSize="medium" />
          </Box>
        </Box>
      </Box>
      <ResponsiveAppBar />
    </Container>
  );
};

export default Header;
