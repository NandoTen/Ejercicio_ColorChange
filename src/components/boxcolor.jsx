import React from 'react'
import { useState } from 'react'
import '../style/style.scss'

const initColor={
backgroundColor:'black'
}
let intervalID

let textComponent = 'Change Color Component'

const BoxcolorChange = () => {

    const [color,setColor] = useState(initColor)
    const [text, setText] = useState('Change Color Component')
    
    let countClick = 0
    
    
    const enterChangeColor = ()=>{
        intervalID = setInterval(changeColor, 1000);
    }

    const changeColor = ()=> {
        let red = Math.floor(Math.random()*255)
        let green = Math.floor(Math.random()*255)
        let blue = Math.floor(Math.random()*255)
        let newColor={
            backgroundColor:`rgb(${red},${green},${blue})`
            }
        setText('Enter Component')
        setColor(newColor)

    }

    const stopChangeColor = ()=>{
        clearInterval(intervalID);
        intervalID = null;
        setText('Leave Component')
    }

    const clickOnComponent= ()=>{
        countClick +=1
        if(countClick ===2){
            setText('Double Click Component')
            clearInterval(intervalID);
            intervalID = null;
            countClick=0
        }      
    }

    
  return (
    <div className='container'>
      <div style={color} className='box'
       onMouseEnter={enterChangeColor} onMouseLeave={stopChangeColor} onClick={clickOnComponent}></div>
       <h2>{text}</h2>
    </div>
  )
}

export default BoxcolorChange
