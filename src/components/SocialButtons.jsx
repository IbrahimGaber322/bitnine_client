import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import MediumIcon from "./header/components/MediumIcon";
import { Box, IconButton } from "@mui/material";

const SocialButtons = ({ IconBoxSx, fontSize, medium }) => {
  const icons = [
    { Icon: GitHubIcon, color: "#525252", link:"https://github.com/bitnine-oss/agensgraph" },
    { Icon: YouTubeIcon, color: "red", link:"https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber" },
    { Icon: LinkedInIcon, color: "#0072b1", link:"https://www.linkedin.com/company/bitnineglobal/" },
    { Icon: FacebookIcon, color: "#3b5998", link:"https://www.facebook.com/bitninesns/" },
  ];

  return (
    <>
      {icons.map(({ Icon, color, link }, index) => (
        <IconButton component="a" href={link} target="_blank" key={index} className="icon-box" sx={IconBoxSx}>
          <Icon fontSize={fontSize} color="info" />
          <Box
            sx={{ "--curtain-color": color }}
            className="curtain"
          ></Box>
        </IconButton>
      ))}

      <IconButton component="a" href="https://blog.naver.com/bitnine9" target="_blank" className="icon-box" sx={IconBoxSx}>
        <MediumIcon medium={medium} />
        <Box sx={{ "--curtain-color": "#32CD32" }} className="curtain"></Box>
      </IconButton>
    </>
  );
};

export default SocialButtons;


