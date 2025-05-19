import React from "react"
import { Box, Image, Text, Flex, Spacer } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import GenreBadge from "./GenreBadge"
import ClockIconWithText from "./ClockIconWithText"
import FavouriteButton from "./FavouriteButton"

function MovieCard(props) {
  const { id, title, genre, duration, image, isFavourite, onToggleFavourite } =
    props

  const navigate = useNavigate()

  function handleCardClick() {
    navigate(`/film/${id}`)
  }

  return (
    <Box
      bg="white"
      borderRadius="12px"
      border="1px solid"
      borderColor="#dee2e6"
      overflow="hidden"
      maxW="350px"
      boxShadow="sm"
      cursor="pointer"
      onClick={handleCardClick} // <--- переход по клику
      _hover={{ boxShadow: "md" }}
    >
      <Image
        src={image}
        alt={title}
        width="100%"
        height="192px"
        objectFit="cover"
      />

      <Box p={4}>
        <Text
          fontSize="20px"
          fontWeight="700"
          color="#152536"
          mb={3}
        >
          {title}
        </Text>

        <Flex align="center">
          <Flex
            gap={4}
            align="center"
          >
            <GenreBadge genre={genre} />
            <ClockIconWithText minutes={duration} />
          </Flex>
          <Spacer />
          <Box
            onClick={(e) => {
              e.stopPropagation() // <--- предотвратить переход при клике на звезду
              onToggleFavourite()
            }}
          >
            <FavouriteButton isFavourite={isFavourite} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default MovieCard
