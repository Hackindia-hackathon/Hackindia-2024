import React from 'react'

const Preloader = () => {
  return (
    <div className="techwave__fn_preloader enabled" >
      <svg>
        <circle className="first_circle" cx="50%" cy="50%" r="110"></circle>
        <circle className="second_circle" cx="50%" cy="50%" r="110"></circle>
      </svg>
    </div>
  )
}

export default Preloader