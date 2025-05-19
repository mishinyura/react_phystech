import React from "react"
import { HStack, Radio, RadioGroup, Text, Icon } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"

const GENRES = [
  { label: "Боевик", value: "Боевик", color: "#ea580b" },
  { label: "Триллер", value: "Триллер", color: "#17a34a" },
  { label: "Комедия", value: "Комедия", color: "#2463eb" },
  { label: "Драма", value: "Драма", color: "#18181b" },
]

function GenreRadioBox({ selected, onChange }) {
  return (
    <RadioGroup
      value={selected}
      onChange={onChange}
    >
      <HStack spacing={6}>
        {GENRES.map((genre) => (
          <Radio
            key={genre.value}
            value={genre.value}
            iconColor="white"
            icon={<CheckIcon />}
            display="flex"
            alignItems="center"
            gap={2}
            sx={{
              ".chakra-radio__control": {
                w: "6",
                h: "6",
                borderRadius: "full",
                borderColor: genre.color,
                borderWidth: "2px",
                bg: selected === genre.value ? genre.color : "transparent",
              },
              ".chakra-radio__icon": {
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
          </Radio>
        ))}
      </HStack>
    </RadioGroup>
  )
}

export default GenreRadioBox
