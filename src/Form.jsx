import React from 'react'
import { useState } from 'react'

function Form() {
    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [age,setAge]=useState(0)
    // let [hobbies,setHobbies]=useState([])
    let [nameError,setNameError]=useState('')
    let [emailError,setEmailError]=useState('')
    let [ageError,setAgeError]=useState('')


    let handleNameChange=(event)=>{
        setName(event.target.value)
        setNameError('')
    }
    let handleEmailChange=(event)=>{
        setEmail(event.target.value)
        setEmailError('')
    }
    let handAgeChange=(event)=>{
        setAge(event.target.value)
        setAgeError('')
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        let isValid=true

        if(!name){
            setNameError('Name is Required')
            isValid=false
        }
        
        if(!email){
            setEmailError("Email is Required")
            isValid=false
        }else if(!/\s+@\s+\.\s+/.test(email)){
            setAgeError('Ivalid Email')
        }

        if(isValid){
            console.log(`Form Submitted:`,{name,email});
            setName('')
            setEmail('')
            setAge('')
            
        }
    }

  return (
    <form></form>
  )
}

export default Form
