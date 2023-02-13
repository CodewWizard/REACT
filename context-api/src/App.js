import { createContext } from 'react';
import './App.css';
import A from './A';

const firstName = createContext();


function App() {

  return (
    <>
      <firstName.Provider value={"codewizard"}>
        <A/> 
      </firstName.Provider>
    </>
  );
}

export default App;
export {firstName};