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
import LanguageMenu from "./LanguageMenu";
import MenuBar from "./MenuBar";
import { useDispatch } from "react-redux";
import { signOut } from "../../../actions/user";

function ResponsiveAppBar({kor}) {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box flexGrow={1} ml={2}>
            <Box
              component={"img"}
              src={BitnineLogo}
              sx={{
                width: { xs: "96.88px", sm: "193.75px", lg: "232.5px" },
                height: "auto",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <LanguageMenu />
          </Box>

          <Box sx={{ flexGrow: -1, display: { xs: "flex", lg: "none" } }}>
            <Box
              sx={{
                width: { xs: "96.88px", sm: "193.75px", lg: "232.5px" },
                height: "auto",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ ":hover": { color: "gold" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
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
              slotProps={{ paper: { sx: { width: "100%" } } }}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              <MenuAccordion kor={kor} handleCloseNavMenu={handleCloseNavMenu} />
              <Button
                size="small"
                className="slide"
                sx={{ my: "auto", height: "fit-content", ml: 1 }}
                variant="contained"
              >
                TRY FREE
              </Button>
              <Button
                size="small"
                className="slide"
                color="secondary"
                sx={{ my: "auto", height: "fit-content", ml: 1 }}
                variant="contained"
                onClick={handleSignOut}
              >
                SIGN OUT
              </Button>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: -1, display: { xs: "none", lg: "flex" } }}>
            <MenuBar kor={kor} />

            <Button
              size="small"
              className="slide"
              sx={{ my: "auto", height: "fit-content" }}
              variant="contained"
            >
              TRY FREE
            </Button>
            <Button
              size="small"
              className="slide"
              color="secondary"
              sx={{ my: "auto", height: "fit-content", ml: 1 }}
              variant="contained"
              onClick={handleSignOut}
            >
              SIGN OUT
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
