import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props){
  const handleUpConvert = ()=>{
    // console.log("Upper Case was called");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowConvert = ()=>{
    // console.log("Upper Case was called");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const clearText = ()=>{
    let newText = "";
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  return (
    <>
<div className = "container">
<h1>{props.heading}</h1>
<div className="mb-3">
  

<textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className= "btn btn-primary mx-2 my-2" onClick = {handleUpConvert}>Convert to Uppercase</button>
<button className= "btn btn-primary mx-2 my-2" onClick = {handleLowConvert}>Convert to Lowercase</button>
<button className= "btn btn-primary mx-2 my-2" onClick = {clearText}>Clear Text</button>
</div>

<div className = "container my-3">
  <h2> Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minutes to read</p>
  <h3>Preview</h3>
  <p>{text}</p>
  </div>
    </>
  )
}