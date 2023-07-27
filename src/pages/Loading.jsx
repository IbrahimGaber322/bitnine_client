import { CircularProgress, Container } from "@mui/material";



const Loading = () =>{

    return(
        <Container maxWidth={false} disableGutters sx={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        
        <CircularProgress />


        </Container>
    );
}

export default Loading;