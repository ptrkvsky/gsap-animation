import PropTypes from 'prop-types'
import React, { useEffect, useState, useRef } from 'react'
import gsap, { TweenLite } from 'gsap'
import TransitionLink from 'gatsby-plugin-transition-link'
import { BlockItem } from '../../styles/components/projects/projectsItem'
import theme from '../../styles/theme'

const ProjectsItem = ({ project }) => {
  const [illuPosY, setIlluPosY] = useState(0)
  const [illuPosX, setIlluPosX] = useState(0)
  const [windowWidth, setwindowWidth] = useState(0)
  const [ratioScale, setRatioScale] = useState(0)

  // ? Position image on X
  useEffect(() => {
    // Get image to animate
    const nodeIllu = document.querySelector(`.illu.${project._meta.uid}`)

    // if no scroll calulate image Y pos
    setIlluPosY(nodeIllu.getBoundingClientRect().y)

    // Func to calculate image Y pos on scroll
    const handleScroll = () => {
      // Get de position of image element on Y
      if (nodeIllu) {
        setIlluPosY(nodeIllu.getBoundingClientRect().y)
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [illuPosY, project._meta.uid, project.main_image.dimensions.width])

  // ? Position image on Y
  useEffect(() => {
    // Get image to animate
    const nodeIllu = document.querySelector(`.illu.${project._meta.uid}`)

    // Initialize window width if no resize
    setwindowWidth(window.innerWidth - 40)

    // Initialize scale ratio image
    setRatioScale(window.innerHeight / nodeIllu.getBoundingClientRect().height)
    // Set window width on resize
    const handleResize = () => {
      setwindowWidth(window.innerWidth - 40)
    }

    window.addEventListener('resize', handleResize)

    setIlluPosX(
      windowWidth -
        nodeIllu.getBoundingClientRect().width * ratioScale -
        nodeIllu.getBoundingClientRect().x
    )
  }, [project._meta.uid, ratioScale, windowWidth])

  const handeClick = () => {
    TweenLite.from(`.illu.${project._meta.uid}`, {
      zIndex: 150,
    })
    TweenLite.to(`.illu.${project._meta.uid}`, {
      x: illuPosX,
      y: -illuPosY,
      scale: ratioScale,
    })
    TweenLite.to(`#main-title`, {
      opacity: 0,
      duration: 1,
    })
  }

  const handleMouseEnter = () => {
    TweenLite.to(`body`, {
      backgroundColor: project.background_color,
    })
  }

  const handleMouseLeave = () => {
    TweenLite.to(`body`, {
      backgroundColor: theme.bg.main,
    })
  }

  return (
    <BlockItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <TransitionLink
        to="page-2"
        onClick={() => handeClick()}
        exit={{
          delay: 1,
          length: 0.5,
        }}
        entry={{
          delay: 0.5,
          length: 0,
        }}
      >
        <img
          className={`illu ${project._meta.uid}`}
          alt={project.name[0].text}
          title={project.name[0].text}
          src={project.main_image.url}
          style={{
            position: 'relative',
            zIndex: 10,
            transformOrigin: 'top left',
          }}
        />
      </TransitionLink>

      <p
        className="project-title"
        style={{ textShadow: `2px 2px 1px  ${project.text_color}` }}
      >
        {project.name[0].text}
      </p>
    </BlockItem>
  )
}

export default ProjectsItem

ProjectsItem.propTypes = {
  project: PropTypes.any,
}
