import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "../Card/Card"
import './Lista.css'

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7'
const API_URL = 'https://api.themoviedb.org/3'

export function Lista() {
    const [movies, setMovies] = useState([])

    // Effect (parametros), {execucao de logica/programacao}, [dependencias]
    useEffect(() => {
        // Permite a navegação em protocolo http(s)
        axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&
            language=pt-BR`)

            // O que eu quero fazer se a resposta for OK
            .then(response => {
                console.log(response.data.results)
                setMovies(response.data.results)
            })

            // o que eu quero fazer se a resposta for não OK
            .catch(error => {console.log('Error: ', error)})
            
    }, [])

    return (
        <div className="container_lista">
            <figure style={{display: 'flex', flexWrap: 'wrap'}}>
                {movies.map(movie => (
                    <Card key={movie.id} 
                    movie={movie}
                    /> 
                ))}
            </figure>
        </div>
    )
}