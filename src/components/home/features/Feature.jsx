import { Box, Grid, Paper } from "@mui/material";
import { useEffect, useRef } from "react";
const Feature = ({ children, sx, image }) => {
  const ref = useRef(null);
  var width;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    width = ref.current.offsetWidth;
  }, [ref.current]);
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
        <Box ref={ref} className="overlay">
          <Box
            sx={{ fontSize: width / 12, textAlign: "left", color: "#666666" }}
          >
            {children}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Feature;
