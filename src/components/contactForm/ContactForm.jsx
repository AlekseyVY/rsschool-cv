import {
  ContactBtn,
  ContactLink,
  Container,
  SocialIcon,
  SocialWrapper
} from "./contactForm.styles";
import VideoPlayer from "../video/VideoPlayer";
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Vk } from '../../assets/vk.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';


const ContactForm = () => {
  return (
    <Container>
      <VideoPlayer />
          <div>
            <SocialWrapper>
              <li>
                <a href="https://github.com/AlekseyVY" target="_blank" rel="noreferrer">
                  <SocialIcon>
                    <Github />
                  </SocialIcon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aleksey-vasiliev-b79a53150/" target="_blank" rel="noreferrer">
                  <SocialIcon>
                    <Linkedin />
                  </SocialIcon>
                </a>
              </li>
              <li>
                <a href="https://vk.com/alekseyvy" target="_blank" rel="noreferrer">
                  <SocialIcon>
                    <Vk />
                  </SocialIcon>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AlekseyVYX" target="_blank" rel="noreferrer">
                  <SocialIcon>
                    <Twitter />
                  </SocialIcon>
                </a>
              </li>
            </SocialWrapper>
          </div>
      <ContactLink href="mailto:alekseyvy@gmail?subject= Hi I want to Connect!">
        <ContactBtn>
          Connect
        </ContactBtn>
      </ContactLink>
    </Container>
  )
}

export default ContactForm;