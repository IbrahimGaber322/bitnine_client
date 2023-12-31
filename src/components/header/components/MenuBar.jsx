import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Epages from "./pages";
import korPages from "./korPages";

const MenuBar = ({kor}) => {
  const pages = (kor?korPages:Epages);
  return (
    <>
      {pages.map((page) => (
        <div key={page.title} className="TopMenuBar">
          <ul key={page.title}>
            <li className="dropdown">
              <a href="#home">{page.title}</a>
              {page.dropDown && (
                <div className="dropdown-menu">
                  <ul>
                    {page.dropDown.map((dropDown) => (
                      <li key={dropDown.title} className="sub-dropdown">
                        <a href="#home">{dropDown.title}</a>
                        {dropDown.subDropDown && (
                          <div className="sub-dropdown-menu">
                            <ul>
                              {dropDown.subDropDown.map((subDropDown) => (
                                <li key={subDropDown}>
                                  <a href="#home">{subDropDown}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {dropDown.subDropDown && (
                          <KeyboardArrowRightIcon
                            fontSize="medium"
                            sx={{ color: "white", my: "auto" }}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default MenuBar;
