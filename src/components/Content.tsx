import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

interface ContentProps {
  selectedGenre: { 
    title: string;
  },
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Rating: string,
    Runtime: string;
  }>;
}

export function Content({ movies, selectedGenre }: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Rating} />
            ))}
          </div>
        </main>
      </div>
  )
}