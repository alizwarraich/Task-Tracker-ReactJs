import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

const TaskDetails = () => {
    const [task, setTask] = useState(true)
    const [loading, setLoading] = useState({})
    const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = () => {
            const res = fetch(`http://localhost:3000/tasks/${params.id}`)
            const data = res.json()

            if (res.status === 404) {
                navigate('/')
            }

            setTask(data)
            setLoading(false)
        }
        fetchTask()
    })

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div >
    )
}
export default TaskDetails
