import {
  AnimationWrapper,
  Container,
  CTAContainer,
  CVDownloadBtn, CVDownloadLink,
  Emphasized,
  MainText,
  PText,
  SecText
} from "./hero.styles";
import Typewriter from 'typewriter-effect';
import LottiePlayer from "../lottiePlayer/LottiePlayer";


const Hero = () => {
  return(
    <Container id="homeID">
      <AnimationWrapper alt={"My Avatar"}>
        <LottiePlayer data={'./lotties/hero_2.json'} name={'hero'}/>
      </AnimationWrapper>
      <CTAContainer>
        <MainText>
          Aleksey Vasiliev
        </MainText>
        <SecText>
          <Typewriter
            options={{
              strings: ['Full Stack Web Developer.'],
              autoStart: true,
              pauseFor: 3000,
              loop: true,
            }}
          />
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