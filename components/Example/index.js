// Example component.

import { useState, useEffect } from "react"

import {
  Room,
  Title
} from "./style"

import { medieval } from "../../utils/example"

export const Example = () => {
  const [ content, setContent ] = useState("")

  function buildContent () {
    let response

    response = medieval

    setContent(response)
  }

  useEffect(() => {
    buildContent()
  }, [])

  return (
    <Room>
      <Title>
        {
          content == "" ?
          <>Loading...</> :
          <>{ content }</>
        }
      </Title>
    </Room>
  )
}
