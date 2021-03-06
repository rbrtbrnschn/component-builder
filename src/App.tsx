import React from 'react'
import './App.css'
import { MyTypography , OtherTypography} from './my-typography'
import {MyButton} from "./my-button";

/**
 * That'd be cool.
 */
interface IConfig {
  /**
   * my string description. More than necessary to be honest. Since it gets the type and the name.
    Does **bold** work?
   */
  string: string
  numbe?: number
  array?: any[]
  any?: any
  undefined: undefined
}

/**
 * Basic description
 * @param config {IConfig} my config
 */
function tbd(config: IConfig) {
  return config
}
//tbd({string: "", undefined})

function App() {
  return (
    <div className='App'>
      <MyTypography label='hi' type='h1' />
      <MyTypography type='p'>
        <span>abc</span>
      </MyTypography>
      <MyTypography type='h1'>
        <MyTypography label='a' type='span' />
        <MyTypography label='b' type='span' />
        <MyTypography label='c' type='span' />
      </MyTypography>
      <MyTypography label='ab' type='div'></MyTypography>
      <MyTypography
        className='myotherclassname'
        type='andSoOn'
        label='whatever'
      />
        <OtherTypography type='Hi' primary label="hi"/>
      <OtherTypography type='Hi' primary={false}><h1>YEAH</h1></OtherTypography>
      <MyButton type='cool-button' label="foo">Foo</MyButton>

    </div>
  )
}

export default App
