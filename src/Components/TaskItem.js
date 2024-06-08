import React from 'react'

export default function TaskItem({ task, startEditTask }) {


    return (
        <>
            <div>
                <h1> {task.name}</h1>
                <p>{task.description}</p>
                <button onClick={() => startEditTask(task)}>edit</button>
            </div>
        </>
    )
}
