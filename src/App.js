import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const theme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          fontFamily: "Quicksand",
          fontWeight: 600,
        },
      }),
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Contact />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
