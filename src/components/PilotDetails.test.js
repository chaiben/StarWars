import {screen, render} from '@testing-library/react'
import PilotDetails from './PilotDetails'

const styleMock = {
  backgroundImage: "url(https://starwars-visualguide.com/assets/img/characters/14.jpg), url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg)"
}

const pilotMock = {
  name: "Han Solo",
  height: "180",
  mass: "80",
  hair_color: "brown",
  skin_color: "fair",
  eye_color: "brown",
  birth_year: "29BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/22/",
  films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/"
  ],
  species: [],
  vehicles: [],
  starships: [
      "https://swapi.dev/api/starships/10/",
      "https://swapi.dev/api/starships/22/"
  ],
  created: "2014-12-10T16:49:14.582000Z",
  edited: "2014-12-20T21:17:50.334000Z",
  url: "https://swapi.dev/api/people/14/"
}

beforeEach(()=>
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<PilotDetails style={styleMock} pilot={pilotMock} />)
)

describe('<PilotDetails />', () => {

  it('Display the Star Wars Logo', () => {
    expect(screen.getByAltText("logo")).toHaveAttribute(
      "src", "sw_logo2.png"
    )
  })

  it('Render Pilot info', () => {
    expect(screen.getByText(/Name/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Han Solo/i)).toHaveLength(2)
  })

  it('Render Pilot image', () => {
    // eslint-disable-next-line testing-library/no-node-access
    const imgPilotEl = document.querySelector('.element-img')
    expect(imgPilotEl).toHaveStyle(styleMock)
  })
})