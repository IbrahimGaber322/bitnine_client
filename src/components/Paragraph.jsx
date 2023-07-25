import { Typography } from "@mui/material";


const Paragraph = ({children, sx}) => {
  return (
    <Typography
      sx={{
        ...sx,
        mx: "auto",
        mt: 0,
        mb: "1.5rem",
        color: "#666666",
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
