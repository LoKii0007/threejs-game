import './App.css'
import Home from './screens/home'
import { GameProvider } from './hooks/UseGame'

export const GIRL_COLUMNS = 4
export const GIRL_COLUMN_SPACE = 0.6
export const GIRL_ROW_SPACE = 1.5
export const SCROLL_SPEED = 3
export const GROUND_LENGTH = 16

function App() {

  return (
    <>
      <GameProvider>
        <Home />
      </GameProvider>
    </>
  )
}

export default App
