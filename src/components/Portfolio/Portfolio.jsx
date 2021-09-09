import {CardsWrapper, Container} from "./portfolio.styles";
import PortfolioCard from "../portfolioCard/PortfolioCard";


const Portfolio = () => {
  const portfolioCardsDataArray =
    [{
    icon: '1',
    name: 'Designo website',
    githubLink: 'https://github.com/AlekseyVY/multipage_website',
    deployLink: 'https://multipage-website.vercel.app/',
  },
    {
      icon: '2',
      name: 'Project Storyteller',
      githubLink: 'https://github.com/AlekseyVY/project_NightFall',
      deployLink: '',
    },
    {
      icon: '3',
      name: 'TODO',
      githubLink: 'https://github.com/AlekseyVY/todo-app',
      deployLink: '',
    },
    {
      icon: '4',
      name: 'Countdown timer',
      githubLink: 'https://github.com/AlekseyVY/launch-countdown-timer',
      deployLink: '',
    },
    {
      icon: '5',
      name: 'Rock, Paper, Scissors',
      githubLink: 'https://github.com/AlekseyVY/rock_paper_scissor',
      deployLink: '',
    },
    {
      icon: '6',
      name: 'Holo clock',
      githubLink: 'https://github.com/AlekseyVY/steampunk_clock',
      deployLink: '',
    }]
  return(
    <Container id="portfolioID">
      <CardsWrapper>
        {
          portfolioCardsDataArray.map((card, idx) => {
            return (
              <div key={`${portfolioCardsDataArray[idx]}_${idx}`}>
                <PortfolioCard
                  data={portfolioCardsDataArray[idx].icon}
                  desc={portfolioCardsDataArray[idx].name}
                  link={portfolioCardsDataArray[idx].githubLink}
                />
              </div>
            )
          })
        }
      </CardsWrapper>
    </Container>
  )
}

export default Portfolio;