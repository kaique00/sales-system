import React from 'react'
import { Link } from 'react-router-dom'
//import logoImg from '../../assets/logo.jpg'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'


export default function ListProducts() {

    return (
        <div className="listproducts-container">
            <header>
                <img src="" alt="" srcset="" />
                <span>Bem vindo, Kaique</span>
                <Link className="button" to="/products">Cadastrar novo Produto</Link>
                <Link className="button" to="/accounts">Começar venda</Link>
                <Link to="/">
                    <FiPower fize={18} color="#E02041" />
                    </Link>
                
            </header>
            <h1>Lista de produtos</h1>
            <ul>
                <li>
                    <strong>Produto:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Descrição:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Valor:</strong>
                    <p>19,99</p>
                    <button type="button">
                        <FiTrash2 size={20} />
                    </button>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Descrição:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Valor:</strong>
                    <p>19,99</p>
                    <button type="button">
                        <FiTrash2 size={20} />
                    </button>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Descrição:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Valor:</strong>
                    <p>19,99</p>
                    <button type="button">
                        <FiTrash2 size={20} />
                    </button>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Descrição:</strong>
                    <p>Camiseta Azul</p>
                    <strong>Valor:</strong>
                    <p>19,99</p>
                    <button type="button">
                        <FiTrash2 size={20} />
                    </button>
                </li>
            </ul>
        </div>

    )
}