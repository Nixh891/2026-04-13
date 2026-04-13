import { useState, useEffect } from 'react'

const [favourites, setFavourites]= useState(() => {
    const saved= localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
})

useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));

}, [favourites])

function addFavourite(item){
    setFavourites([...favourites, item])
}

return(
    <div>
        <button onClick={()=> addFavourite("Pizza")}>Add To Favourites</button>

        <ul>
            {favourites.map((item,i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>
   
    </div>
)

export default favourites;