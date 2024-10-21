import { createContext, useContext, useReducer, useState, useEffect, act } from "react"
import {insertCoin} from 'playroomkit'

export const GameContext = createContext()

function GameReducer(state, action) {
    if( action.type === 'start'){
        return {
            ...state, 
            status : 'playing'
        }
    }
    
    if(action.type === 'like' || action.type === 'attack'){
        const snowman = [...state.snowman]
        for(let i=0; i<snowman.length ; i++){
            if(isSnowmanAttackable(snowman[i]) && (action.type === 'like' || snowman[i].name === action.name.toLowercase() )){
                snowman[i] = {
                    ...snowman[i], 
                    dead : true, 
                    deathTime : new Date(), 
                    killedby : action.player,
                    deathCause : action.type
                }
            }
        }
    }
}

const NB_SNOWMEN = 10

function generateRandomSnowman() {
    const name = ['Frosty', 'Elf', 'Grinch', 'Scrooge', 'Dasher', 'Comet', 'Blitzen', 'Tinsel', 'Holly', 'Noel']
    return name[Math.floor(Math.random() * name.length)]
}

export const GameProvider = ({ children }) => {

    const initialState = {
        status: 'start', // start , playing , end
        timer: 0,
        snowmen: [
            ...Array(NB_SNOWMEN).fill().map((_, i) => ({
                name: generateRandomSnowman()
            }))
        ]
    }

    const [gameState, dispatch] = useReducer(GameReducer, initialState)
    const { status, timer, snowmen } = gameState

    const toktok = async () => {
        await insertCoin({ liveMode: "tiktok" });
        onTikTokLiveEvent((event) => {
            console.log("tiktok live event", event);
            // addCard(event.type, "@" + event.data.username, event.data.userPhotoUrl, event.data.comment)
        });
    }

    useEffect(() => {
        // toktok()
    }, []);

    return (
        <GameContext.Provider value={{ snowmen, status, timer, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => {
    const context = useContext(GameContext)
    if (!context) throw new Error('useGame must be used within a GameProvider')
    return context
}


