import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){
  return (
    <>
<div>
  
<div class="mb-3">
  <h1>{props.heading}</h1>
<label for="myBox" class="form-label">{props.heading}</label>
<textarea class="form-control" id="myBox" rows="8"></textarea>
</div>
</div>
    </>
  )
}