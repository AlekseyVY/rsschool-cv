import {Container, IconWrapper, LogoText} from "./skillCard.styles";


const Skill = ({mainText}) => {
  return (
    <Container>
      <IconWrapper>
        icon
      </IconWrapper>
      <LogoText>
        {mainText}
      </LogoText>
    </Container>
  )
}

export default Skill;