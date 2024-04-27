import { useRef, useState } from 'react'
import './App.css'
import WeatherApp from './WeatherApp'
function App() {
  const load = useRef();
  window.onload = ()=>{
    load.current.style.display = "none"
  }
  return (
    <>
    <div className="loading" ref={load} ><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    <div className='big-cont'>
    <WeatherApp/>
    </div>
    </>
  )
}

export default App
