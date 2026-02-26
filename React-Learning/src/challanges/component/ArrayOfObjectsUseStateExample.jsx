import { useState } from "react";

function ArrayOfObjectsUseStateExample() {
    const [myMovies, setMyMovies] = useState([{ movieName: "Rangasthalam", rating: 10 }, { movieName: "OG", rating: 9 }]);
    const [isAdd, setIsAdd] = useState(false);
    const [newMovie, setMovie] = useState({ movieName: "", rating: 0 });
    function handleAddMovie() {
        setMyMovies((prev) => [...prev, newMovie]);
    }
    return <>
        {
            myMovies.map((m) => <h1 key={Math.random()}>{m.movieName}-{m.rating}</h1>)
        }
        <button onClick={() => setIsAdd(!isAdd)}>Add Movie</button>
        {
            isAdd && <div>
                <input type="text" style={{ margin: "3px" }} value={newMovie.movieName} onChange={(e) => setMovie((prev) => ({ ...prev, movieName: e.target.value }))} />
                <input type="text" style={{ margin: "3px" }} value={newMovie.rating} onChange={(e) => setMovie((prev) => ({ ...prev, rating: e.target.value }))} />
                <button onClick={
                    handleAddMovie
                } style={{ margin: "3px" }}>Confirm</button>
            </div>
        }
    </>

}
export default ArrayOfObjectsUseStateExample;
