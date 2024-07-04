import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Description from "./components/Description";
import Contact from "./components/Contact";

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
          <Description />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
