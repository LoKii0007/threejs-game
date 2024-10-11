import { createContext, useContext, useReducer, useState } from "react"

export const GameContext = createContext()

function GameReducer(state , action){
    return state
}

const NB_SNOWMEN = 10

function generateRandomSnowman(){
    const name = [ 'Frosty', 'Elf', 'Grinch', 'Scrooge', 'Dasher', 'Comet', 'Blitzen', 'Tinsel', 'Holly', 'Noel']
    return name[ Math.floor(Math.random() * name.length) ]
}

export const GameProvider = ({ children }) => {

    const initialState = {
        status : 'start', // start , playing , end
        timer : 0,
        snowmen : [
            ...Array(NB_SNOWMEN).fill().map((_, i)=>({
                name : generateRandomSnowman()
            }))
        ]
    }

    const [gameState, dispatch] = useReducer(GameReducer, initialState)
    const { status, timer, snowmen } = gameState

    return (
        <GameContext.Provider value={{ snowmen, status, timer, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => {
    const context = useContext(GameContext)
    if(!context) throw new Error('useGame must be used within a GameProvider')
    return context
}


