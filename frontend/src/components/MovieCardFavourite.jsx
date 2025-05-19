import React from "react"
import { useNavigate } from "react-router-dom"
import { Flex, Text, Box, Image, Icon, Button } from "@chakra-ui/react"
import { FaClock } from "react-icons/fa"

function MovieCardFavourite({ id, title, duration, image, onRemove }) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/film/${id}`)
  }

  return (
    <Flex
      align="center"
      w="60%"
      gap={5}
      py={4}
      px={4}
      borderBottom="1px solid #E2E8F0"
      borderRadius="md"
      _hover={{ bg: "gray.50" }}
      transition="background 0.2s ease-in-out"
    >
      <Image
        src={image}
        alt={title}
        boxSize="90px"
        borderRadius="full"
        objectFit="cover"
        flexShrink={0}
        onClick={handleClick}
        cursor="pointer"
      />

      <Flex
        flex="1"
        align="center"
        justify="space-between"
        minW={0}
        gap={4}
      >
        <Box
          onClick={handleClick}
          cursor="pointer"
        >
          <Text
            fontSize="16px"
            fontWeight="600"
            noOfLines={1}
          >
            {title}
          </Text>
          <Flex
            align="center"
            gap={2}
            fontSize="14px"
            mt={1}
            color="gray.600"
          >
            <Icon
              as={FaClock}
              boxSize={3.5}
            />
            <Text>{duration} мин.</Text>
          </Flex>
        </Box>

        <Button
          variant="ghost"
          size="sm"
          color="gray.500"
          onClick={onRemove}
          _hover={{ textDecoration: "underline" }}
          px={2}
          flexShrink={0}
        >
          Удалить
        </Button>
      </Flex>
    </Flex>
  )
}

export default MovieCardFavourite
