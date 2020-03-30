import React, { Component } from 'react'

import { MultiColouredHeadingOne, MultiColouredHeadingTwo } from 'multi-coloured-heading'


export default class App extends Component {
  render () {
    return (
      <div>
        <MultiColouredHeadingOne text='Modern React component module' />
        <MultiColouredHeadingTwo text='Modern React component module' />
      </div>
    )
  }
}
