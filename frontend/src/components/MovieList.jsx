import { SimpleGrid } from "@chakra-ui/react"
import MovieCard from "./MovieCard"

const MovieList = ({ movies, onToggleFavourite }) => (
  <SimpleGrid
    columns={[1, 2, 3]}
    spacing={8}
    mt={6}
  >
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        {...movie}
        onToggleFavourite={() => onToggleFavourite(movie.id)}
      />
    ))}
  </SimpleGrid>
)

export default MovieList
