import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [cart, setCart] = useState("");
  return (
    <>
      <Header cart={cart} />
      <AllRoutes cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
