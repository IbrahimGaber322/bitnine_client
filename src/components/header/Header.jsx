import { Box, Button, Container, IconButton } from "@mui/material";
import LanguageMenu from "./components/LanguageMenu";
import Search from "./components/Search";
import SocialButtons from "../SocialButtons";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
const Header = () => {

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", position:"fixed", bgcolor:"white", zIndex:100 }}
      disableGutters
      maxWidth={false}
    >
      <Box
        width={"100%"}
        display={"flex"}
        mt={"5px"}
        justifyContent={"space-between"}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <Box ml={10}>
          <LanguageMenu />
        </Box>

        <Box display={"flex"}>
          <Box display={"flex"}>
            <Box>
              <Search />
            </Box>
            <Box>
              <Button
                size="large"
                color="info"
                sx={{ ":hover": { bgcolor: "inherit", fontWeight: 700 } }}
              >
                CONTACT
              </Button>
            </Box>
          </Box>
          <Box display={"flex"} ml={{ lg: 20, xs: 2 }}>
            <SocialButtons IconBoxSx={{p:1}} medium="18px" fontSize="medium" />
          </Box>
        </Box>
      </Box>
      <ResponsiveAppBar />
    </Container>
  );
};

export default Header;
