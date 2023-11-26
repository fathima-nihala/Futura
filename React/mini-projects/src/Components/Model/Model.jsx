import React,{useState} from "react";
import { ReactDOM } from "react";
import './Model.css'

const Backdrop=(props)=>{
    return(
        <div onClick={props.hideHandler} className="backdrop"></div>
    )
}

const ModelOverlay=(props)=>{
    return(
        <div onClick={props.children}></div>
    )
}

const PortalElements=document.getElementById('overlays')

const Model=(props)=>{
    return(
        <div>
            {ReactDOM.createPortal(<Backdrop hideHandler={props.hideHandler}/>,PortalElements)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,PortalElements)}
        </div>
    )
}

export default Model