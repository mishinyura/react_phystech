import { IconButton } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

const FavouriteButton = ({ isFavourite, onClick }) => (
  <IconButton
    aria-label="Добавить в избранное"
    icon={<StarIcon boxSize={5} />}
    color={isFavourite ? "#f9a62b" : "gray.300"}
    variant="ghost"
    onClick={onClick}
    size="sm"
  />
)

export default FavouriteButton
