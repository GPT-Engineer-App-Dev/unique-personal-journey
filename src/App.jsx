import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;