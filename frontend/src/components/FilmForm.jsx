import {
  Box,
  Button,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react"
import GenreFilter from "./GenreFilter"

function FilmForm({ film, onChange, onSubmit, submitText = "Сохранить" }) {
  function handleImageUpload(e) {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = function (event) {
      onChange({
        ...film,
        image: event.target.result,
        imageName: file.name, // сохраняем имя файла для отображения
      })
    }
    reader.readAsDataURL(file)
  }

  return (
    <Box
      bg="white"
      p={10}
      border="1px solid #eee"
      borderRadius="lg"
      boxShadow="sm"
      maxW="770px"
      mx="auto"
      py={12}
    >
      <Grid
        templateColumns="170px 1fr"
        rowGap={6}
        columnGap={6}
      >
        {/* Название */}
        <GridItem>
          <FormLabel mt={2}>Название фильма</FormLabel>
        </GridItem>
        <GridItem>
          <Input
            value={film.title}
            onChange={(e) => onChange({ ...film, title: e.target.value })}
          />
        </GridItem>

        {/* Жанр */}
        <GridItem>
          <FormLabel mt={2}>Жанр</FormLabel>
        </GridItem>
        <GridItem>
          <GenreFilter
            selectedGenres={film.genre ? [film.genre] : []}
            onChange={(genres) => onChange({ ...film, genre: genres[0] || "" })}
          />
        </GridItem>

        {/* Длительность */}
        <GridItem>
          <FormLabel mt={2}>Длительность</FormLabel>
        </GridItem>
        <GridItem>
          <Stack
            direction="row"
            align="center"
          >
            <Input
              type="number"
              maxW="100px"
              value={film.duration}
              onChange={(e) =>
                onChange({ ...film, duration: Number(e.target.value) })
              }
            />
            <Text>мин</Text>
          </Stack>
        </GridItem>

        {/* Описание */}
        <GridItem>
          <FormLabel mt={2}>Описание</FormLabel>
        </GridItem>
        <GridItem>
          <Textarea
            value={film.description}
            onChange={(e) => onChange({ ...film, description: e.target.value })}
            resize="none"
            rows={6}
          />
        </GridItem>

        {/* Фото: кнопка + имя файла */}
        <GridItem>
          <FormLabel mt={2}>Фото</FormLabel>
        </GridItem>
        <GridItem>
          <Stack spacing={3}>
            <Stack
              direction="row"
              align="center"
              spacing={4}
            >
              <Button
                as="label"
                htmlFor="file-upload"
                bg="gray.100"
                borderRadius="md"
                fontWeight="500"
                fontSize="14px"
                px={4}
                py={2}
                _hover={{ bg: "gray.200" }}
                cursor="pointer"
              >
                Выбрать файл
              </Button>
              <Text
                fontSize="14px"
                color="gray.700"
              >
                {film.imageName || "Файл не выбран"}
              </Text>
            </Stack>

            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              display="none"
              onChange={handleImageUpload}
            />
          </Stack>
        </GridItem>

        {/* Кнопка отправки */}
        <GridItem colSpan={2}>
          <Box
            textAlign="center"
            mt={4}
          >
            <Button
              bg="#6C74F6"
              color="white"
              rounded="lg"
              px={6}
              _hover={{ bg: "#5a62e0" }}
              onClick={onSubmit}
            >
              {submitText}
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default FilmForm
