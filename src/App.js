import React from "react";
import "./style.css";

let name = "Parijat"
export default function App() {
  return (
    <>
    <div>
      <h1>Parijat</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>I am a boy.</p>
    </div>
    <div className = "blank">lovely</div>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contacts</li>
      </nav>
      <div className = "container">
        <h1>hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim, magni esse dignissimos, maiores nemo aliquid placeat repudiandae ab facilis eaque quos. Ut nemo placeat laboriosam temporibus! Autem, ut unde! Maiores animi sequi nulla.</p>
      </div>
    </>

  );
}
