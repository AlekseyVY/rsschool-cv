import {Container, NavElement, Navigation, NavigationLink, NavWrapper} from "./navBar.styles";


const NavBar = () => {

  return (
    <Container>
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