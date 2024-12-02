import React from 'react'
import {TaskType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist (props:TodolistPropsType) {

    const tasksList: Array<JSX.Element> = props.tasks.map(t => {
        return (
            <li>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {tasksList}
            </ul>

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}