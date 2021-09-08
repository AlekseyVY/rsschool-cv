import {Container} from "./skills.styles";
import SkillCard from "../skillCard/SkillCard";


const Skills = () => {
  const skillArray = ['JavaScript', 'TypeScript', 'React', 'Redux', 'ExpressJS', 'NodeJS']
  return(
    <Container id="skillsID">
      {
        skillArray.map((skill, idx) => {
          return (
            <div key={idx}>
              <SkillCard key={idx} mainText={skillArray[idx]}/>
            </div>
          )
        })
      }
    </Container>
  )
}

export default Skills;