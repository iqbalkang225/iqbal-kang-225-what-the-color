import React from 'react'
const Button = ( {onclick, children} ) => {
  return (
    <button 
      className='px-3 py-1 border-2 rounded-full '
      onClick = {onclick}
      > {children} 
    </button>
  )
}

export default Button