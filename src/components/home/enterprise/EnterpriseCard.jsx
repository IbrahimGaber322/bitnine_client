import { Box, Grid } from "@mui/material";

const EnterpriseCard = ({ front, back }) => {
  return (
    <>
      <Grid className="card" item xs={12} sx={{ my: 1 }}>
        <Box className="front">
          <>{front}</>
        </Box>
        <Box className="back">
          <>{back}</>
        </Box>
      </Grid>
    </>
  );
};

export default EnterpriseCard;
