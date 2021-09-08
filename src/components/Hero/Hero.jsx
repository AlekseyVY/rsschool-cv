import {AnimationWrapper, Container, CTAContainer, MainText, PText, SecText} from "./hero.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";


const Hero = () => {
  return(
    <Container>
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/hero.json'} name={'hero'}/>
      </AnimationWrapper>
      <CTAContainer>
        <MainText>
          Aleksey Vasiliev
        </MainText>
        <SecText>
          Web Developer
        </SecText>
        <PText>
          Enthusiastic Web Developer eager to contribute to team success through hard work, attention to detail and
          excellent organizational skills. Clear understanding of Front End and Back End and training in JavaScript,
          React, Redux, ExpressJS, Html, Css. Motivated to learn, grow and excel in Web Development.
        </PText>
      </CTAContainer>
    </Container>
  )
}

export default Hero;