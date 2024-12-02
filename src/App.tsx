import React from 'react'
import './App.css'
import { Todolist } from './Todolist'

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL
    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to buy"

    const task_1: Array<TaskType> = [
        {id:1, title: "HTML&CSS", isDone: true},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "React", isDone: false},
    ]
    const task_2: TaskType[] = [
        {id:1, title: "Meat", isDone: true},
        {id:2, title: "Beer", isDone: true},
        {id:3, title: "Water", isDone: false},
    ]

    //UI
    return (
        <div className="App">
            <Todolist title= {todolistTitle_1} tasks={task_1}/>
            <Todolist title= {todolistTitle_2} tasks={task_2}/>
        </div>
    )
}

export default App