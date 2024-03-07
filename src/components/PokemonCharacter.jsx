import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext, PokemonDetailsContext } from '../App';

const PokemonCharacter = ({url}) => {
  const {setShow} = useContext(PokemonContext);
  const {setPokemonDetails} = useContext(PokemonDetailsContext);
      const[info, setInfo] = useState({})
    const fetchPokemonInfo = async()=>{
        try{
            const response = await fetch(url);
        const data = await response.json();
        setInfo(data[0]);
        console.log(data)
        }catch(err){
            console.log(err);
        }
        
    }
  useEffect(()=>{
      fetchPokemonInfo();
  },[]);

  const knowMore=()=>{
    setShow(true);
    setPokemonDetails(info);
  }
  return (
    <div>
      <section className={`pokemon-card ${info.type}`}>
        <div className='number'>#{info.id}</div>
        <img src={info.image} alt='loading..'/>
        <div className='char-name'>{info?.name?.toUpperCase()}</div>
        <div className='char-type'>Type: {info.type}</div>
        <button className={`know-more ${info.type}-button`} onClick={knowMore}> Know More</button>
      </section>
    </div>
  )
}

export default PokemonCharacter
