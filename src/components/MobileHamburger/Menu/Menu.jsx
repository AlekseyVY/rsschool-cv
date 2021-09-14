import {NavMenuExpandCont, StyledMenu} from "./menu.styles";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavMenuExpandCont>
          <a href="#homeID">
            home
          </a>
          <a href="#skillsID">
            skills
          </a>
          <a href="#educationID">
            education
          </a>
        <a href="#portfolioID">
          portfolio
        </a>
        <a href="#contactsID">
          contacts
        </a>
      </NavMenuExpandCont>
    </StyledMenu>
  )
}

export default Menu