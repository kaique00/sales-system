import React from 'react'
//import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import '../../../src/global.css'
import './style.css'
import contasImg from '../../assets/contas.jpg'


export default function Login() {
    return(
    <div className="login-container">
        <section className="form">
            <h1>Faça Login</h1>
            <form>
            <input placeholder="Username" />
            <button  type="submit"className= "button"><FiLogIn size={16} color="#E02041"/>
             Login</button>
            </form>
        
        </section>
        <img src= {contasImg} alt="Contas"/>


    </div>
    )
}