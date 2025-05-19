// components/MovieMeta.jsx
import { Flex } from "@chakra-ui/react"
import GenreBadge from "./GenreBadge"
import ClockIconWithText from "./ClockIconWithText"

function MovieMeta({ genre, duration }) {
  return (
    <Flex
      align="center"
      gap={4}
      mb={6}
    >
      <GenreBadge genre={genre} />
      <ClockIconWithText minutes={duration} />
    </Flex>
  )
}

export default MovieMeta
