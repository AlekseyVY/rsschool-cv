import {AnimationWrapper, Container} from "./contacts.styles";
import LottiePlayer from "../lottiePlayer/LottiePlayer";
import ContactForm from "../contactForm/ContactForm";


const Contacts = () => {
  return (
    <Container id="contactsID">
      <ContactForm />
      <AnimationWrapper>
        <LottiePlayer data={'./lotties/contact.json'} name={'contact'}/>
      </AnimationWrapper>
    </Container>
  )
}

export default Contacts;