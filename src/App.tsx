import React, {useState} from 'react';
import './App.css';
import {Component1} from "./components/Component1";



function App() {
    const [allGreen, setallGreen] = useState(false)

    const handleFinalCallback = (title: string) => {
        setallGreen(true)
        console.log(title)
    }

    return (
        <div className="App">
    <h1>CallBack Hell</h1>
    <div className="container">
        <Component1 callback={handleFinalCallback}/>
    </div>
            {allGreen && <p>{title}</p>}
</div>
    );
}

export default App;
