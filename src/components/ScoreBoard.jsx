import React from 'react'

const ScoreBoard = ( {children} ) => {
  return (
    <div className='absolute top-14 flex flex-col items-center'>
        <h2 className='font-bold'>Score</h2>
        <div className='h-16 w-16 mt-2 border-2  rounded-full flex items-center justify-center'>
          <h2 className='text-4xl'> {children} </h2>
        </div>
    </div>
  )
}

export default ScoreBoard