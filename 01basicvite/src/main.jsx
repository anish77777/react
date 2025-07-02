import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'
import { createElement } from 'react'
// when we use If you are using JSX, make sure to name the file with the .jsx or .tsx extension 
// so we cant use youtube.js format 
//vit specific issue
//we ushould use capital letter in component

//example of custom react
// const ReactElementss = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: '_blank'
//   },
//   children: "CLick me to visit google"
// }
//this is not render because this doesnot parsing

//createelement take objects
//first parameter take type, second parameter take attribute
// third parameter text content 
//conversion 
const anotherElement = 
  <a href="https://google.com " target='_blank'>
    Visit google
  </a>

const anotherText ="I am from "
//according to react 
//react method create element syntax predefine
const CreateElement = React.createElement(
  'h1', { href: "https//google.com", target: "_blank" },
  anotherText
)
// anotherText injected like this we cannot write line of codes in this
//because we can write if else or any other code inside object
createRoot(document.getElementById('root')).render(
  // CreateElement
  // anotherElement
  //  these are part of custom react
  // variable inject
  CreateElement
  // <App />

)
