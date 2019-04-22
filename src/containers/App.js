import React from 'react'
import { Hello } from '../components/Hello'
import * as Game from '../lib/game'

const App = () => (
  <div className="App">
    <Hello framework="React" compiler="Typescript" />
    <h2>And Phaser!</h2>
  </div>
)

export default App
