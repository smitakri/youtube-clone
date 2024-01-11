import React from 'react'

const Button = ({text,active}) => {
    if(active===true){
       return(
        <li className="active-btn-btnlist" style={{backgroundColor: "black", color: 'white',}}>{text} </li>
       )
    }
  return (
    <li className="active-btn-btnlist">{text} </li>
  )
}

export default Button