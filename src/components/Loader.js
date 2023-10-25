import React from 'react'
import loading from'./loading.gif';

const Loader = () => {
  return (
    <div className='flex justify-center mx-96 my-48'>
      <img src={loading} alt="loading"/>
    </div>
  )
}

export default Loader
