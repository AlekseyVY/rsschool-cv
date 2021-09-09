import {AnimationWrapper, Container} from "./education.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";


const Education = () => {
  return(
    <Container id="educationID">
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/education.json'} name={'education'}/>
      </AnimationWrapper>
    </Container>
  )
}

export default Education;