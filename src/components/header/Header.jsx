import { Box, Button, Container, IconButton } from "@mui/material";
import LanguageMenu from "./components/LanguageMenu";
import Search from "./components/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import MediumIcon from "./components/MediumIcon";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
const Header = () => {
  const IconBoxSx = { p: 1, display: "flex" };
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column" }}
      disableGutters
      maxWidth={false}
    >
      <Box
        width={"100%"}
        display={"flex"}
        mt={"5px"}
        justifyContent={"space-between"}
      >
        <Box ml={10}>
          <LanguageMenu />
        </Box>

        <Box display={"flex"}>
          <Box display={"flex"}>
            <Box sx={{display:{xs:"none", lg:"inline"}}}>
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
          <Box display={"flex"} ml={{lg:20, xs:2}}>
            <IconButton className="icon-box" sx={IconBoxSx}>
              <GitHubIcon color="secondary" />{" "}
              <Box
                sx={{ "--curtain-color": "#525252" }}
                className="curtain"
              ></Box>
            </IconButton>
            <IconButton className="icon-box" sx={IconBoxSx}>
              <YouTubeIcon color="info" />
              <Box sx={{ "--curtain-color": "red" }} className="curtain"></Box>
            </IconButton>
            <IconButton className="icon-box" sx={IconBoxSx}>
              <LinkedInIcon color="info" />
              <Box
                sx={{ "--curtain-color": "#0072b1" }}
                className="curtain"
              ></Box>
            </IconButton>
            <IconButton className="icon-box" sx={IconBoxSx}>
              <FacebookIcon color="info" />
              <Box
                sx={{ "--curtain-color": "#3b5998" }}
                className="curtain"
              ></Box>
            </IconButton>
            <IconButton className="icon-box" sx={IconBoxSx}>
              <MediumIcon />
              <Box
                sx={{ "--curtain-color": "#32CD32" }}
                className="curtain"
              ></Box>
            </IconButton>
          </Box>
        </Box>
      </Box>
       <ResponsiveAppBar/>
    </Container>
  );
};

export default Header;
