// create your App component here
import React, { useState, useEffect } from "react"

function App() {

    const [dogPicture, setDogPicture] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogPicture(data.message)
                setIsLoaded(true)
            });
    }, []);

    if (!isLoaded) return <p>Loading...</p>

    return (
        <img alt="A Random Dog" src={dogPicture}></img>
    )
}

export default App