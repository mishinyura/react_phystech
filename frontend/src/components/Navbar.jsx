import { Box, Flex, Link as ChakraLink, Container } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { path: "/", label: "Все фильмы" },
  { path: "/favourites", label: "Избранное" },
  { path: "/add", label: "Добавить фильм" },
]

function Navbar() {
  const location = useLocation()

  return (
    <Box
      bg="white"
      px={6}
      py={4}
      boxShadow="sm"
    >
      <Container maxW="6xl">
        <Flex
          align="center"
          gap={8}
        >
          {navItems.map(({ path, label }) => (
            <ChakraLink
              as={Link}
              to={path}
              key={path}
              fontWeight="500"
              fontSize="16px"
              color={location.pathname === path ? "blue.600" : "black"}
              _hover={{ textDecoration: "none", color: "blue.400" }}
            >
              {label}
            </ChakraLink>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
