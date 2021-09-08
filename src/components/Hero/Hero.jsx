import {
  AnimationWrapper,
  Container,
  CTAContainer,
  CVDownloadBtn, CVDownloadLink,
  Emphasized,
  MainText,
  PText, SecondAnimationWrapper,
  SecText
} from "./hero.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";


const Hero = () => {
  return(
    <Container>
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/hero_2.json'} name={'hero'}/>
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
        <CVDownloadLink href='./assets/cv.pdf' download>
          <CVDownloadBtn>
            Download CV
          </CVDownloadBtn>
        </CVDownloadLink>
      </CTAContainer>
    </Container>
  )
}

export default Hero;