import React from "react";
import 'boxicons'

export default function Footer(){
    return(
        <div className="container button-container">
            <button className="icon-button button-grey">
                <box-icon className="contacts-button-icon " name='twitter' type='logo' color="#666" ></box-icon>
            </button>
            <button className="icon-button button-blue">
                <box-icon className="contacts-button-icon " name='facebook' type='logo' color="#666" ></box-icon>
            </button>
            <button className="icon-button button-grey">
                <box-icon className="contacts-button-icon " name='github' type='logo' color="#666" ></box-icon>
            </button>
            <button className="icon-button button-blue">
                <box-icon className="contacts-button-icon " name='instagram' type='logo' color="#666" ></box-icon>
            </button>
        </div>
    )
}