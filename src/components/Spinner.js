import React from 'react'
import loading from './images/loading.gif'
const Spinner =()=> {
    return (
      <div className="text-center my-3">
        <p style={{fontSize:'3rem'}}>Loading</p>
        <img src={loading} alt="loading"/>
        
      </div>
    )
}
export default Spinner
