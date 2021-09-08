import {
  AnimationWrapper,
  Container,
  CTAContainer,
  CVDownloadBtn,
  Emphasized,
  MainText,
  PText,
  SecText
} from "./hero.styles";
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
          Enthusiastic <Emphasized>Web Developer</Emphasized> eager to contribute to team success through hard work, attention to detail and
          excellent organizational skills. Clear understanding of <Emphasized>Front End</Emphasized> and <Emphasized>Back End</Emphasized> and training in JavaScript,
          React, Redux, ExpressJS, Html, Css. Motivated to learn, grow and excel in <Emphasized>Web Development</Emphasized>.
        </PText>
        <CVDownloadBtn>
          Download CV
        </CVDownloadBtn>
      </CTAContainer>
    </Container>
  )
}

export default Hero;