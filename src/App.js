//import logo from './logo.svg';
import {createContext,  useEffect,  useState} from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import PokemonCharacterDetail from './components/PokemonCharacterDetail';

export const PokemonContext = createContext();
export const PokemonDetailsContext = createContext();

function App() {
 const[show, setShow] = useState(false);
 const[pokemonDetails, setPokemonDetails] = useState({})
 useEffect(()=>{
      if(show){
        document.body.style.overflow = 'hidden';
      }else{
        document.body.style.overflow = 'unset';
      }
 },[show])
  return (
    <main>
  <PokemonContext.Provider value={{setShow}}>
    <PokemonDetailsContext.Provider value={{pokemonDetails, setPokemonDetails}}>
    <MainContainer/>
    {show && <div className='modal-wrapper'><PokemonCharacterDetail/></div>}
    </PokemonDetailsContext.Provider>
    
    </PokemonContext.Provider>   

       
    </main>
  );
}

export default App;
