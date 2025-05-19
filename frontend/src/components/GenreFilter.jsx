import React from "react"
import { Checkbox, CheckboxGroup, HStack, Text } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"

const GENRES = [
  { label: "Боевик", value: "Боевик", color: "#ea580b" },
  { label: "Триллер", value: "Триллер", color: "#17a34a" },
  { label: "Комедия", value: "Комедия", color: "#2463eb" },
  { label: "Драма", value: "Драма", color: "#18181b" },
]

function GenreFilter({ selectedGenres = [], onChange }) {
  return (
    <CheckboxGroup
      value={selectedGenres}
      onChange={onChange}
    >
      <HStack spacing={6}>
        {GENRES.map((genre) => (
          <Checkbox
            key={genre.value}
            value={genre.value}
            iconColor="white"
            icon={<CheckIcon />}
            colorScheme=""
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{}} // убираем hover эффект Chakra
            sx={{
              ".chakra-checkbox__control": {
                w: "6",
                h: "6",
                borderRadius: "full",
                borderColor: genre.color,
                borderWidth: "2px",
                bg: selectedGenres.includes(genre.value)
                  ? genre.color
                  : "transparent",
                transition: "all 0.2s",
                _hover: {
                  boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)", // тень при наведении
                },
              },
              ".chakra-checkbox__icon": {
                color: "white",
                fontSize: "10px",
              },
            }}
          >
            <Text
              fontSize="16px"
              fontWeight="500"
            >
              {genre.label}
            </Text>
          </Checkbox>
        ))}
      </HStack>
    </CheckboxGroup>
  )
}

export default GenreFilter
