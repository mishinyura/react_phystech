import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Box, Heading, Text, Image, Flex, Container } from "@chakra-ui/react"
import MovieMeta from "../components/MovieMeta"
import FavouriteButton from "../components/FavouriteButton"
import ActionButton from "../components/ActionButton"
import { Helmet } from "react-helmet"

import { getFilmById, toggleFavourite, deleteFilm } from "../utils/localDb"

function FilmPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [film, setFilm] = useState(null)

  useEffect(() => {
    const found = getFilmById(id)
    setFilm(found)
  }, [id])

  function handleToggleFavourite() {
    toggleFavourite(film.id)
    const updated = getFilmById(id)
    setFilm(updated)
  }

  function handleDelete() {
    deleteFilm(film.id)
    navigate("/")
  }

  function handleEdit() {
    navigate(`/film/${film.id}/edit`)
  }

  if (!film) {
    return (
      <>
        <Helmet>
          <title>Фильм | Фильмограф</title>
        </Helmet>
        <Container
          maxW="6xl"
          py={12}
        >
          <Text
            fontSize="lg"
            color="gray.500"
          >
            Фильм не найден.
          </Text>
        </Container>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Фильм | Фильмограф</title>
      </Helmet>
      <Container
        maxW="6xl"
        py={12}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
        >
          <Image
            src={film.image}
            alt={film.title}
            boxSize="480px" // квадратная картинка
            borderRadius="md"
            objectFit="cover"
          />

          <Box flex="1">
            {/* Заголовок + звезда */}
            <Flex
              align="center"
              justify="space-between"
              mb={4}
            >
              <Heading>{film.title}</Heading>
              <FavouriteButton
                isFavourite={film.isFavourite}
                onClick={handleToggleFavourite}
              />
            </Flex>

            {/* Жанр и длительность */}
            <MovieMeta
              genre={film.genre}
              duration={film.duration}
            />

            {/* Описание */}
            <Text
              fontSize="16px"
              lineHeight="1.8"
              color="gray.800"
              mb={10}
            >
              {film.description}
            </Text>

            {/* Кнопки */}
            <Flex
              justify="flex-end"
              gap={3}
            >
              <ActionButton onClick={handleEdit}>Редактировать</ActionButton>

              <ActionButton onClick={handleDelete}>Удалить</ActionButton>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default FilmPage
