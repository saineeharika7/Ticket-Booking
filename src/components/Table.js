import React from 'react'
import './Table.css'
import { Card, Form ,Button } from 'react-bootstrap';


function Table() {

  const seats = [
    { name: 'WindowSeat', id: 1, number: 1 },
    { name: 'MiddleSeat', id: 2, number: 2 },
    { name: 'AisleSeat', id: 3, number: 3 },
    { name: 'AisleSeat', id: 4, number: 4 },
    { name: 'MiddleSeat', id: 5, number: 5 },
    { name: 'WindowSeat', id: 6, number: 6 },
    { name: 'WindowSeat', id: 7, number: 7 },
    { name: 'MiddleSeat', id: 8, number: 8 },
    { name: 'AisleSeat', id: 9, number: 9 },
    { name: 'AisleSeat', id: 10, number: 10 },
    { name: 'MiddleSeat', id: 11, number: 11 },
    { name: 'WindowSeat', id: 12, number: 12 },
    { name: 'WindowSeat', id: 13, number: 13 },
    { name: 'MiddleSeat', id: 14, number: 14 },
    { name: 'AisleSeat', id: 15, number: 15 },
    { name: 'AisleSeat', id: 16, number: 16 },
    { name: 'MiddleSeat', id: 17, number: 17 },
    { name: 'WindowSeat', id: 18, number: 18 },
    { name: 'WindowSeat', id: 19, number: 19 },
    { name: 'MiddleSeat', id: 20, number: 20 },
    { name: 'AisleSeat', id: 21, number: 21 },
    { name: 'AisleSeat', id: 22, number: 22 },
    { name: 'MiddleSeat', id: 23, number: 23 },
    { name: 'WindowSeat', id: 24, number: 24 },
    { name: 'WindowSeat', id: 25, number: 25 },
    { name: 'MiddleSeat', id: 26, number: 26 },
    { name: 'AisleSeat', id: 27, number: 27 },
    { name: 'AisleSeat', id: 28, number: 28 },
    { name: 'MiddleSeat', id: 29, number: 29 },
    { name: 'WindowSeat', id: 30, number: 30 },

  ]

  const handleSeat = (seat, index) => {
      return <div key={index} className="grid-item">{seat.number}</div>

  }
 const cardForming =() => {
   return (
<>
  <div className ="form-group-row">
     <div className="col-xs-2">

  <label className="form-label" for="age">Age : </label>
  <input className="form-control" name="age" placeholder="enter age" />
  </div>
 
  </div>

  <p> Please select your gender:</p>
  

</>
   )
 }
 

  return (
    <div className="main-container">
      <div className="grid-container">
        {seats.map(handleSeat)}
      </div>
      <div className="form-container">
        <Form className ="mb-3">
          <h2>Passenger Details Form</h2>
          <label className="form-label" for="seats">Enter the no.of Seats : </label>
          <input className="form-control mb-3" width ="20%" name="seats" placeholder="enter the number" />
          
          <Card className ="  card mb-3" >
            <button onClick ={()=>cardForming()}>+</button>
            <div className ="form-group-row">
               <div className="col-xs-2">

            <label className="form-label" for="age">Age : </label>
            <input className="form-control" name="age" placeholder="enter age" />
            </div>
           
            </div>
         
            <p> Please select your gender:</p>
            <div style ={{display:'flex'}}>
               <label className="form-label" for="age">Female </label>
            <input name="radio" type ="radio" placeholder="enter age" />
            </div>
            <div style ={{display:'flex'}}>
               <label className="form-label" for="age">Male </label>
            <input name="radio" type ="radio" placeholder="enter age" />
            </div> <div style ={{display:'flex'}}>
               <label className="form-label" for="age">Others </label>
            <input name="radio" type ="radio" placeholder="enter age" />
            </div>
           


          </Card>




        </Form>
      </div>
    </div>



  )
}

export default Table
