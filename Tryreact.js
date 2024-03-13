import React from 'react'
import Learnreact from './Learnreact'


const TryReact=(props)=>{
    return(
        <>
        <h2>Try react</h2>
        <p>React has been designed from the start for gradual adoption,{props.info}. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

</p>
        <Learnreact learn="If you prefer to learn by doing, start with our practical tutorial." second="If you prefer to learn concepts step by step, start with our guide to main concepts."/>
        </>
    )
}
export default TryReact; 