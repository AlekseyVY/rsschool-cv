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
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="100" height="100"
                   data-view-component="true">
                <path fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </GitLink>
            </Link>
            <Link href={deployLink} target="_blank" rel="noreferrer">
            <DeployLink>
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 512 512" width="100" height="100" xmlSpace="preserve">
                <g>
                  <g>
                    <path d="M476.853,35.148c-46.864-46.864-122.842-46.864-169.706-0.001L206.853,135.441c-48.475,48.477-43.987,125.717,0,169.706
                      c7.366,7.366,15.516,13.372,24.122,18.305l18.305-18.305c12.006-12.008,7.78-26.045,7.564-36.174
                      c-2.635-1.868-5.198-3.887-7.564-6.253c-22.573-22.571-23.588-61.265,0-84.853c3.503-3.503,98.166-98.166,100.292-100.292
                      c23.399-23.399,61.454-23.399,84.853,0c23.399,23.399,23.399,61.454,0,84.853l-66.293,66.293
                      c1.917,10.607,13.422,35.733,7.504,77.181c0.289-0.284,0.635-0.467,0.923-0.754l100.294-100.294
                      C523.715,157.99,523.715,82.012,476.853,35.148z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M312.918,199.081c-7.365-7.366-15.516-13.372-24.12-18.305l-18.305,18.305c-12.008,12.006-7.782,26.043-7.566,36.172
                      c2.637,1.868,5.2,3.887,7.566,6.253c22.573,22.573,23.588,61.265,0,84.853c-3.511,3.511-106.015,106.015-108.066,108.066
                      c-23.399,23.399-61.454,23.399-84.853,0c-23.399-23.399-23.399-61.454,0-84.853l74.067-74.067
                      c-1.917-10.607-13.423-35.733-7.504-77.181c-0.289,0.284-0.637,0.469-0.925,0.756L35.147,307.147
                      c-46.862,46.864-46.862,122.842,0,169.706c46.864,46.862,122.841,46.862,169.705,0l108.066-108.066
                      C360.494,321.211,357.894,244.056,312.918,199.081z"/>
                  </g>
                </g>
              </svg>
            </DeployLink>
            </Link>
          </div>
        </Container>
    </>
  )
}

export default PortfolioCard;