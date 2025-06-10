import { useState } from 'react'

import './App.css'
import Welcom from './assets/welcom'

function App() {
  let[level,setLevel]=useState(0);
 let ghange=()=>{setLevel(level=0)};
 let ghange1=()=>{setLevel(level=1)};
 let ghange2=()=>{setLevel(level=2)};
 let ghange3=()=>{setLevel(level=3)};
  return (
    <div>
   <h1>Students Overview</h1>
    
     <label  >Filter by level______</label>
    <select>
      <option onClick={ghange} >All Levels</option>
      <option onClick={ghange1} >Level 1</option>
      <option onClick={ghange2}>Level 2</option>
      <option onClick={ghange3}>Level 3</option>
     </select>
     <hr/> <br/>
     <Welcom m={level}/>
    
    </div>
  )
}

export default App
