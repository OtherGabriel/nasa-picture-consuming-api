import { useState, useEffect } from "react"

import axios from "axios"

import { Room, ImageDiv, Img } from "./style"
import { Input, Button, FormDiv } from "../Templates/Form"
import { TextDiv } from "../Templates/Text"

export const Picture = () => {
  const BASE_URL = "https://api.nasa.gov/planetary/apod"
  const API_KEY = ""

  const [ count, setCount ] = useState(10)
  const [ startDate, setStartDate ] = useState("")
  const [ endDate, setEndDate ] = useState("")

  const [ data, setData ] = useState([])

  const [ isLoading, setIsLoading ] = useState(true)
  const [ notFound, setNotFound ] = useState(false)

  async function getPictures () {
    setIsLoading(true)

    let response

    try {
      response = await axios.get(`${ BASE_URL }?api_key=${ API_KEY }&count=${ count }`)

      if (startDate != "" && endDate != "") {
        response = await axios.get(`${ BASE_URL }?api_key=${ API_KEY }&start_date=${ startDate }&end_date=${ endDate }`)
      }

      setData(response.data)

      setIsLoading(false)
      setNotFound(false)
    } catch (error) {
      console.log(error)

      setNotFound(true)
    }
  }

  const changeCount = (event) => setCount(event.target.value)
  const nextCount = () => setCount(count + 1)
  const previousCount = () => count - 1 < 1 ? setCount(count) : setCount(count - 1)

  const changeStartDate = (event) => setStartDate(event.target.value)
  const changeEndDate = (event) => setEndDate(event.target.value)

  useEffect(() => getPictures(), [])

  return (
    <>
      <FormDiv margin="0 0 10px 0">
        <TextDiv display="flex" direction="row" align="center" justify="center">
          <Input
            value={ startDate }
            placeholder="data inicial (a-m-d)"
            onChange={ changeStartDate }
            width="50%"
          />
          <Input
            value={ endDate }
            placeholder="data final (a-m-d)"
            onChange={ changeEndDate }
            width="50%"
          />
        </TextDiv>

        <TextDiv display="flex" direction="row" align="center" justify="center" margin="10px">
          <Button onClick={ previousCount }> - </Button>
          <Input value={ count } onChange={ changeCount } width="20%" height="0px" align="center" />
          <Button onClick={ nextCount }> + </Button>
        </TextDiv>

        <Button onClick={ getPictures }>Enviar</Button>
      </FormDiv>

      <Room>
        {
          isLoading ?
            notFound ?
              <>Not found</> :
            <>Loading...</> :
            notFound ?
              <>Not found</> :
            data.map(({ url, title }) => <ImageDiv><h3>{ title }</h3><Img src={ url } width="200" height="200" /></ImageDiv>)
        }
      </Room>
    </>
  )
}
