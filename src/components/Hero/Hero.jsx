import {AnimationWrapper, Container} from "./hero.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";


const Hero = () => {
  return(
    <Container>
      <h1>
        Hero
      </h1>
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/hero.json'} name={'hero'}/>
      </AnimationWrapper>
    </Container>
  )
}

export default Hero;