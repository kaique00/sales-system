import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './style.css'


export default function Sale() {

    const [products, setProducts] = useState([])
    const [observation, setObservation] = useState("")
    const [discount, setDiscount] = useState(0)
    const [listProducts] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(function loadProduct() {
        api.get('products').then(response => {
            setProducts(response.data)
        })
    }, [])
    function limpaCampos(){
        document.getElementById('product').value = ""
        setTotal(0)
        listProducts.length = 0
        const list = (document.getElementById('listProducts'))
        list.innerHTML = ""
    }
    async function addProduct() {
        const product = Number(document.getElementById('product').value)
        const list = (document.getElementById('listProducts'))
        let item = document.createElement('li')
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === product) {
                item.innerHTML = `<strong> Produto: ${products[i].name}<br>Valor:${products[i].value} </strong>`
                listProducts.push(products[i])
                list.appendChild(item)
                setTotal(total + Number(products[i].value))
            }
        }
    }
    async function salvaItem(saleId, productId, productValue) {
        console.log(saleId,productId, productValue)
        await api.post('itenssale/create', { sale_id: saleId, product_id: productId, value: productValue })  
    }
    async function handleRegister(e) {
        e.preventDefault()
    }
    async function finalizar(){
        const sale = await api.post('sale/create', { value: total, user_id: 1, 
        observation:observation, discount:Number(discount) })
        listProducts.map(product => (
            salvaItem(Number(sale.data.sale_id), product.id, product.value)
        ))
        alert(sale.data.message)
        limpaCampos()
    }
    
    return (
        <div className="product-container">
            <div className="content">
                <section>
                    <h1>Venda</h1>
                    <div className="table">
                    <ul id="listProducts">
                    
                    </ul>
                    </div>
                    <h1> Total da venda {total}</h1>
                    <p>Insira os produtos !</p>
                    <Link className="button" to="/listproducts">Voltar </Link>
                </section>
                <form onSubmit={handleRegister} >
                    <label>Selecione um Produto:</label>
                    <select id="product" require="true">
                        <option>Produto</option>
                        {products.map(product => (
                            <option key={product.id} value={product.id}>
                                {product.name}</option>
                        ))}
                    </select>
                         
                    <textarea required placeholder="Observações da venda"
                        value={observation}
                        onChange={e => setObservation(e.target.value)}
                    />       
                        <input required placeholder="Desconto"
                        value={discount}
                        onChange={e => setDiscount(e.target.value)}
                    />  
                    <button className="button" onClick={addProduct}>Adicionar</button>
                    <button className="button" onClick={finalizar}>Finalizar</button>
                </form>
            </div>
        </div>

    )
}
