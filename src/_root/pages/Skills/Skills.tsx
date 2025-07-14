import { Navbar } from '../../../components/Navbar';
import SkillsCard from './SkillsCard';
import { useGetSkills } from './query/useGetSkils';
import ModalComponent from '../../../components/Modal';



const Skills = () => {

  const {data} = useGetSkills()

  return (
    <div>
      <Navbar headTitle='Skills'/>
      <div className='flex justify-end p-4' >
        <ModalComponent/>
      </div>
        <div className='grid grid-cols-3 gap-4 p-2'>
          {
          data?.map((skill: {name: string, description: string})=> (
            <SkillsCard name={skill.name} description={skill.description} onDelete={()=> {}} onEdit={() => {}}/>
          ))
        }
        </div>
    </div>
  )
}

export default Skills
