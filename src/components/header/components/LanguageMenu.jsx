import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, IconButton } from "@mui/material";

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        sx={{
          bgcolor: "rgb(243, 246, 251)",
          borderRadius: 2,
          fontSize: "16px",
          ...(open && { border: "2px solid #022EA9" }),
          ":hover":{color:"inherit", bgcolor:"rgb(243, 246, 251)"}
        }}
        color="info"
      >
        Select Language
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>한국어</MenuItem>
      </Menu>
    </Box>
  );
}
