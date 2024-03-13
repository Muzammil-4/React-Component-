import React from 'react'
import TryReact from './Tryreact';


const App= props =>{
    return(
        <>
        <h1>React Documentery</h1>
        <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.
            <ul>
                <li>Try React</li>
                <li>Learn React</li>
                <li>Staying Informed</li>
                <li>Versioned Documentation</li>
                <li>Something Missing?</li>
            </ul>
            </p>
            <TryReact info="And You Can Use As little or as much React as you need"/>

                </>
    )
}
export default App;