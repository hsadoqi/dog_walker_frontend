import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import EditOwner from './EditOwner'

const Owner = (props) => {
    const [owner, setOwner] = useState({
        dogs: []
    })

    const [editFormOpen, setEditFormOpen] = useState(false)
    const [dogName, setDogName] = useState("")
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:3000/owners/${props.match.params.id}`)
        .then(res => res.json())
        .then(owner => {
            if(owner){
                setOwner(owner)
            } else {
                history.push('/owners')
            }

        })
    }, [props.match.params.id])

    const deleteOwner = () => {
        fetch(`http://localhost:3000/owners/${owner.id}`, {
            method: 'DELETE'
        })
        history.push('/owners')
    }

    const handleDog = (e) => {
        setDogName(e.target.value)
    }

    const addNewDog = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/owners/${owner.id}/dogs`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                name: dogName
            })
        }).then(res => res.json())
        .then(dog => {
            setOwner({
                ...owner, 
                dogs: [...owner.dogs, dog]
            })
        })
    }

    const deleteDog = (id) => {
        fetch(`http://localhost:3000/owners/${owner.id}/dogs/${id}`, {
            method: 'DELETE'
        })

        const newDogs = owner.dogs.filter(dog => dog.id !== id)
        setOwner({
            ...owner, 
            dogs: newDogs
        })
    }

    const editDog = (e, id) => {
        e.preventDefault()
        fetch(`http://localhost:3000/owners/${owner.id}/dogs/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                name: dogName
            })
        }).then(res => res.json())
        .then(dog => {
            const newDogs = owner.dogs.map(currentDog => {
                if(currentDog.id === dog.id){
                    return dog
                }
            })

            setOwner({
                ...owner, 
                dogs: newDogs
            })
        })
    }

    return (
        <div>
            {owner.name}
            <ul>
                {owner.dogs.map(dog => <li>{dog.name}<button onClick={() => deleteDog(dog.id)}>Delete dog</button>
                <form onSubmit={(e) => editDog(e, dog.id)}>
                    <label>Name:</label><br/>
                    <input name="name" value={dogName} onChange={handleDog}/>
                    <br/>
                    <input type="submit"/>
                    <br/>
                </form></li>)}
            </ul>
            <button onClick={() => setEditFormOpen(!editFormOpen)}>Edit</button>
            <button onClick={deleteOwner}>Delete</button>
            {editFormOpen ? <EditOwner owner={owner}/> : null}
            <h1>Create New Dog!</h1>
            <form onSubmit={addNewDog}>
                <label>Name:</label><br/>
                <input name="name" value={dogName} onChange={handleDog}/>
                <br/>
                <input type="submit"/>
                <br/>
            </form>
        </div>
    )
}

export default Owner