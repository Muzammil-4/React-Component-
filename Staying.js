import React from 'react'

const Staying = (props)=>{
    return(
        <>
        <h2>Staying Informed</h2>
        <p>The React blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted there first.</p>
        <p>{props.end}</p>
        </>
    )
}
export default Staying;