import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SpeciesTable from '../components/SpeciesTable'

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

let component
let mockHandler

beforeEach(() => {
  mockHandler = jest.fn()
  component = render(
    <SpeciesTable speciesList={birds} passSelectedSpecies={mockHandler} />
  )
})

test('SpeciesTable renders all species', () => {
  expect(component.container).toHaveTextContent('Kaakkuri')
  expect(component.container).toHaveTextContent('Kuikka')
  expect(component.container).toHaveTextContent('Amerikanjääkuikka')
})

test('SpeciesTable renders its children', () => {
  expect(component.container.querySelector('.Table')).not.toBeNull()
  expect(component.container.querySelector('.Table-header')).not.toBeNull()
  expect(component.container.querySelector('.Species-table')).not.toBeNull()
})

test('Clicking a species calls event handler with correct MX code', async () => {
  const speciesRow = component.getByText('Kuikka')
  fireEvent.click(speciesRow)

  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler.mock.calls[0][0]).toContain('MX.25837')
})
