import React from 'react'
import { Link } from 'react-router-dom'
import Owner from './Owner'

const OwnerLink = ({ owner }) => {
    return (
        <Link to={`/owners/${owner.id}`}>
            <h3><li>{owner.name}</li></h3>
        </Link>
    )
}

export default OwnerLink