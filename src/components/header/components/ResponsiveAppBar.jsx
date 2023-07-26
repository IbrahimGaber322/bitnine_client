import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import BitnineLogo from "../../../images/b_logo.png";
import MenuAccordion from "./MenuAccordion";

const pages = [
  "PRODUCTS",
  "USE CASES",
  "SERVICES",
  "RESOURCES",
  "BLOG",
  "COMPANY",
  "IR",
];


function ResponsiveAppBar() {
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Container maxWidth={false} disableGutters>
        <Toolbar disableGutters>
          <Box flexGrow={100}>
            <Box component={"img"} src={BitnineLogo} width={"232.5px"} height={"60px"} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              slotProps={{paper:{sx:{width:"100%"}}}}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              <MenuAccordion handleCloseNavMenu={handleCloseNavMenu} />
              <Button size="small" className="slide" sx={{ my:"auto", height:"fit-content", ml:1 }} variant="contained">
              TRY FREE
            </Button>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
          
            {pages.map((page) => (
              <Button
                key={page}
                className="nav-item"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Button size="small" className="slide" sx={{ my:"auto", height:"fit-content" }} variant="contained">
              TRY FREE
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
