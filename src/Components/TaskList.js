import React, { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'


const TaskList = () => {


    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState(null)


    // ----------- Local Storage -------------//
    // useEffect(() => {
    //     const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    //     if (storedTasks) {
    //         setTasks(storedTasks);
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }, [tasks]);




    // ------------------ Adding Item --------------- //

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }])
        console.log(tasks)
    }

    // ------------------Edit Item --------------- //
    const edditting = (updatedTask) => {
        console.log('updatedTask' + updatedTask)
        setTasks(tasks.map((task) => { return task.id === updatedTask.id ? updatedTask : task }))
        setEditTask(null)
    }

    // -----------   -------------//

    const startEditTask = (task) => {
        setEditTask(task)
    }
    return (
        <>

            <div>
                <TaskForm addTask={addTask} edditting={edditting} editTask={editTask} />
                {
                    tasks.map((task) =>
                        <TaskItem
                            key={task.id}
                            task={task}
                            startEditTask={startEditTask}

                        />)
                }
            </div>
        </>
    )
}
export default TaskList
