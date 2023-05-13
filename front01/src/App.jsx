import "./App.css";
import { Box } from './app.style';

import axios from 'axios';
import { useEffect, useState } from "react";
export function App() {

  const [person, setPerson] = useState({

    name: {
      first: "???"
    }

  })
  useEffect(() => { handleGet }, [])

  async function handleGet() {

    const data = await axios.get("https://randomuser.me/api/?nat=BR")
    // console.log(data)

    setPerson(data.data.results[0])

    // console.log(data.data.results[0].name.first)
    console.log(person)
  }

  const txt = "Hello World";

  return (
    <Box>
      <button onClick={handleGet}>Request</button>
      {/* {data.data.results[0].name.first} */}
      <p>nome:</p>
      <p>{person.name.first} </p>
      {/* <p>{txt}</p> */}


    </Box>
  );
}
