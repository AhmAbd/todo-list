import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Task from './Task';

function AddTask() {

    const [tasks, setTasks] = useState([]);
    const [tex, setTex] = useState("");

    function addTask() {
        const newTask = <Task key={tasks.length} taskName={tex}/>;
        setTasks([...tasks, newTask]);
        setTex("");
    }
    return (
    <>
    <div className="flex flex-col justify-center m-4 gap-2">
        <TextField value={tex} onInput={(v) => setTex(v.target.value)} id="addTaskText" label="Enter Task" variant="filled"/>
        <Button onClick={addTask} variant="contained">Add Task</Button>
                {tasks.map((task, index) => (
                    <div key={index}>{task}</div>
                ))}
        </div>
    </>
    )
}


export default AddTask;