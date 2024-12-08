import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Image } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import SingleRecipe from "./Pages/SingleRecipe";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function App() {
  const [count, setCount] = useState(0);

  const [login, setlogin] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />

        <Route path="/auth">
          <Route path="signin" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
