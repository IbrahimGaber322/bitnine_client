import { Box, IconButton, Menu, Typography } from "@mui/material";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import pages from "./pages";

const MenuAccordion = ({ handleCloseNavMenu }) => {
  return (
    <>
      {pages.map((page) => {
        return (
          <Accordion>
            <AccordionItem>
              <AccordionHeader as="div">
                <IconButton
                  className="nav-item"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {page?.title}
                  {page.dropDown && <KeyboardArrowDownIcon />}
                </IconButton>
              </AccordionHeader>

              <AccordionBody>
                {page?.dropDown?.map((dropDown) => {
                  return (
                    <AccordionItem>
                      <AccordionHeader
                        as="div"
                        className="nav-item-white-container"
                      >
                        <IconButton
                          className="nav-item-white"
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            pl: 2,
                          }}
                        >
                          {dropDown.title}
                          {dropDown.subDropDown && <KeyboardArrowDownIcon />}
                        </IconButton>
                      </AccordionHeader>

                      <AccordionBody>
                        <AccordionItem>
                          <AccordionHeader as="div">
                            {dropDown?.subDropDown?.map((subDropDown) => {
                              return (
                                <Box className="nav-item-white-container">
                                  <IconButton
                                    className="nav-item-white"
                                    sx={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "space-between",
                                      pl: 4,
                                    }}
                                  >
                                    {subDropDown}
                                  </IconButton>
                                </Box>
                              );
                            })}
                          </AccordionHeader>
                        </AccordionItem>
                      </AccordionBody>
                    </AccordionItem>
                  );
                })}
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default MenuAccordion;
