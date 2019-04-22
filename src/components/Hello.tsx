import * as React from 'react'
import Game from '../lib/game'

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!{ }</h1>