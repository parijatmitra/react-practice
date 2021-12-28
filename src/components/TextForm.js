import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props){
  const handleUpConvert = ()=>{
    // console.log("Upper Case was called");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text here');

  return (
    <>
<div>
  
<div className="mb-3">
  <h1>{props.heading}</h1>

<textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className= "btn btn-primary" onClick = {handleUpConvert}>Convert to Uppercase</button>
</div>
    </>
  )
}