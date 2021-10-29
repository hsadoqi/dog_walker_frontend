import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DogForm from './DogForm'

const OwnerForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [dogName, setDogName] = useState("")
    const [errors, setErrors] = useState(null)

    const history = useHistory()

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        } else if(e.target.name === 'age'){
            setAge(e.target.value)
        } else {
            setDogName(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        fetch(`http://localhost:3000/owners`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                name, 
                age: parseInt(age),
                dog: {
                    name: dogName
                }
            })
        }).then(res => res.json())
        .then(owner => {
            if(owner.errors){
                setErrors(owner.errors)
            } else {
                history.push(`/owners/${owner.id}`)
            }
        })
    }

    return (
        <div>
            <h1>Create New Owner!</h1>
            {errors ? <ul>
                {errors.map(err => {
                    return <li style={{color:"red"}}>{err}</li>
                })}
            </ul> : null}
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br/>
                <input name="name" value={name} onChange={handleChange}/>
                <br/>
                <label>Age:</label><br/>
                <input name="age" value={age} onChange={handleChange}/>
                <br/>
                <label>Dog's Name:</label><br/>
                <input name="dogName" value={dogName} onChange={handleChange}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default OwnerForm