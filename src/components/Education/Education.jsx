import {AnimationWrapper, CodeWrapper, Container, MobileAnimationWrapper} from "./education.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";
import Highlight from 'react-highlight';


const Education = () => {

  return(
    <Container id="educationID">
      <CodeWrapper>
        <Highlight className='javascript'>
          {"class Education {\n" +
          "  constructor() {\n" +
          "    this.name = \"Aleksey Vasiliev\";\n" +
          "    this.russian = 'Native';\n" +
          "    this.english = \"C2\";\n" +
          "  }\n" +
          "\n" +
          "  bachelor = () => {\n" +
          "    const name = \"Bachelor of Science: Computer Science\";\n" +
          "    const university = \"University of People\";\n" +
          "    const timeLine = \"2018-08 - current.\";\n" +
          "  }\n" +
          "\n" +
          "  Certificate_1 = () => {\n" +
          "    const name = \"Full Stack open\";\n" +
          "    const issuer = \"University of Helsinki\";\n" +
          "    const timeLine = \"10/2019\";\n" +
          "  }\n" +
          "\n" +
          "  Certificate_2 = () => {\n" +
          "    const name = \"JavaScript Algorithms and Data Structures\";\n" +
          "    const issuer = \"FreeCodeCamp\";\n" +
          "    const timeLine = \"02/2020\";\n" +
          "  }\n" +
          "\n" +
          "  Certificate_3 = () => {\n" +
          "    const name = \"CS50\";\n" +
          "    const issuer = \"Harvard University\";\n" +
          "    const timeLine = \"11/2020\";\n" +
          "  }\n" +
          "\n" +
          "  Certificate_4 = () => {\n" +
          "    const name = \"EF SET\";\n" +
          "    const issuer = \"efset.org\";\n" +
          "    const timeLine = \"12/2020 \";\n" +
          "  }\n" +
          "}"}
        </Highlight>
      </CodeWrapper>
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/education.json'} name={'education'}/>
      </AnimationWrapper>
      <MobileAnimationWrapper>
        <LottiePlayer data={'./lotties/mobile.json'} name={'mobile_edu'}/>
      </MobileAnimationWrapper>
    </Container>
  )
}

export default Education;