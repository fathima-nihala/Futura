import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Backdop =(props)=>{
   //Backdop is a functional component for the backdrop of the modal.

    return(
        <div onClick={props.hideHandler}  className='backdrop'/>
        // hideHandler, which is a function to close the modal when the backdrop is clicked.
        // backdrop is clicked, it calls the hideHandler function to close the modal.
        
    )
}

const ModalOverlay =(props) =>{
    //ModalOverlay is a functional component for the content of the modal.

    return(
        <div className='modal'>{props.children}</div>
    )
}

const portalElements = document.getElementById('overlays')
//portalElements is a reference to an HTML element with the ID of 'overlays'


const Modal = (props) => {
    //Modal is a functional component that renders both the backdrop and modal overlay using React Portals.
  return (
    <div>
        {ReactDOM.createPortal(<Backdop hideHandler={props.hideHandler}/>,portalElements)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElements)}
    </div>
    //props.hideHandler: This prop is passed to the backdrop component to handle closing the modal.
    //props.children: This prop represents the content that you want to display within the modal.
  )
}

export default Modal