import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, form, showForm }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' &&
                <Button text={form ? "Close" : "Add"} color={form ? 'red' : 'green'} onClick={() => showForm(!form)} />
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
