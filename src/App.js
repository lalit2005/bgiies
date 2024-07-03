import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
