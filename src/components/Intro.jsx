import React from 'react'
import { useGame } from '../hooks/UseGame'

function Intro() {

    const { dispatch, status } = useGame()

    function handleJump(){
        dispatch({type : 'jump'})
    }

    function handleLeft(){
        dispatch({type : 'dodgeLeft'})
    }

    function handleRight(){
        dispatch({type : 'dodgeRight'})
    }

    function handleStop(){
        dispatch({type : 'end'})
    }

    return (
        <>
            <div className="intro h-full w-full flex flex-col gap-4 justify-center items-center absolute top-0 left-0 text-white ">
                {status !== 'playing' &&
                    < >
                        <h1> <b>SAVE</b> SANTA FROM EVIL SNOWMAN</h1>
                        <h4> <b>type</b> type a snowman name to killl it</h4>
                        <h4> <b>Like</b> to kill one instantly</h4>
                        <h4> <b>gift</b> to drop a magical bomb</h4>
                        <button onClick={() => (dispatch({ type: 'start' }))} className='px-5 py-2 bg-green-400 font-semibold rounded-md shadow-md ' >
                            start
                        </button>
                    </>
                }
                {
                    status === 'playing' &&
                    <>
                      <div className="controls w-full h-full flex items-end justify-center text-black m-12 gap-8 ">
                        <button onClick={handleLeft} className=' p-2 bg-blue-300 text-white rounded-[50%] flex justify-center items-center ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                        </button>

                        <button onClick={handleJump} className=' p-2 bg-blue-300 text-white rounded-[50%] flex justify-center items-center ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                        </button>

                        <button onClick={handleRight} className=' p-2 bg-blue-300 text-white rounded-[50%] flex justify-center items-center ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </button>

                        <button onClick={handleStop} className='p-2' >stop</button>
                      </div>
                    </>
                }
            </div>
        </>
    )
}

export default Intro