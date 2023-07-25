import { Box, Grid, Typography } from "@mui/material";


const EnterpriseCard =  ({front, back}) =>{

   return(
    <>
        <Grid className="card" item xs={12} sx={{my:1}}>
            <Box className="front">
                <Typography>{front}</Typography>
            </Box>
            <Box className="back">
               <Typography textAlign={"left"}>{back}</Typography>
            </Box>
        </Grid>
    </>
   );

}


export default EnterpriseCard;