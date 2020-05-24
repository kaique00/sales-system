import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
//import logoImg from '../../assets/logo.jpg'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'


export default function ListProducts() {
    const [sales, setSales] = useState([])
    const [users, setUsers] = useState([])
    const [itenssale, setItenssale] = useState([])
    useEffect(function loadSales() {
        api.get('sales').then(response => {
            setSales(response.data)
        })
    }, [])
    async function loadUsers(id){
        const user = api.get(`users/list/{id}`)
        return user
    }
    async function loaditensSale(id){
        api.get(`itenssale/list/{id}`).then(response => {
            setItenssale(response.data)
        })
    }
    async function deleteSale(id){
        alert("Deseja realmenet excluir esta venda ?")
        const sale = await api.delete(`sale/delete/${id}`)
        api.get('sales').then(response => {
            setSales(response.data)
        })
        console.log(sale.data.message)
    }
    return (
        <div className="listproducts-container">
            <header>
                <img src="" alt="" srcset="" />
                <span>Bem vindo, Kaique</span>
                <Link className="button" to="/products">Cadastrar novo Produto</Link>
                <Link className="button" to="/sales">Começar venda</Link>
                <Link to="/">
                    <FiPower fize={18} color="#E02041" />
                    </Link>
                
            </header>
            <h1>Lista de produtos</h1>
            
            <ul>
                {sales.map(sale => (
                    <div className='table'>
                    <li>
                    <strong key={sale.id}>Venda: {sale.id}</strong>
                    <strong>Vendedor:  </strong> 
                    <strong>Valor:</strong>
                    <p>{sale.value}</p>
        
                    <button onClick = {() => deleteSale(sale.id)}
                    type="button">
                        <FiTrash2 size={20} />
                    </button>
                </li>
                </div>
                ))}   
            </ul>
        </div>

    )
}