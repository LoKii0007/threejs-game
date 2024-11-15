import './App.css'
import Home from './screens/home'
import { GameProvider } from './hooks/UseGame'
import Test from './screens/Test'
import { VRButton } from 'three/examples/jsm/Addons.js'
import { useEffect } from 'react'

export const GIRL_COLUMNS = 4
export const GIRL_COLUMN_SPACE = 0.6
export const GIRL_ROW_SPACE = 1.5
export const SCROLL_SPEED = 3
export const GROUND_LENGTH = 16
export const BOT_SPEED = 0.001


function App() {

  useEffect(() => {
    const vrButton = VRButton.createButton();
    document.body.appendChild(vrButton);
    
    return () => {
      document.body.removeChild(vrButton);
    };
  }, [])

  return (
    <>
      {/* <GameProvider>
        <Home />
      </GameProvider> */}
      <Test/>
    </>
  )
}

export default App
