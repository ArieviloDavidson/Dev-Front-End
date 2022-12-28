import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const tag = <p>Olá, Mundo!</p>

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)