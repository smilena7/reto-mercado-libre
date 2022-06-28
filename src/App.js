import React, { Comment, useState } from 'react'
import Header from './Componentes/Header/Header';
import ListCard from '../src/pages/ListCard/ListCard';
import axios from 'axios';

function App(props) {
  const [query, setQuery] = useState({})
  const [text, setText] = useState('')

  const actualizar = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const url = 'http://localhost:3001/api/items'
    const res = await axios.get(`${url}?q=${text}`)
    setQuery(res.data)

  }
 
  console.log(query, 'data')

  return (
    <div>
      <Header 
        actualizar={actualizar}
        text={text}
        handleOnSubmit={handleOnSubmit} 
      />
      <ListCard
        query={query} // 1. Pasamos query que es props renombrada y la data que seria {query}. La prop query es la que pasaremos al componente ListCard
      />
    </div>
  );
}

export default App;
