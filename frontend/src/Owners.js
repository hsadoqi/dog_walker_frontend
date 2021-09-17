import React, { useState, useEffect } from 'react'
import OwnerLink from './OwnerLink'

const Owners = () => {
    const [owners, setOwners] = useState([])

    const ownersApi = `http://localhost:9292/owners`

    useEffect(() => {
        fetch(ownersApi)
        .then(res => res.json())
        .then(setOwners)
    })

    return (
        <div>
            Owners:
            <ul>
                {owners.map(owner => <OwnerLink owner={owner}/>)}
            </ul>
        </div>
    )
}

export default Owners