import React from 'react'
import '../App.css';
import {useEffect, useState} from 'react'
import PokemonCharacter from './PokemonCharacter';
const MainContainer = () => {
    const[isLoading, setLoading] = useState(false);
    const[pokemonList,setPokemonList] = useState([]);
    const[nextUrl , setnextUrl] = useState('');
    const fetchPokemonData = async(url)=>{
      try{
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPokemonList([...pokemonList, ...data[0].results]);
      setnextUrl(data[0].next);
    }
  catch(err){
    console.log(err);
  }finally{
    setLoading(false);
  }
    }
    const loadMore =()=>{
      fetchPokemonData(nextUrl);
    }
  
    useEffect(()=>{
         fetchPokemonData('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
    },[])
 
  return (
    <div className="App">
     
        <header className="header-container">
          <div className='header-part-1'>
          <h2>Pokemon</h2>
          <h2>Pokemon</h2>
          
          </div>
          <div className='header-part-2'>
          <h2>Kingdom</h2>
          <h2>Kingdom</h2>
          </div>
          
        </header>
        {isLoading?(<div>Loading...</div>):
        (<section className='body-container'>
        <section className='cards-container'>
          {pokemonList && pokemonList.map(({url},i)=>{
            return <PokemonCharacter url={url} key={i}/>
          })}
        </section>
        <button className='load-more' onClick={loadMore}>More Pokemons</button>
       </section>)
}
        
       
    </div>
  );

}

export default MainContainer
