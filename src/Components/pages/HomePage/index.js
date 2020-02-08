import React from 'react'
import './styles.scss'
import { useHistory } from "react-router-dom"

const HomePage = () => {
    let history = useHistory()
    const handleLinkPage = () => {
        history.push("/shop")
    }
    return(
        <div className='homepage'>
            <h1>WELCOME TO MY SHOP !</h1>
            <button className='hompage-button' onClick={handleLinkPage}>Continue</button>
        </div>
    )
}
export default HomePage