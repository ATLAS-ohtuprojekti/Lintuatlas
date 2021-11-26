import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Map from '../components/Map'

let component

beforeEach(() => {
  component = render(<Map speciesId={'MX.25836'}/>)
})

test('Map component has correct content', () => {
  const img = component.container.querySelectorAll('img')[0]
  expect(img).toHaveAttribute('src', 'https://atlas-staging.rahtiapp.fi/api/grid/map/data?id=25836')
})

test('Map renders its children', () => {
  expect(component.container.querySelector('.Map')).not.toBeNull()
})
