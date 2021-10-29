import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import DogForm from './DogForm'

const OwnerForm = ({ owner }) => {
    const [name, setName] = useState("")

    const history = useHistory()

    useEffect(() => {
        setName(owner.name)
    }, [])

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/owners/${owner.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({ 
                name
            })
        }).then(res => res.json())
        .then(owner => setName(owner.name))
    }

    return (
        <div>
            <h1>Edit Owner</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br/>
                <input name="name" value={name} onChange={handleChange}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default OwnerForm