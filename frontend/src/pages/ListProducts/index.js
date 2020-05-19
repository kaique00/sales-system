import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
//import logoImg from '../../assets/logo.jpg'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'


export default function ListProducts() {
    const [accounts, setAccounts] = useState([])
    useEffect(function loadAccounts() {
        api.get('accounts').then(response => {
            setAccounts(response.data)
        })
    }, [])
    async function loadVendedor(id){
        await api.get('users', )
    }
    async function deleteAccount(id){
        alert("Deseja realmenet excluir esta venda ?")
        const teste = await api.delete(`accounts/${id}`)
        console.log(teste.data.message)
    }
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
                {accounts.map(account => (
                    <li>
                    <strong key={account.id}>Venda: {account.id}</strong>
                    <strong>Vendedor:</strong>
                    
                    <strong>Valor:</strong>
                    <p>{account.value}</p>
                    <button onClick = {() => deleteAccount(account.id)}
                    type="button">
                        <FiTrash2 size={20} />
                    </button>
                </li>
                ))}   
            </ul>
        </div>

    )
}