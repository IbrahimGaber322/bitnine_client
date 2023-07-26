import { Box, IconButton, Menu, Typography } from "@mui/material";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MenuAccordion = ({ handleCloseNavMenu }) => {
  return (
    <>
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
              PRODUCTS
              <KeyboardArrowDownIcon />
            </IconButton>
          </AccordionHeader>
          <AccordionBody>
            <AccordionItem>
              <AccordionHeader as="div" className="nav-item-white-container">
                <IconButton
                  className="nav-item-white"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    pl: 2,
                  }}
                >
                  Graph Database
                  <KeyboardArrowDownIcon />
                </IconButton>
              </AccordionHeader>

              <AccordionBody>
                <AccordionItem>
                  <AccordionHeader as="div">
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
                        AgensGraph
                      </IconButton>
                    </Box>
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
                        Apache AGE
                      </IconButton>
                    </Box>
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
                        AG Cloud
                      </IconButton>
                    </Box>
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
                        Visualization & Analytics
                      </IconButton>
                    </Box>
                  </AccordionHeader>
                </AccordionItem>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader as="div" className="nav-item-white-container">
                <IconButton
                  className="nav-item-white"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    pl: 2,
                  }}
                >
                  Relational Database
                  <KeyboardArrowDownIcon />
                </IconButton>
              </AccordionHeader>

              <AccordionBody>
                <AccordionItem>
                  <AccordionHeader as="div">
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
                        AgensSQL
                      </IconButton>
                    </Box>
                  </AccordionHeader>
                </AccordionItem>
              </AccordionBody>
            </AccordionItem>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      <IconButton
        className="nav-item"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        USE CASES
      </IconButton>
      <IconButton
        className="nav-item"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        SERVICES
      </IconButton>
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
              RESOURCES
              <KeyboardArrowDownIcon />
            </IconButton>
          </AccordionHeader>
          <AccordionBody as="div">
            <Box className="nav-item-white-container">
              <IconButton
                className="nav-item-white"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  pl: 2,
                }}
              >
                Documentation
              </IconButton>
            </Box>
            <Box className="nav-item-white-container">
              <IconButton
                className="nav-item-white"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  pl: 2,
                }}
              >
                Learn
              </IconButton>
            </Box>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      <IconButton
        className="nav-item"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        BLOG
      </IconButton>
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
              COMPANY
              <KeyboardArrowDownIcon />
            </IconButton>
          </AccordionHeader>
          <AccordionBody as="div">
            <Box className="nav-item-white-container">
              <IconButton
                className="nav-item-white"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  pl: 2,
                }}
              >
                About Us
              </IconButton>
            </Box>
            <Box className="nav-item-white-container">
              <IconButton
                className="nav-item-white"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  pl: 2,
                }}
              >
                Contact
              </IconButton>
            </Box>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
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
              IR
              <KeyboardArrowDownIcon />
            </IconButton>
          </AccordionHeader>
          <AccordionBody as="div">
            <Box className="nav-item-white-container">
              <IconButton
                className="nav-item-white"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  pl: 2,
                }}
              >
                IR 공고
              </IconButton>
            </Box>
            <Box className="nav-item-white-container">
              <IconButton
                className="nav-item-white"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  pl: 2,
                }}
              >
                IR 공시 정보
              </IconButton>
            </Box>
            <Box className="nav-item-white-container">
              <IconButton
                className="nav-item-white"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  pl: 2,
                }}
              >
                IR 재무 정보
              </IconButton>
            </Box>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MenuAccordion;
