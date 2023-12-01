import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function App() {
  const [state, setState] = useState({
    advice: "",
  });

  useEffect(() => {
    fetchAdvice();
  }, []);
  const fetchAdvice = async () => {
    console.log("hi");

    await axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(response);
        setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { advice } = state;
  return (
    <div className="app">
      <Card advice={advice} fetchAdvice={fetchAdvice} />
    </div>
  );
}

export default App;
