import { HStack, Text } from "@chakra-ui/react"
import { FaClock } from "react-icons/fa"

const ClockIconWithText = ({ minutes }) => (
  <HStack spacing={2}>
    <FaClock size="14" />
    <Text fontSize="14px">{minutes} мин.</Text>
  </HStack>
)

export default ClockIconWithText
