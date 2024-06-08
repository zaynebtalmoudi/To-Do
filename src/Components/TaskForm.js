import React, { useState, useEffect } from 'react'

const TaskForm = ({ addTask, edditing, editTask }) => {

    const [task, setTask] = useState({ name: '', description: '' })

    useEffect(() => {
        if (edditing) {
            setTask(editTask)
        }
    }, [editTask])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => {
            return { ...prevTask, [name]: value }
        })
    }


    const handleSubmit = (e) => {

        e.preventDefault();
        if (!task.name || !task.description) {
            alert('Please fill in all fields.');
            return;
        }
        if (editTask) {
            edditing(task);

        } else {
            addTask(task);

        }
        setTask({ name: '', description: '' });

    };
    return (

        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={task.name} onChange={handleChange} placeholder='Task Name' />
                <textarea name='description' value={task.description} onChange={handleChange} />
                <button type='submit' >  {editTask ? 'Update Task' : 'Add Task'} </button>
            </form>

        </>
    )

}
export default TaskForm;




