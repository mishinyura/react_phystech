import { useEffect, useState } from "react"
import { Container, Heading, Text, Stack } from "@chakra-ui/react"
import MovieCardFavourite from "../components/MovieCardFavourite"
import { getAllFilms, toggleFavourite } from "../utils/localDb"
import { Helmet } from "react-helmet"

function Favourites() {
  const [favourites, setFavourites] = useState([])

  useEffect(function () {
    updateFavourites()
  }, [])

  function updateFavourites() {
    const favs = getAllFilms().filter(function (film) {
      return film.isFavourite
    })
    setFavourites(favs)
  }

  function handleRemove(id) {
    toggleFavourite(id)
    updateFavourites()
  }

  return (
    <>
      <Helmet>
        <title>Избранное | Фильмограф</title>
      </Helmet>
      <Container
        maxW="6xl"
        py={8}
      >
        <Heading
          as="h1"
          size="xl"
          mb={6}
        >
          Избранное
        </Heading>

        {favourites.length > 0 ? (
          <Stack spacing={0}>
            {favourites.map(function (movie) {
              return (
                <MovieCardFavourite
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  duration={movie.duration}
                  image={movie.image}
                  onRemove={function () {
                    handleRemove(movie.id)
                  }}
                />
              )
            })}
          </Stack>
        ) : (
          <Text
            fontSize="lg"
            color="gray.500"
            mt={10}
          >
            Нет избранных фильмов.
          </Text>
        )}
      </Container>
    </>
  )
}

export default Favourites
