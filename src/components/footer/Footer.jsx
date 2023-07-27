import { Box, Container, Grid, Typography } from "@mui/material";
import Epages from "../header/components/pages";
import korPages from "../header/components/korPages";
import SocialButtons from "../SocialButtons";

const Footer=({kor})=>{
    const pages = (kor?korPages:Epages);
    return(
       <Container disableGutters maxWidth={false} sx={{ p:3}}>
       <Box maxWidth={"1034px"} mx={"auto"}>
          <Grid container sx={{display:{xs:"none", md:"flex"}}} >
          {pages.map((page)=>{
            return(
                <>
                {(page.title !== "IR") &&
                <Grid item xs={2} display={"flex"} flexDirection={"column"}>
                   <Typography sx={{cursor:(!page.dropDown&&"pointer"), ":hover":{color:(!page.dropDown&&"#4a8eff")}, width:"fit-content"}} mb={1} fontWeight="700" fontSize=".9em" color="#ababab">{page?.title}</Typography>
                    {page?.dropDown?.map((dropDown)=>{
                        return(
                            <Typography sx={{cursor:"pointer", ":hover":{color:"#4a8eff"}}} mb={1} fontSize=".9em" color="#ababab">{dropDown.title}</Typography>
                        )
                    })}
                </Grid>
                }
                </>
            )
          })}
             
          </Grid>

          <Box sx={{display:"flex", justifyContent:"space-between", width:"100%", mt:8}}>
            <Typography fontSize=".9em" color="#ababab">©2023 by Bitnine Global Inc. All Rights Reserved.</Typography>
            <Box sx={{display:{xs:"none", md:"inline"}}}>
            <SocialButtons IconBoxSx={{p:1}} medium="15px" fontSize="small" />
            </Box>
          </Box>
        </Box>
       </Container>
         
    );
}


export default Footer;