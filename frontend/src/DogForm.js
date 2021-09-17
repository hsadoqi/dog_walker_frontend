import React, { useState } from 'react'

const DogForm = ({ handleDog, dog }) => {
    const { name, breed} = dog

    return (
        <div>
            <h1>Create New Dog!</h1>
            <form>
                <label>Name:</label><br/>
                <input name="name" value={name} onChange={handleDog}/>
                <br/>
                <label>Breed:</label><br/>
                <input name="breed" value={breed} onChange={handleDog}/>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default DogForm