import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DogForm from './DogForm'

const OwnerForm = () => {
    const [name, setName] = useState("")
    const [showDogForm, setShowDogForm] = useState(null)
    const [dog, setDog] = useState({
        name: "", 
        breed: ""
    })

    const history = useHistory()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        let newDog 

        if(dog.name !== '' && dog.breed !== ''){
            newDog = dog
        }
        
        fetch(`http://localhost:9292/owners`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                name, 
                newDog
            })
        }).then(res => res.json())
        .then(owner => {
            history.push(`/owners/${owner.id}`)
        })
    }

    const handleDog = (e) => {
        setDog({
            ...dog,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Create New Owner!</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br/>
                <input name="name" value={name} onChange={handleChange}/>
                <br/>
                {showDogForm ? <DogForm handleDog={handleDog} dog={dog}/> : <button onClick={() => setShowDogForm(true)}>Add New Dog</button>}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default OwnerForm