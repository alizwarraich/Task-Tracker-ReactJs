import React from "react"
import Task from "./Task"
const Tasks = ({ tasks, deleteTask, triggerFlag }) => {
    return (
        <div>
            {tasks.map((task) =>
            (
                <Task key={task.id} task={task} deleteTask={deleteTask} triggerFlag={triggerFlag} />
            )
            )}
        </div>
    )
}

export default Tasks
