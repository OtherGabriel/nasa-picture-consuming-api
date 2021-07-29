import { ProjectTitle, ProjectText, Room } from "../style"

export const Title = ({ children, background, color, size }) => (
  <ProjectTitle
    background={ background }
    color={ color }
    size={ size }
  >
    { children }
  </ProjectTitle>
)

export const Text = ({ children, background, color, size, weight }) => (
  <ProjectText
    background={ background }
    color={ color }
    size={ size }
    weight={ weight }
  >
    { children }
  </ProjectText>
)

export const TextDiv = ({ children, display, direction, align, justify, width, height, margin }) => (
  <Room
    children={ children }
    display={ display }
    direction={ direction }
    align={ align }
    justify={ justify }
    width={ width }
    height={ height }
    margin={ margin }
  >
    { children }
  </Room>
)
