import {Container, MobileNav, NavElement, Navigation, NavigationLink, NavWrapper} from "./navBar.styles";
import MobileHamburger from "../MobileHamburger/MobileHamburger";


const NavBar = () => {

  return (
    <Container>
      <MobileNav>
        <MobileHamburger />
      </MobileNav>
      <NavWrapper>
        <Navigation>
          <NavElement>
            <NavigationLink href="#homeID">
              Home
            </NavigationLink>
          </NavElement>
          <NavElement>
            <NavigationLink href="#skillsID">
              Skills
            </NavigationLink>
          </NavElement>
          <NavElement>
            <NavigationLink href="#educationID">
              Education
            </NavigationLink>
          </NavElement>
          <NavElement>
            <NavigationLink href="#portfolioID">
              Portfolio
            </NavigationLink>
          </NavElement>
          <NavElement>
            <NavigationLink href="#contactsID">
              Contacts
            </NavigationLink>
          </NavElement>
        </Navigation>
      </NavWrapper>
    </Container>
  )
}

export default NavBar;