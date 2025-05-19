import { Box, Text } from "@chakra-ui/react"

const genreColors = {
  Боевик: "#e26c2d",
  Триллер: "#49b64e",
  Комедия: "#8775d2",
  Драма: "#958f8f",
}

const GenreBadge = ({ genre }) => {
  const bg = genreColors[genre] || "gray.200"
  const color = genreColors[genre] ? genreColors[genre] : "gray.600"

  return (
    <Box
      px={3}
      py={1}
      bg={`${color}20`}
      borderRadius="full"
      display="inline-flex"
      alignItems="center"
    >
      <Text
        fontSize="14px"
        fontWeight="500"
        color={color}
      >
        {genre}
      </Text>
    </Box>
  )
}

export default GenreBadge
