import React from 'react'
import './App.css'
import { Todolist } from './Todolist'

function App() {
    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to buy"
    const todolistTitle_3 = "What to read"

    return (
        <div className="App">
            <Todolist title= {todolistTitle_1}/>
            <Todolist title= {todolistTitle_2}/>
            <Todolist title= {todolistTitle_3}/>
        </div>
    )
}

export default App