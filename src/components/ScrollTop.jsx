import React, { useState, useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, IconButton } from '@mui/material';

function ScrollTop() {
  const [show, setShow] = useState({ visibility: "hidden" });

  useEffect(() => {
    const showButton = () => {
      let pos = window.scrollY;
      if (pos < 400) {
        setShow({ visibility: "hidden" });
      } else {
        setShow({ visibility: "visible" });
      }
    };

    showButton();

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", showButton);
      window.addEventListener("resize", showButton);
      return () => {
        window.removeEventListener("scroll", showButton);
        window.removeEventListener("resize", showButton);
      };
    }
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Box>
        {show.visibility === "visible" && (
          <IconButton
            sx={{
              ...show,
              '&.scroll-top-button': {
                visibility: 'visible',
                transition: 'visibility 0.2s ease-out',
              },
            }}
            onClick={handleScrollToTop}
            className="scroll-top-button"
          >
            <ExpandLessIcon sx={{ color: "white", position: "fixed", bottom: 0, right: 0, bgcolor: "#1114186b", borderRadius: 3, m: 3 }} fontSize="large" />
          </IconButton>
        )}
      </Box>
    </>
  );
}

export default ScrollTop;
