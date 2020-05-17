import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import './style.css'


export default function Product() {
    
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ value, setValue ] = useState('')


    async function handleRegister(e) {
        e.preventDefault()
        const data = {
            name,
            value,
            description,
        }
        console.log(data)      
            await api.post('products', data)
            try{
                alert(`Cadastro efetuado com sucesso`)
            }catch(err){
                alert(`falha no cadastro favor tente novamente`)
            }
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
                        onChange={e =>  setName(e.target.value)}
                    />
                    <textarea required placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input required placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button">Cadastrar</button>
                </form>
                
            </div>

        </div>

    )
} 