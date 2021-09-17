import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const Owner = (props) => {
    const [owner, setOwner] = useState({
        dogs: []
    })
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:9292/owners/${props.match.params.id}`)
        .then(res => res.json())
        .then(owner => {
            if(owner){
                setOwner(owner)
            } else {
                history.push('/owners')
            }

        })
    }, [props.match.params.id])

    return (
        <div>
            {owner.name}
            <ul>
                {owner.dogs.map(dog => <li>{dog.name} - {dog.breed}</li>)}
            </ul>
        </div>
    )
}

export default Owner