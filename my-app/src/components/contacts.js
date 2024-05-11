import React from "react";
import 'boxicons'

export default function Contacts(){
    return(
        <div className="container button-container">
            <button className="contacts-button button-grey">
                <box-icon className="contacts-button-icon " name='envelope' type='solid' ></box-icon> Email 
            </button>
            <button className="contacts-button button-blue">
                <box-icon className="contacts-button-icon " name='linkedin-square' color="#e9e9e9" type='logo' ></box-icon> Linkedin
            </button>
        </div>
    )
}