import React, { Component } from 'react'
import PropTypes from 'prop-types'

const colours = [
  '#f368e0',
  '#ff9f43',
  '#ee5253',
  '#0abde3',
  '#10ac84',
  '#01a3a4',
  '#2e86de',
  '#341f97'
]

export class MultiColouredHeadingOne extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <h1>
        {text.split('').map((character) => (
          <span style={{ color: colours[Math.floor(Math.random() * colours.length)] }} key={character + Math.random()}>{character}</span>
        ))}
      </h1>
    )
  }
}

export class MultiColouredHeadingTwo extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <h2>
        {text.split('').map((character) => (
          <span style={{ color: colours[Math.floor(Math.random() * colours.length)] }} key={character + Math.random()}>{character}</span>
        ))}
      </h2>
    )
  }
}
