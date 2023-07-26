import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const MenuBar = () =>{
    const pages = [
        {title:"PRODUCTS", dropDown:[{title:"Graph Database", subDropDown:["AgensGraph", "Apache AGE", "AG Cloud", "Visualization & Analysis"]},
        {title:"Relational Database", subDropDown:["AgensSQL"]} ]},
        {title:"USE CASES"},
        {title:"SERVICES"},
        {title:"RESOURCES", dropDown:[{title:"Documentation"}, {title:"Learn"} ]},
        {title:"BLOG"},
        {title:"COMPANY", dropDown:[{title:"About Us"}, {title:"Contact"} ]},
        {title:"IR", dropDown:[{title:"IR 공고"}, {title:"IR 공시 정보"}, {title:"IR 재무 정보"} ]}
      ];
 

 
      return (
         <>
          {pages.map((page) => (
            <div className="TopMenuBar">
              <ul key={page.title} >
                <li className="dropdown">
                  <a href="#">{page.title}</a>
                  {page.dropDown && (
                    <div className="dropdown-menu">
                      <ul>
                        {page.dropDown.map((dropDown) => (
                          <li key={dropDown.title} className="sub-dropdown">
                            <a href="#">{dropDown.title}</a>
                            {dropDown.subDropDown && (
                              <div className="sub-dropdown-menu">
                                <ul>
                                  {dropDown.subDropDown.map((subDropDown) => (
                                    <li key={subDropDown}>
                                      <a href="#">{subDropDown}</a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {dropDown.subDropDown && (<KeyboardArrowRightIcon fontSize='medium' sx={{color:"white", my:"auto"}} />)}
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

}



export default MenuBar;

