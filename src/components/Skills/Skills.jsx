import {Container, Wrapper} from "./skills.styles";
import SkillCard from "../skillCard/SkillCard";
import { ReactComponent as Js } from '../../assets/javascript.svg';
import { ReactComponent as Ts } from '../../assets/typescript.svg';
import { ReactComponent as ReactSVG } from '../../assets/react.svg';
import { ReactComponent as ReduxSVG } from '../../assets/redux.svg';
import { ReactComponent as NextJs } from '../../assets/nextjs.svg';
import { ReactComponent as Node } from '../../assets/node.svg';

const Skills = () => {
  const dataObj = {
    1: {name: 'JavaScript', icon: <Js />},
    2: {name: 'TypeScript', icon: <Ts />},
    3: {name: 'React', icon: <ReactSVG />},
    4: {name: 'Redux', icon: <ReduxSVG />},
    5: {name: 'NextJS', icon: <NextJs />},
    6: {name: 'NodeJS', icon: <Node />},
  };

  return(
      <Container id="skillsID">
        <Wrapper>
          {
            Object.keys(dataObj).map((ele,) => {
              return (
                <li key={ele}>
                  <SkillCard mainText={dataObj[ele].name} icon={dataObj[ele].icon}/>
                </li>
              )
            })
          }
        </Wrapper>
      </Container>
  )
}

export default Skills;