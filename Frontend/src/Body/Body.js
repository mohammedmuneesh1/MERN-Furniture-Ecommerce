import React from 'react'
import TextCrousel from './TextCrousel'
import './Body.css'
import IntroImg from './IntroImg'
import Items from './Items'


export default function Body() {
  return (
    <>
    <div className='body-main'>
        <TextCrousel/>
        <IntroImg/>
        <Items/>
        </div>
    </>
  )
}
