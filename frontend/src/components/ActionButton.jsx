// components/ActionButton.jsx
import { Button } from "@chakra-ui/react"

function ActionButton({ children, onClick, ...props }) {
  return (
    <Button
      bg="white"
      color="blue.600"
      border="1px solid"
      borderColor="blue.100"
      _hover={{ bg: "#F0F3FF" }}
      onClick={onClick}
      {...props} // для size, icon, isDisabled и т.д.
    >
      {children}
    </Button>
  )
}

export default ActionButton
