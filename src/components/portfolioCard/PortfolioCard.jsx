import {
  Container,
  DeployLink,
  DescLogo, DescriptionWrapper,
  DescWrapper,
  GitLink,
  Link,
  Overlay, TechContent,
  TechWrapper
} from "./portfolioCard.styles";
import { ReactComponent as LinkGit } from '../../assets/gitLink.svg';
import { ReactComponent as LinkDeploy } from '../../assets/deployLink.svg';


const PortfolioCard = ({data, desc, gitLink, deployLink, tech, description}) => {
  return(
    <>
        <Container>
          <img src={`./assets/portfolio/${data}.webp`} alt={desc}/>
          <DescWrapper>
            <DescLogo>
              {desc}
            </DescLogo>
            <TechWrapper>
              {
                tech.map((ele, idx) => {
                  return(
                    <TechContent key={`${ele.length}_${idx}`}>
                      {ele}
                    </TechContent>
                  )
                })
              }
            </TechWrapper>
            <DescriptionWrapper>
              {description}
            </DescriptionWrapper>
          </DescWrapper>
          <Overlay>
          </Overlay>
          <div>
            <Link href={gitLink} target="_blank" rel="noreferrer">
            <GitLink>
              <LinkGit />
            </GitLink>
            </Link>
            <Link href={deployLink} target="_blank" rel="noreferrer">
            <DeployLink>
              <LinkDeploy />
            </DeployLink>
            </Link>
          </div>
        </Container>
    </>
  )
}

export default PortfolioCard;