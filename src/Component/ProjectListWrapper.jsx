

import { PROJECT_LIST } from '../Utils/constant'
import ProjectCard from './ProjectCard'

function ProjectListWrapper() {
  return (
    <div className="w-full relative text-black  px-[2vw] z-[2] h-[160vh]  ">

        {
            PROJECT_LIST.map(project => <ProjectCard key={project?.title} {...project} />)
        }

        
        
    </div>
  )
}

export default ProjectListWrapper