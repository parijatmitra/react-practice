import React from "react";
import "./style.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'


export default function App() {
  return (
    <>
  <Navbar title = "TextUtils" aboutText = "About TextUtils"/>
  <div className = "container">
  <TextForm/>
  </div>
  
    </>

  );
}
