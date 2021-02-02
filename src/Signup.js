import React, { Component } from 'react'
import axios from 'axios'
import './Signup.css'

 class Signup extends Component {
 

      saveInfo=(e)=>{
          e.preventDefault()
          let obj={
              firstname:e.target[0].value,
              lastname:e.target[1].value,
              dob:e.target[2].value,
              age:e.target[3].value,
              address:e.target[4].value,
              pincode:e.target[5].value
          }
          axios.post('http://localhost:3080/users',obj).then((res)=>{
            console.log('res',res)
          }).then((error)=>{
console.log(error);
          })

     }
     
    render() {
        return (
            <div>
                  
      <h1 className="head">Sign Up form</h1>
      <form className="todo-form" onSubmit={this.saveInfo} >
        <input
          type="text"
          placeholder="Enter the first name"
          name="firstName"
        ></input>
        <input
          type="text"
          placeholder="Enter the Last name"
          name="lastName"
        ></input>
        <input type="date" placeholder="Enter the DOB" name="dob"></input>
        <input type="number" placeholder="Enter the age" name="age"></input>
        <input type="text" placeholder="Enter the address" name="address"></input>
        <input type="text" placeholder="Enter the pincode" name="pincode"></input>
        <br></br>
        <button type="submit">Sign Up</button>
      </form>

            </div>
        )
    }
}

export default Signup
