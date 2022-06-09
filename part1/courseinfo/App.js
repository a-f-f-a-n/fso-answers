import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const App = () => {

  //1.5 excercise
  const course  =  {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundementals of React",
        excercises: 10
      },
      {
        name: "Using props to pass data",
        excercises: 7
      },
      {
        name: "State of component",
        excercises: 14 
      }
    ]
  }
  //above are const definitions
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
        {/* the .course is the name of prop */}
      </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.partname} {props.excercise}</p>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part partname = {props.parts[0].name} excercise = {props.parts[0].excercises} />
        <Part partname = {props.parts[1].name} excercise = {props.parts[1].excercises} />
        <Part partname = {props.parts[2].name} excercise = {props.parts[2].excercises} />
      </div>
    )
  }
  //made a lot of props
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
      </div>
    )
  }
  return (
    <div>
      <Header course = {course.name} />
      {/* above is using the props */}
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
  </div>
  )
  }
  
// //in JSX every tag needs be closed. In HTMl we can do
// //<br> but in JSX, it needs to be
// //<br />

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// //above is for index.js

// //below is for lessons in FSO
// // const [left, setLeft] = useState(0)
//   // const [right, setRight] = useState(0)
//   // const [allClicks, setAll] = useState([])
//   // const [clicks, setClicks] = useState( {
//   //   left: 0, right: 0
//   // }) 
//   // const handleLeftClick = () => {
//   //   setAll(allClicks.concat("L"))
//   //   setLeft(left + 1)
//   // }
//   // const handleRightClick = () => {
//   //   setAll(allClicks.concat("R"))
//   //   setRight(right + 1)
//   // }

//   // return (
//   //   <div>
//   //     {left}
//   //     <Button onClick = {handleLeftClick} text = "left" />
//   //     <Button onClick = {handleRightClick} text = "right" />
//   //     {right}
//   //     <History allClicks = {allClicks} />
//   //   </div>
//   // )
//   // const [ counter, setCounter ] = useState(0)
//   // const increaseByOne = () => setCounter(counter + 1)
//   // const decreaseByOne = () => setCounter(counter - 1)
//   // const setToZero = () => setCounter(0)
//   // return (
//   //   <div>
//   //     <Display counter = {counter}/>
//   //     <Button 
//   //       onClick = {increaseByOne}
//   //       text = "plus"
//   //     />
//   //     <Button
//   //       onClick = {decreaseByOne}
//   //       text = "minus"
//   //     />
//   //     <Button 
//   //       onClick = {setToZero}
//   //       text = "zero"
//   //     />
//   //   </div>
//   // )
//   // import { useState } from "react"
// // const Display = ( {counter} ) => <div>{counter}</div>

// // const Button = (props) => {
// //   console.log(props)
// //   const {onClick, text} = props
// //   return (
// //     <button onClick = {onClick}>
// //     {text}
// //   </button>
// //   )
// // }
// // const Button = ( { handleClick, text } ) => (
// //   <button onClick = {handleClick}>
// //     {text}
// //   </button>
// // )
// // const History = (props) => {
// //   if (props.allClicks.length === 0) {
// //     return (
// //       <div>
// //         the app is used by pressing the buttons
// //       </div>
// //     )
// //   }

// //   return (
// //     <div>
// //       button press history: {props.allClicks.join(" ")}
// //     </div>
// //   )
// // }

