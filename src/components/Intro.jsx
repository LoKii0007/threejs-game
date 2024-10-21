import React from 'react'
import { useGame } from '../hooks/UseGame'

function Intro() {

    const { dispatch, status } = useGame()

    return (
        <>
            <div className="intro h-full w-full flex flex-col gap-4 justify-center items-center absolute top-0 left-0 text-white ">
                {status === 'start' &&
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
            </div>
        </>
    )
}

export default Intro