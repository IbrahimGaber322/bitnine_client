import { Box, IconButton } from "@mui/material";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Epages from "./pages";
import korPages from "./korPages";

const MenuAccordion = ({ handleCloseNavMenu, kor }) => {
  const pages = kor ? korPages : Epages;

  return (
    <>
      {pages.map((page) => {
        return (
          <Accordion key={page.title}>
            <AccordionItem>
              <AccordionHeader as="div">
                <IconButton
                  className="nav-item"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={() => {
                    !page.dropDown && handleCloseNavMenu();
                  }}
                >
                  {page?.title}
                  {page.dropDown && <KeyboardArrowDownIcon />}
                </IconButton>
              </AccordionHeader>

              <AccordionBody>
                {page?.dropDown?.map((dropDown) => {
                  return (
                    <AccordionItem key={dropDown.title}>
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
                          onClick={() => {
                            !dropDown.subDropDown && handleCloseNavMenu();
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
                                <Box
                                  key={subDropDown}
                                  className="nav-item-white-container"
                                >
                                  <IconButton
                                    className="nav-item-white"
                                    sx={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "space-between",
                                      pl: 4,
                                    }}
                                    onClick={handleCloseNavMenu}
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
