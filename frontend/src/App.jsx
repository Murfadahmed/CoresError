import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>{Jokes.length} jokes are found</h1>
      {Jokes.map((jokes, index) => (
        <div
          key={index}
          style={{
            background: 'rgb(2,0,36)',
            // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(148,154,7,0.44021358543417366) 43%, rgba(121,28,9,1) 58%, rgba(0,212,255,1) 100%)',
            color:'whitesmoke',
            padding: "20px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <h2>{jokes.title}</h2>
          <h4>{jokes.description}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
