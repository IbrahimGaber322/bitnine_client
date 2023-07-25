import { Box, Grid, Paper } from "@mui/material";
import Paragraph from "../../Paragraph";
const Feature = ({ children, sx, image }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{ display: "flex", justifyContent: "center", p: 1 }}
    >
      <Paper
        className="image-container"
        elevation={5}
        sx={{ p: 3, borderRadius: 3 }}
      >
        <Box
          className="image"
          sx={{ maxWidth: "100%", height: "auto" }}
          component={"img"}
          src={image}
        />
        <Box className="overlay">
          <Paragraph sx={{textAlign:"left"}}>
            {children}
          </Paragraph>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Feature;
