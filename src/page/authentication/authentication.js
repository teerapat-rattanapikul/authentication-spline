import React from 'react'
import Spline from '@splinetool/react-spline';

const Authentication = () =>{
  return (
    <Spline style={{width: '100%', height: '100vh'}} onKeyDown={(e)=>{
      console.log(e)
    }} scene="https://prod.spline.design/cWqXm1dhF2IaSKfC/scene.splinecode" />
  )
}

export default Authentication