import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'

const tag = <p>Olá, React!</p>

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)