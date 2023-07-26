import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import MediumIcon from "./header/components/MediumIcon";
import { Box, IconButton } from "@mui/material";

const SocialButtons = ({ IconBoxSx, fontSize, medium }) => {
  const icons = [
    { Icon: GitHubIcon, color: "#525252" },
    { Icon: YouTubeIcon, color: "red" },
    { Icon: LinkedInIcon, color: "#0072b1" },
    { Icon: FacebookIcon, color: "#3b5998" },
  ];

  return (
    <>
      {icons.map(({ Icon, color }, index) => (
        <IconButton key={index} className="icon-box" sx={IconBoxSx}>
          <Icon fontSize={fontSize} color="info" />
          <Box
            sx={{ "--curtain-color": color }}
            className="curtain"
          ></Box>
        </IconButton>
      ))}

      <IconButton className="icon-box" sx={IconBoxSx}>
        <MediumIcon medium={medium} />
        <Box sx={{ "--curtain-color": "#32CD32" }} className="curtain"></Box>
      </IconButton>
    </>
  );
};

export default SocialButtons;


