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
      deployLink: 'https://flamboyant-banach-a4efe5.netlify.app/',
    },
    {
      icon: '3',
      name: 'TODO',
      githubLink: 'https://github.com/AlekseyVY/todo-app',
      deployLink: 'https://todo-app-smoky-nine.vercel.app/',
    },
    {
      icon: '4',
      name: 'Countdown timer',
      githubLink: 'https://github.com/AlekseyVY/launch-countdown-timer',
      deployLink: 'https://launch-countdown-timer-smoky.vercel.app/',
    },
    {
      icon: '5',
      name: 'Rock, Paper, Scissors',
      githubLink: 'https://github.com/AlekseyVY/rock_paper_scissor',
      deployLink: 'https://serene-swanson-6fa1bf.netlify.app/',
    },
    {
      icon: '6',
      name: 'Holo clock',
      githubLink: 'https://github.com/AlekseyVY/steampunk_clock',
      deployLink: 'https://holo-clock.netlify.app/',
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
                  gitLink={portfolioCardsDataArray[idx].githubLink}
                  deployLink={portfolioCardsDataArray[idx].deployLink}
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