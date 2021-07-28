// Example navbar.

import Image from "next/image"
import medieval from "../../public/medieval-gif.gif"

import {
  Room,
  Title
} from "./style"

export const Navbar = () => {
  return (
    <Room>
      <Title>Navbar</Title>

      <Image width="80" height="80" src={ medieval } />
    </Room>
  )
}
