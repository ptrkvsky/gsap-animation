import PropTypes from 'prop-types'
import React from 'react'
import ProjectsItem from './ProjectsItem'
import { BlockProjects } from '../../styles/components/projects/projectsContainer'

const ProjectsContainer = ({ projects }) => (
  <BlockProjects>
    {projects.map(project => (
      <ProjectsItem key={project.text_color} project={project.node} />
    ))}
  </BlockProjects>
)

ProjectsContainer.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectsContainer
