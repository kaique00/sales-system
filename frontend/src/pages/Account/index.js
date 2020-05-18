import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './style.css'


export default function Account() {

    const [products, setProducts] = useState([])
    const [listProducts] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(function loadProduct() {
        api.get('products').then(response => {
            setProducts(response.data)
        })
    }, [])
    function limpaCampos(){
        document.getElementById('product').value = ""
    }
    async function addProduct() {
        const product = Number(document.getElementById('product').value)
        const list = (document.getElementById('listProducts'))
        let item = document.createElement('li')
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === product) {
                item.innerHTML = `<strong> Produto: ${products[i].name}    Valor:${products[i].value} </strong>`
                listProducts.push(products[i])
                list.appendChild(item)
                setTotal(total + products[i].value)

            }
        }
    }
    async function salvaItem(accountId, productId, productValue) {
        await api.post('itensaccount', { account_id: accountId, product_id: productId, value: 1 })
    }
    async function finalizar() {
        const account_id = await api.post('accounts', { value: total, user_id: 1 })
        listProducts.map(product => (
            salvaItem(Number(account_id.data.account_id), product.id)
        ))
        alert(`Venda ${account_id.data.account_id} salva com sucesso`)
        limpaCampos()
    }
    async function handleRegister(e) {
        e.preventDefault()


    }
    return (
        <div className="product-container">
            <div className="content">
                <section>
                    <h1>Venda</h1>
                    <ul id="listProducts">

                    </ul>
                    <p>Insira os produtos !</p>
                    <Link className="button" to="/listproducts">Voltar </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <label>Selecione um Produto:</label>
                    <select id="product" require="true">
                        <option>Produto</option>
                        {products.map(product => (
                            <option key={product.id} value={product.id}>
                                {product.name}</option>
                        ))}
                    </select>
                    <h1> Total da venda {total}</h1>
                    <button className="button" onClick={addProduct}>Adicionar</button>
                    <button className="button" onClick={finalizar}>Finalizar</button>
                </form>
            </div>
        </div>

    )
}
