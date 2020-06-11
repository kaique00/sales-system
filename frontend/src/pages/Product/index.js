import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './style.css'


export default function Product() {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [amount, setAmount] = useState('')
    async function handleRegister(e) {
        e.preventDefault()
        const data = {
            name,
            value,
            description,
            amount,
            type
        }
        const response = await api.post('product/create', data)
        alert(response.data.message)
    }
    return (
        <div className="product-container">
            <div className="content">
                <section>
                    <h1>Cadastro de Produtos</h1>
                    <p>Preencha todos os campos para cadastrar um novo produto.</p>
                    <Link className="button" to="/listproducts">Voltar </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input required placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <textarea required placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input required placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                     <input required placeholder="Quantidade"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                     <input required placeholder="Tipo de prouto"
                        value={type}
                        onChange={e => setType(e.target.value)}
                    />
                    <button className="button">Cadastrar</button>
                </form>
            </div >
            
        </div >

    )
} 