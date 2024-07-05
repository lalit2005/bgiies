import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <Contact />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
