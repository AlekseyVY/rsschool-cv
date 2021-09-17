import {AnimationWrapper, Container, MobileAnimationWrapper} from "./contacts.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";
import ContactForm from "../contactForm/ContactForm";


const Contacts = () => {
  return (
    <Container id="contactsID">
      <ContactForm />
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/contact.json'} name={'contact'}/>
      </AnimationWrapper>
      <MobileAnimationWrapper>
        <LottiePlayer data={'./lotties/mobile.json'} name={'mobile_footer'}/>
      </MobileAnimationWrapper>
    </Container>
  )
}

export default Contacts;