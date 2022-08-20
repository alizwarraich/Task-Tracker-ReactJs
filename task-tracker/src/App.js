import React from 'react'
import Header from "./components/Header";
import Footer from './components/Footer';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';

function App() {
  const [form, showForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: 'Feb 2nd at 12:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: 'Mar 3rd at 4:30 pm',
      reminder: true,
    },
  ])

  const generateID = () => {
    var j = 1
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === j) {
        j = j + 1
        i = 0
      }
    }
    console.log(j)
    return j
  }

  const addTask = (task) => {
    const id = generateID()
    const obj = { ...task, id }
    setTasks([...tasks, obj])
    showForm(!form)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  const triggerFlag = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  return (
    <div className="container">
      <Header form={form} showForm={showForm} />
      {form &&
        <AddTask onAdd={addTask} />
      }
      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} deleteTask={deleteTask} triggerFlag={triggerFlag} />
        ) : (
          <h3>No task found</h3>
        )
      }
      <Footer />
    </div>
  );
}

export default App;
