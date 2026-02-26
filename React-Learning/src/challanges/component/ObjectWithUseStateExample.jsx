import { useState } from "react";

const ObjectWithUseState = () => {
    const [myMovies, setMyMovies] = useState({
        movieName: "Rangasthalam",
        rating: 8.5
    });
 function handleRatingChange(){
    setMyMovies((prev)=>({...prev,rating:5}));
 }
    return <>
        <h1>  My movies </h1>
        <h2>{myMovies.movieName} - {myMovies.rating}</h2>
        <button onClick={handleRatingChange}>Change Rating</button>
       
    </>

};

export default ObjectWithUseState;
