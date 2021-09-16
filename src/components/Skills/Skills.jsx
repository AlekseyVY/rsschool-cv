import {Container, Wrapper} from "./skills.styles";
import SkillCard from "../skillCard/SkillCard";
import { ReactComponent as Js } from '../../assets/javascript.svg';
import { ReactComponent as Ts } from '../../assets/typescript.svg';
import { ReactComponent as ReactSVG } from '../../assets/react.svg';
import { ReactComponent as ReduxSVG } from '../../assets/redux.svg';
import { ReactComponent as NextJs } from '../../assets/nextjs.svg';
import { ReactComponent as Node } from '../../assets/node.svg';

const Skills = () => {
  return(
      <Container id="skillsID">
        <Wrapper>
          <li>
            <SkillCard
              mainText={'JavaScript'}
              icon={<Js />}
            />
          </li>
          <li>
            <SkillCard
              mainText={'TypeScript'}
              icon={<Ts />}
            />
          </li>
          <li>
            <SkillCard
              mainText={'React'}
              icon={<ReactSVG />}
            />
          </li>
          <li>
            <SkillCard
              mainText={'Redux'}
              icon={<ReduxSVG />}
            />
          </li>
          <li>
            <SkillCard
              mainText={'NextJS'}
              icon={<NextJs />}
            />
          </li>
          <li>
            <SkillCard
              mainText={'NodeJS'}
              icon={<Node />}
            />
          </li>
        </Wrapper>
      </Container>
  )
}

export default Skills;