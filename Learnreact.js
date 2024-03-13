import React from 'react'
import Staying from './Staying'

const Learnreact=(props)=>{
    return(
        <>
        <h2>Learn React</h2>
        <p>People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.</p>
       <ul>
        <li>{props.learn}</li>
        <li>{props.second}</li>
       </ul>
       <Staying end="You can also follow the reactjs account"/>
        </>
    )
}
export default Learnreact;