import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
jest.mock('axios')
import axios from 'axios'
import SpeciesContent from '../components/SpeciesContent'

const birds = [
  {
    "speciesFI":"Kaakkuri",
    "speciesEN":"Red-throated Diver",
    "speciesSCI":"Gavia stellata",
    "speciesAbbr":"GAVSTE",
    "speciesGroup_id":1,
    "visibility":1,
    "speciesSV":"Smålom",
    "id":36,
    "species_id":"MX.25836"
  },
  {
    "speciesFI":"Kuikka",
    "speciesEN":"Black-throated Diver",
    "speciesSCI":"Gavia arctica",
    "speciesAbbr":"GAVARC",
    "speciesGroup_id":1,
    "visibility":1,
    "speciesSV":"Storlom",
    "id":37,
    "species_id":"MX.25837"
  },
  {
    "speciesFI":"Amerikanjääkuikka",
    "speciesEN":"Great Northern Diver",
    "speciesSCI":"Gavia immer",
    "speciesAbbr":"GAVIMM",
    "speciesGroup_id":1,
    "visibility":0,
    "speciesSV":"Svartnäbbad islom",
    "id":270,
    "species_id":"MX.25839"
  },
]

const mockSpeciesTable = jest.fn()

jest.mock('../components/SpeciesTable', () => (props) => {
  mockSpeciesTable(props)
  return <mock-SpeciesTable />
})

beforeEach(() => {
  axios.get.mockResolvedValue({
    data: birds,
  })
})

test('SpeciesContent renders its children', () => {
  const component = render(<SpeciesContent />)
  expect(component.container.querySelector('.Species-content')).not.toBeNull()
})

test('SpeciesContent fetches data and passes it to SpeciesTable', async () => {
  await act(async () => {
    render(<SpeciesContent />)
  })
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(mockSpeciesTable).toHaveBeenCalledWith(
    expect.objectContaining({
      speciesList: birds,
    })
  )
})
