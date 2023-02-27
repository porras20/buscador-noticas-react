import { useState, useEffect } from 'react'
import { Formulario } from './components/Formulario';
import { Header } from './components/Header'
import { ListadoNoticias } from "./components/ListadoNoticias";



function App() {
 
  //Definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);
  
  useEffect(() => {
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=b4680670430941a3b3303425abe0d130`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    }
    consultarAPI()
  }, [categoria])
  
  return (
    <>
      <Header titulo="Buscador de noticas" />
      <div className='container white'>
        <Formulario 
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App
