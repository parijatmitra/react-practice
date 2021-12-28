import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props){
  const [text, setText] = useState('Enter Text here');
  return (
    <>
<div>
  
<div className="mb-3">
  <h1>{props.heading}</h1>

<textarea className="form-control" value= {text} id="myBox" rows="8"></textarea>
</div>
<button className= "btn btn-primary">Convert to Uppercase</button>
</div>
    </>
  )
}