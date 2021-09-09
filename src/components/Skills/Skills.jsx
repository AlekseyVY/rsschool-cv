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
              <SkillCard
                mainText={skillArray[idx]}
                icon="1"
              />
            </div>
          )
        })
      }
    </Container>
  )
}

export default Skills;