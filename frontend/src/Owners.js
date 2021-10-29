import React, { useState, useEffect } from 'react'
import OwnerLink from './OwnerLink'

const Owners = () => {
    const [owners, setOwners] = useState([])

    const ownersApi = `http://localhost:3000/owners`

    useEffect(() => {
        fetch(ownersApi)
        .then(res => res.json())
        .then(setOwners)
    },[ownersApi])

    return (
        <div>
            Owners:
            <ul>
                {owners.map(owner => <OwnerLink key={owner.id} owner={owner}/>)}
            </ul>
        </div>
    )
}

export default Owners