import React from 'react'
import { Hello } from '../components/Hello'
import * as Phaser from 'phaser'
import { config } from '../lib/game'

const App = ()=> {
let game = new Phaser.Game(config)

    return (
      <div className="App">
        <Hello framework="React" compiler="Typescript" />
        <div id="phaser-target"> Game Screen </div>
        <h2>And Phaser!</h2>
      </div>
    )
  }


export default App
