import React, { useContext } from 'react'
import { PokemonContext, PokemonDetailsContext } from '../App'

const PokemonCharacterDetail = () => {
    const {setShow} = useContext(PokemonContext);
    const {pokemonDetails:{image,name, height, weight, stats, type}} = useContext(PokemonDetailsContext);
   // console.log("pokemondetailsis", pokemonDetails);
  return (
<aside className={`model-container ${type}`}>
   <section className='sats-container'>
   <div className='column-1'>
        <img src={image} alt='loading...'/>
        <h3>{name}</h3>
      </div>
      <section className={`moretosats-container ${type}-boxtype`}>
      <div className='column-2'>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
      </div>
      <div className='column-3'>
        {stats.map(({stat},i)=>{
            return <p id={i}>{`stat ${i+1}: ${stat.name}`}</p>
        })}
      </div>
      <div className='column-4'>
        {stats.map(({base_stat},i)=>{
            return <p>{`BS-${i+1}: ${base_stat}`}</p>
        })}
      </div>
      </section>
      
   </section>
      
      
    <button onClick={()=>setShow(false)} className={`close-mode ${type}-button`}>x</button>
    </aside>
  )
}

export default PokemonCharacterDetail
