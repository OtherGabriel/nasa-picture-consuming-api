import axios from "axios"

export const pictures = () => {
  async function getPictures () {
    let response
    response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

    return response.data
  }

  return getPictures()
}
