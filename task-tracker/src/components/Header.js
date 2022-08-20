import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, form, showForm }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={form ? "Close" : "Add"} color={form ? 'red' : 'green'} onClick={() => showForm(!form)} />
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
