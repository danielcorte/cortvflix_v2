import './Card.css'

export function Card({movie}) {

    return (

        <div className="container_card">
            <h3>{movie.title}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <p>{movie.overview}</p>
        </div>
    
    )
}