import { Container, Heading, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFilmById, updateFilm } from "../utils/localDb"
import FilmForm from "../components/FilmForm"
import { Helmet } from "react-helmet"

function FilmEdit() {
  const { id } = useParams()
  const toast = useToast()
  const [film, setFilm] = useState(null)

  useEffect(() => {
    const existing = getFilmById(Number(id))
    if (existing) setFilm(existing)
  }, [id])

  function handleUpdate() {
    const { title, genre, duration, description } = film
    if (!title || !genre || !duration || !description) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    updateFilm(film)
    toast({
      title: "Фильм обновлён",
      status: "success",
      duration: 2000,
      isClosable: true,
    })
  }

  if (!film) {
    return (
      <>
        <Helmet>
          <title>Редактировать фильм | Фильмограф</title>
        </Helmet>
        <Container
          maxW="6xl"
          py={12}
        >
          <Heading size="md">Фильм не найден</Heading>
        </Container>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Редактировать фильм | Фильмограф</title>
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
          Редактировать фильм
        </Heading>
        <FilmForm
          film={film}
          onChange={setFilm}
          onSubmit={handleUpdate}
          submitText="Сохранить изменения"
        />
      </Container>
    </>
  )
}

export default FilmEdit
