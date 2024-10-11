import './App.css'
import Home from './screens/home'
import { GameProvider } from './hooks/UseGame'

export const GIRL_COLUMNS = 4
export const GIRL_COLUMN_SPACE = 1
export const GIRL_ROW_SPACE = 2

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
