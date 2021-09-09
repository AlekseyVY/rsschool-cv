import {AnimationWrapper, Container} from "./contacts.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";


const Contacts = () => {
  return (
    <Container id="contactsID">
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/contact.json'} name={'contact'}/>
      </AnimationWrapper>
    </Container>
  )
}

export default Contacts;