import { Container, Heading, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { addFilm } from "../utils/localDb"
import FilmForm from "../components/FilmForm"
import { Helmet } from "react-helmet"

function FilmAdd() {
  const toast = useToast()
  const [film, setFilm] = useState({
    title: "",
    genre: "",
    duration: "",
    description: "",
  })

  function handleAddFilm() {
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

    addFilm(film)
    toast({
      title: "Фильм добавлен",
      status: "success",
      duration: 2000,
      isClosable: true,
    })

    setFilm({ title: "", genre: "", duration: "", description: "" })
  }

  return (
    <>
      <Helmet>
        <title>Добавить фильм | Фильмограф</title>
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
          Добавить фильм
        </Heading>
        <FilmForm
          film={film}
          onChange={setFilm}
          onSubmit={handleAddFilm}
          submitText="Добавить фильм"
        />
      </Container>
    </>
  )
}

export default FilmAdd
