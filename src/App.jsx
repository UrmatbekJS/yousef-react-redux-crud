import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/structure/Home";
import Create from "./components/structure/Create";
import Update from "./components/structure/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
