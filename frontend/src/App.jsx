import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Flex, Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Favourites from "./pages/Favourites"
import FilmPage from "./pages/FilmPage"
import FilmAdd from "./pages/FilmAdd"
import FilmEdit from "./pages/FilmEdit"

function App() {
  return (
    <Router>
      <Flex
        direction="column"
        minH="100vh"
      >
        <Navbar />
        <Box
          as="main"
          flex="1"
        >
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/favourites"
              element={<Favourites />}
            />
            <Route
              path="/film/:id"
              element={<FilmPage />}
            />
            <Route
              path="/film/:id/edit"
              element={<FilmEdit />}
            />
            <Route
              path="/add"
              element={<FilmAdd />}
            />
          </Routes>
        </Box>
        <Footer />
      </Flex>
    </Router>
  )
}

export default App
