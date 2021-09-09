import {Container, DescLogo, DescWrapper, Link} from "./portfolioCard.styles";

const PortfolioCard = ({data, desc, link}) => {
  console.log(link)
  return(
    <>
      <Link href={link} target="_blank" rel="noreferrer">
        <Container>
          <img src={`./assets/portfolio/${data}.webp`} alt={desc}/>
          <DescWrapper>
            <DescLogo>
              {desc}
            </DescLogo>
          </DescWrapper>
        </Container>
      </Link>
    </>
  )
}

export default PortfolioCard;