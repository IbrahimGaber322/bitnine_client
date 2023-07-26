import { Box, Button, ClickAwayListener, Grow, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = () => {
  const [expand, setExpand] = useState(false);

  const [search, setSearch] = useState("");

  const searchPosts = () => {};

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchPosts();
    }
  };
  const handleExpand = () => {
    if (!expand) {
      setExpand(true);
    } else {
      searchPosts();
    }
  };
  const handleExpand2 = () => {
    if (search.length === 0) {
      setExpand(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleExpand2}>
      <Box display="flex"  borderRadius={2} overflow={"hidden"} justifyContent="center">
        <Button onClick={handleExpand} sx={{display:expand?"none":"inherit"}} >
          <SearchIcon color="info" fontSize="medium" />
        </Button>
        {expand && (
          <Grow in>
            <TextField
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              value={search}
              fullWidth
              variant="outlined"
              size="small"
              placeholder="SEARCH"
              color="info"
              sx={{bgcolor: "#696969", input:{color:"white"}}}             
            />
          </Grow>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default Search;
