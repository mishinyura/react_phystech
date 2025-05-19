import { useEffect, useState } from "react"
import { Container, Heading, Flex, Text } from "@chakra-ui/react"
import GenreFilter from "../components/GenreFilter"
import MovieList from "../components/MovieList"
import { getAllFilms, toggleFavourite } from "../utils/localDb"
import { Helmet } from "react-helmet"

function Home() {
  const [movies, setMovies] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([
    "Боевик",
    "Триллер",
    "Комедия",
    "Драма",
  ])

  useEffect(function () {
    setMovies(getAllFilms())
  }, [])

  function handleToggleFavourite(id) {
    const updated = toggleFavourite(id)
    setMovies(updated)
  }

  function handleGenreChange(genres) {
    setSelectedGenres(genres)
  }

  const filteredMovies = movies.filter(function (movie) {
    return selectedGenres.includes(movie.genre)
  })

  return (
    <>
      <Helmet>
        <title>Каталог фильмов | Фильмограф</title>
      </Helmet>
      <Container
        maxW="6xl"
        py={8}
      >
        <Flex
          justify="space-between"
          align="center"
          mb={6}
          wrap="wrap"
          gap={4}
        >
          <Heading
            as="h1"
            size="xl"
          >
            Фильмы
          </Heading>
          <GenreFilter
            selectedGenres={selectedGenres}
            onChange={handleGenreChange}
          />
        </Flex>

        {filteredMovies.length > 0 ? (
          <MovieList
            movies={filteredMovies}
            onToggleFavourite={handleToggleFavourite}
          />
        ) : (
          <Text
            fontSize="lg"
            color="gray.500"
            mt={10}
          >
            Нет фильмов для выбранных жанров.
          </Text>
        )}
      </Container>
    </>
  )
}

export default Home
