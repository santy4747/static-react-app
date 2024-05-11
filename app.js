import React from "react"
import "boxicons"

import './css/styles.css'
import Image from './components/image'
import Contacts from "./components/contacts"
import Content from "./components/content"
import Footer from "./components/footer"

export default function App(){
    return(
        <div className="parent-container">
            <Image />
            <Contacts />
            <Content />
            <Footer />
        </div>
    )
}